import * as http2 from 'http2';
import sendJSONResponse from './JsonRequestConverter';

// handling errors
const handleError = (res: http2.Http2ServerResponse, statusCode: number, message: string): void => {
    console.error("Error:", message);
    sendJSONResponse(res, statusCode, { error: message });
};

export default handleError;