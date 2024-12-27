import * as http2 from "http2";
import * as url from "url";
import * as fs from "fs";

import sendJSONResponse from "../utils/JsonRequestConverter";
import handleError from "../utils/errorHandler";
import path from "path";

type RequestBody = { [key: string]: any };
type QueryParams = {
  [key: string]: any; // Adjust the types as per your needs
};

// const serverOptions: http2.SecureServerOptions = {
//     key: fs.readFileSync(path.join(__dirname, '../../ssl/private-key.pem')),
//     cert: fs.readFileSync(path.join(__dirname, '../../ssl/certificate.pem')),
//     secureProtocol: 'TLS_method',
//     minVersion: 'TLSv1.2',
// };

const parseRequestBody = (
  req: http2.Http2ServerRequest
): Promise<RequestBody> => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error("Invalid JSON body"));
      }
    });
  });
};

// Set security and CORS headers
const setSecurityHeaders = (res: http2.Http2ServerResponse): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
};

// Demo route handlers
type RouteHandler = (
  req: http2.Http2ServerRequest,
  res: http2.Http2ServerResponse,
  params: QueryParams,
  body: RequestBody
) => void;

const routes: { [key: string]: RouteHandler } = {
  "/": (req, res) => {
    sendJSONResponse(res, 200, { message: "hello buddy!" });
  },
  "/add": (req, res, params) => {
    const a = parseFloat(params.a || "");
    const b = parseFloat(params.b || "");
    if (isNaN(a) || isNaN(b)) {
      return handleError(
        res,
        400,
        "Parameters 'a' and 'b' must be valid numbers"
      );
    }
    sendJSONResponse(res, 200, { result: a + b });
  },
  "/subtract": (req, res, params) => {
    const a = parseFloat(params.a || "");
    const b = parseFloat(params.b || "");
    if (isNaN(a) || isNaN(b)) {
      return handleError(
        res,
        400,
        "Parameters 'a' and 'b' must be valid numbers"
      );
    }
    sendJSONResponse(res, 200, { result: a - b });
  },
  "/multiply": async (req, res, _, body) => {
    const a = parseFloat(body.a);
    const b = parseFloat(body.b);
    if (isNaN(a) || isNaN(b)) {
      return handleError(
        res,
        400,
        "Parameters 'a' and 'b' must be valid numbers in the JSON body"
      );
    }
    sendJSONResponse(res, 200, { result: a * b });
  },
  "/divide": async (req, res, _, body) => {
    const a = parseFloat(body.a);
    const b = parseFloat(body.b);
    if (isNaN(a) || isNaN(b)) {
      return handleError(
        res,
        400,
        "Parameters 'a' and 'b' must be valid numbers in the JSON body"
      );
    }
    if (b === 0) {
      return handleError(res, 400, "Cannot divide by zero");
    }
    sendJSONResponse(res, 200, { result: a / b });
  },
};

// HTTP/2 Server with SSL
// the above comment is wrong
const server = http2.createServer(async (req, res) => {
  setSecurityHeaders(res);
  const parsedUrl = url.parse(req.url || "", true);
  const pathname = parsedUrl.pathname || "";
  const params = parsedUrl.query as QueryParams;

  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  // Match route
  const routeHandler = routes[pathname];
  if (!routeHandler) {
    return handleError(res, 404, "Endpoint not found");
  }

  try {
    let body: RequestBody = {};
    if (
      req.method === "POST" ||
      req.method === "PUT" ||
      req.method === "PATCH"
    ) {
      body = await parseRequestBody(req);
    }

    // Execute route handler
    routeHandler(req, res, params, body);
  } catch (err: any) {
    handleError(res, 500, err.message || "Internal Server Error");
  }
});

// Start server on HTTP/2
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
