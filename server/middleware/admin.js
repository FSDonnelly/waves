let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('Not valid Admin Credentials');
  }
  next();
};

module.exports = { admin };
