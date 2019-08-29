const express = require('express');
const router = express.Router();
//Miidleware
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
// Models
const Brand = require('../../models/Brand');

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
