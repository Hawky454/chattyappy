let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  console.log('made it to the index route')
  res.render('index', { title: 'Express' });
});

module.exports = router;
