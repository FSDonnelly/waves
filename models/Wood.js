const mongoose = require('mongoose');

const WoodSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1
  }
});

module.exports = Wood = mongoose.model('Wood', WoodSchema);
