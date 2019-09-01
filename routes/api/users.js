require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const auth = require('../../middleware/auth');

// const express = require('express');
// const router = express.Router();
// //Miidleware
// const auth = require('../../middleware/auth');
// // Models
// const User = require('../../models/User');

// // @route   POST api/users/register
// // @desc    Register user
// // @access  Public

// router.post('/register', (req, res) => {
//   const user = new User(req.body);

//   user.save((err, doc) => {
//     if (err) return res.json({ success: false, err });
//     res.status(200).json({
//       success: true
//     });
//   });
// });

// // @route   POST api/users/login
// // @desc    Login user
// // @access  Public

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials-E' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials-P' }] });
      }

      // Return JSONwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600 }, // Chnage to 3600 when deployed
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// // @route   GET api/users/logout
// // @desc    Logout user
// // @access  Private
// router.get('/logout', auth, (req, res) => {
//   User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).send({
//       success: true
//     });
//   });
// });

// // @route   GET api/users/auth
// // @desc    Auth user
// // @access  Private
router.get('/auth', auth, (req, res) => {
  const { email, role, name, lastname, cart, history } = req.user;

  res.status(200).json({
    isAdmin: role === 0 ? false : true,
    isAuthenticated: true,
    email,
    name,
    lastname,
    role,
    cart,
    history
  });
});

module.exports = router;

// @route   POST  /api/users/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('lastname', 'Lastname is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({
      min: 8
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, lastname, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        lastname,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return JSONwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 3600 }, // Chnage to 3600 when deployed
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('User Server Error');
    }
  }
);

module.exports = router;
