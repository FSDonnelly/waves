const express = require('express');
const router = express.Router();
//Miidleware
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
// Models
const Brand = require('../../models/Brand');
const Wood = require('../../models/Wood');
const Product = require('../../models/Product');

//=====================================
//             PRODUCTs
//=====================================
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
router.get('/brands', auth, admin, (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(brands);
  });
});

module.exports = router;
