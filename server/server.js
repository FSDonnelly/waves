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
// Register User
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, userdata: doc });
  });
});

// Login User
app.post('/api/users/login', (req, res) => {
  // find email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({ loginSuccess: false, message: 'Email not found' });
    // check password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: 'Password not valid'
        });
      // generate token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie('w_auth', user.token)
          .status(200)
          .json({
            loginSuccess: true
          });
      });
    });
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
