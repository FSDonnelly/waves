const express = require('express');
const router = express.Router();
//Miidleware
const auth = require('../../middleware/auth');
// Models
const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// @route   POST api/users/login
// @desc    Login user
// @access  Public

router.post('/login', (req, res) => {
  // check if user is registered if email already exists
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({ loginSuccess: false, message: 'Email not found' });
    // check password of login user's email
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: 'Password Incorrect' });
      // Generate token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({
            loginSuccess: true
          });
      });
    });
  });
});

// @route   POST api/users/auth
// @desc    Auth user
// @access  Private
router.get('/auth', auth, function(req, res) {
  res.status(200).json({
    user: req.user
  });
});

module.exports = router;
