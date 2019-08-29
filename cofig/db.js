require('dotenv').config();
const mongoose = require('mongoose');
const devDB = process.env.mongoURI;
const prodDB = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(prodDB || devDB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
