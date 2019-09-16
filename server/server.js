const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Setup servr
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
// Setup connection to DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE || process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
// Init middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
