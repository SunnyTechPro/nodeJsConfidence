const rateLimit = {};

module.exports = (res, req, next) => {
    const userIp = req.ip;
    const currentTime = Date.now();
    const timeWindow = 60000;
    const requestLimit = 10;

    if (!rateLimit[userIp]) {
        rateLimit[userIp] = [];
    }
    // Filter requests within the time window
    rateLimit[userIp] = rateLimit[userIp].filter(timestamp => currentTime - timestamp < timeWindow);

    if (rateLimit[userIp].length >= requestLimit) {
        res.status(429).json({ message: 'Too many requests, please try again later.' });
    } else {
        rateLimit[userIp].push(currentTime);
        next();
    }

}