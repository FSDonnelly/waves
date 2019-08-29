const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const connectDB = require('./cofig/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const User = require('./models/User');
// Define Routes

// @route   POST api/users/register
// @desc    Register user
// @access  Public

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      userData: doc
    });
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
