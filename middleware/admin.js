let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('Not authorized as admin. No Access!');
  }
  next();
};

module.exports = admin;
