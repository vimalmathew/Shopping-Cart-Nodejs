var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      count:1,
      name:"iphone 11",
      category:"mobile phone",
      description:"good phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      count:2,
      name:"iphone 10",
      category:"mobile phone",
      description:"average phone",
      image:"data:image/jpeg;base64,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"
    }
  ]
  res.render('admin/view-products',{products,admin:true})
});

router.get('/add-product',function(req,res){
   res.render('admin/add-product')
});

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files); 
})

module.exports = router;