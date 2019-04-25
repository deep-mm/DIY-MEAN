const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

const url = 'mongodb://localhost:27017/diy-products';//'mongodb://admin:admin123@ds135796.mlab.com:35796/diy-product';//'mongodb://localhost:27017/diy-products';
const path = '/Users/deepmehta/Deep/Projects/GITHUB/Web Development/DIY - MEAN/Node/';
mongoose.Promise = global.Promise;

mongoose.connect(url, function (err,db) {
   if(err){
       console.log('Error occured in mongoDB connection');
   }
   else{
       console.log('Connected on url '+url);
   }
});

router.get('/',function (req,res) {
   res.send('API Works');
});

router.get('/products',function (req,res){
    console.log('Getting products from DB');
    Product.find({})
        .exec(function (err,products) {
            if(err){
                console.log('Error Occured');
            }
            else{
                res.json(products);
            }
        })
});

router.get('/product/:id',function (req,res){
    console.log('Getting product from DB');
    const id = req.params.id;
    Product.findById(id)
        .exec(function (err,product) {
            if(err){
                console.log('Error Occured');
            }
            else{
                res.json(product);
            }
        })
});

router.post('/product',function (req,res) {
   console.log('Adding a new product in DB');
   var product = new Product();
   product.id = req.body.id;
   product.name = req.body.name;
   product.price = req.body.price;
   product.imageUrl = req.body.imageUrl;
   product.save(function(err, insertedDoc){
        if(err){
            console.log("Error "+err);
        } else{
            res.json(insertedDoc); }
    })
});

router.put('/product/:id',function (req,res) {
   console.log('Updating a product');
   const id = req.params.id;
   Product.findByIdAndUpdate(id,
       {
           $set: {id: req.body.id, name: req.body.name, price: req.body.price}
       }, {new: true},
       function (err,updatedProduct) {
           if(err){
               console.log('Error occurred');
           }
           else{
               res.json(updatedProduct);
           }
       })
});

router.delete('/product/:id',function (req,res) {
   console.log('Deleting a product');
   const id = req.params.id;
   Product.findByIdAndDelete(id, function (err, deletedProduct) {
       if(err){
           console.log('Error Occurred');
       }
       else{
           res.json(deletedProduct);
       }
   })
});

router.get('*',function(req,res){
    res.sendFile(path+'public/404.html')
});

module.exports = router;
