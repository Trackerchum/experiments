const corsMiddleware = function (req: any, res: any, next: any) {
    // CORS headers
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Custom-Header');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    return next();
};

export { corsMiddleware };
