const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  },
  description: {
    required: true,
    type: String,
    maxlength: 100000
  },
  price: {
    required: true,
    type: Number,
    maxlength: 255
  },
  brand: {}
});

module.exports = Product = mongoose.model('Product', ProductSchema);
