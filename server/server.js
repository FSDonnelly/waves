const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Setup servr
const app = express();
const connectDB = require('./config/db');
// Connect Database
connectDB();
// Init middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Custom Middleware
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');
// Models
const { User } = require('./models/user');
const { Brand } = require('./models/brand');
const { Wood } = require('./models/wood');
const { Product } = require('./models/product');
//===========================
//    PRODUCTS
//===========================
// Get item by arrival
//{{url}}/api/product/items?sortBy=createdAt&order=desc&limit=4
// Get item by sales
//{{url}}/api/product/items?sortBy=sold&order=desc&limit=4
app.get('/api/product/items', (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Product.find()
    .populate('brand')
    .populate('wood')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, items) => {
      if (err) return res.status(400).send(err);
      res.send(items);
    });
});
// Create an item for inventory
app.post('/api/product/item', auth, admin, (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, item: doc });
  });
});

//Get all items
app.get('/api/product/items', (req, res) => {
  Product.find({}, (err, items) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(items);
  });
});

// Get items by id
//{{url}}/api/product/items_by_id?id=5d7f28718e9f1a4d64fed4bc,5d7f27248e9f1a4d64fed4bb,5d7f29708e9f1a4d64fed4bd&type=array
//{{url}}/api/product/items_by_id?id=5d7f28718e9f1a4d64fed4bc&type=single
app.get('/api/product/items_by_id', (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === 'array') {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });
  }
  Product.find({ _id: { $in: items } })
    .populate('brand')
    .populate('wood')
    .exec((err, docs) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(docs);
    });
});
//===========================
//    WOODS
//===========================
// Create a wood for inventory
app.post('/api/product/wood', auth, admin, (req, res) => {
  const wood = new Wood(req.body);

  wood.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, wood: doc });
  });
});

//Get all woods
app.get('/api/product/woods', (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(woods);
  });
});
//===========================
//    BRAND
//===========================
// Create a brand for inventory
app.post('/api/product/brand', auth, admin, (req, res) => {
  const brand = new Brand(req.body);

  brand.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, brand: doc });
  });
});

//Get all brands
app.get('/api/product/brands', (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(brands);
  });
});

//===========================
//    USERS
//===========================
// Auth User
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
});

// Register User
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
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

// Logout User
app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

// Connect server
const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
