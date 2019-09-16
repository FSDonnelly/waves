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
// Models
const { User } = require('./models/user');

//===========================
//    USERS
//===========================

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, userdata: doc });
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
