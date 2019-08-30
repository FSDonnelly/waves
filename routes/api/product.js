const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Miidleware
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
// Models
const Brand = require('../../models/Brand');
const Wood = require('../../models/Wood');
const Product = require('../../models/Product');

//=====================================
//             PRODUCTS
//=====================================

// @route   GET api/product/items?sortBy=createdAt&order=desc&limit=4
// @route   GET api/product/items?sortBy=sold&order=desc&limit=4
// @desc    Get items by sales
// @access  Public
router.get('/items', (req, res) => {
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
// @route   POST api/product/inventory
// @desc    Auth Admin update inventory
// @access  Private
router.post('/inventory', auth, admin, (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    res.status(200).json({ success: true, product: doc });
  });
});

// @route   GET api/product/inventory_by_id
// @desc    Auth Admin get inventory by id
// @access  Public
router.get('/inventory_by_id', (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === 'array') {
    let ids = items.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    });
  }

  Product.find({ _id: { $in: items } })
    .populate('brand')
    .populate('wood')
    .exec((err, docs) => {
      return res.status(200).send(docs);
    });
});

//=====================================
//           WOODS
//======================================
// @route   POST api/product/wood
// @desc    Auth Admin update wood
// @access  Private
router.post('/wood', auth, admin, (req, res) => {
  const wood = new Wood(req.body);

  wood.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    res.status(200).json({ success: true, wood: doc });
  });
});

// @route   GET api/product/woods
// @desc    User can get list of woods
// @access  Privat
router.get('/woods', auth, admin, (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(woods);
  });
});
//========================================
//            BRANDS
//========================================
// @route   POST api/product/brand
// @desc    Auth Admin update brand
// @access  Private
router.post('/brand', auth, admin, (req, res) => {
  const brand = new Brand(req.body);

  brand.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    res.status(200).json({ success: true, brand: doc });
  });
});

// @route   GET api/product/brands
// @desc    User can get list of brands
// @access  Public
router.get('/brands', (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(brands);
  });
});

module.exports = router;
