const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const connectDB = require('./db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
