const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loggerMiddleware = require('./middlewares/logger');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const apiRoutes = require('./routes/api');

const app = express();

app.use(morgan('combined'));
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);
app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});