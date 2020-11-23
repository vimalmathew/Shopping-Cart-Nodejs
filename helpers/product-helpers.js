var db = require('../config/connection')
var collection=require('../collection/collection')
module.exports={
    addProduct:(product,callback)=>{
        db.get().collection('product').insertOne(product).then((data)=>{
            callback((data.ops[0]._id))
        })
    },

    getAllproducts:()=>{
        return new Promise(async(resolve,reject)=>{
            await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray().then((product)=>{
                resolve(product)
            })   
        })
    },

    
}