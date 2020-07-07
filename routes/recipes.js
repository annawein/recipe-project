const express = require('express'); 
const passport = require('passport'); 
const router = express.Router(); 
const User = require('../models/User'); 
const Recipe = require('../models/Recipe'); 
const mongoose = require('mongoose'); 


router.post('/addShoppingList/:id', (req, res, next) => {
  console.log("working", req.params.id,req.user); 
  User.findByIdAndUpdate(req.user._id,{$push:{shoppingList:req.params.id}},{new:true}).then(responseDB=>{
  console.log(responseDB)
  res.redirect(`/add/shoppingList/${req.user._id}`)
}).catch(error=>console.log(error))
}); 

router.get('/add/shoppingList/:id', (req, res, next) => {
  console.log("working?",req.params.id)
  res.render('shopping-list')
})


module.exports = router;




