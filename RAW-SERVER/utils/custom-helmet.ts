import * as http from 'http';

// Custom "helmet-like" middleware to set security-related HTTP headers
const myHelmet = (req: http.IncomingMessage, res: http.ServerResponse) => {
    // Prevent MIME sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Disable caching to prevent sensitive data exposure
    res.setHeader('Cache-Control', 'no-store');
    
    // Enable HSTS for HTTPS
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    
    // Block cross-site scripting attacks
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Restrict referrer information
    res.setHeader('Referrer-Policy', 'no-referrer');
    
    // Set Content Security Policy (CSP)
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self'; style-src 'self';"
    );
    
    // Prevent cross-domain requests with Flash plugins
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    
    // Disable DNS prefetching
    res.setHeader('X-DNS-Prefetch-Control', 'off');
    
    // Hide the "X-Powered-By" header
    res.removeHeader('X-Powered-By');
};

export default myHelmet;