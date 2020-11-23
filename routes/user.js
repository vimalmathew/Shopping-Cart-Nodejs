var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers')
/* GET home page. */
router.get('/', function (req, res, next) {
  productHelpers.getAllproducts().then((product)=>{
    res.render('user/view-products',{product,admin:false})
  })
})
module.exports = router;
