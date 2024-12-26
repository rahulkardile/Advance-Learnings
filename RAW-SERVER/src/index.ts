import * as http from 'http2';
import * as url from url;

const sendJSONResponse = (res: http.Http2ServerResponse, status: number, data: Object) : void =>{
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

const handleError = (res: http.Http2ServerResponse, statusCode: number, message: string): void => {
    console.error("Error:", message);
    sendJSONResponse(res, statusCode, { error: message });
};