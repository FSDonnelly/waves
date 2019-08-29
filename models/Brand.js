const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1
  }
});

module.exports = Brand = mongoose.model('Brand', BrandSchema);
