const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const user = req.user;
  console.log(user);
  res.render('index');
});

module.exports = router;
