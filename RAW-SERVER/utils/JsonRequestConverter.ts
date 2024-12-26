import * as http from 'http2';

// creating json response
const sendJSONResponse = (res: http.Http2ServerResponse, status: number, data: Object) : void =>{
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

export default sendJSONResponse;