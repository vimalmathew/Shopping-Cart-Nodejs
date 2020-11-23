var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllproducts().then((products) => {
    res.render('admin/view-products',{products,admin:true})    
  })
});

router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
});

router.post('/add-product', (req, res) => {
  let image = req.files.Image;
  productHelpers.addProduct(req.body, (id) => {
    console.log(id);
    image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product');
      }
    })
  })
});



module.exports = router;
