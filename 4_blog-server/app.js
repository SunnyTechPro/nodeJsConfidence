const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loggerMiddleware = require('./middlewares/logger');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const blogRoutes = require('./routes/blog');

const app = express();

// Use Morgan for logging requests
app.use(morgan('combined'));
// Use custom logger middleware
app.use(loggerMiddleware);
// Use Body-Parser middleware to parse JSON file
app.use(bodyParser.json());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Blog Routes
app.use('/api', blogRoutes);
// Use custome error handling middleware
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
