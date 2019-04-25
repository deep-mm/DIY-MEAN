const express = require('express');
const router = express.Router();
const path = require('path');

const url = '/Users/deepmehta/Deep/Projects/GITHUB/Web Development/DIY - MEAN/Node/';

router.get('/',function (req,res) {
    res.sendFile(url+'public/index.html');
});
 
router.get('*',function(req,res){
    res.sendFile(url+'public/404.html')
});

module.exports = router;
