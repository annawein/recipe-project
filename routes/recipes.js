const express = require('express'); 
const passport = require('passport'); 
const router = express.Router(); 
const User = require('../models/User'); 
const Recipe = require('../models/Recipe'); 
const mongoose = require('mongoose'); 
const ensureLogin = require("connect-ensure-login");

//new
router.get("/shoppingList", ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log(req.user); 
  const user = req.user;
  Recipe.find()
  .then(recipesFromDB => {
    console.log("do I even get here?", recipesFromDB)
    res.render('shopping-list', {list: recipesFromDB, user: user});
  })
  .catch((err)=> {
    console.log(err); 
    next(); 
  }); 
}); 

router.post("/shoppingList", (req, res) => {
  console.log(req.body.ingredient)
  let ing= req.body
  console.log(Object.values(ing))
  res.render('shopping-list',{ing})
})

router.post('/addShoppingList/:id', (req, res, next) => {
  console.log("working", req.params.id,req.user); 
  User.findByIdAndUpdate(req.user._id,{$push:{shoppingList:req.params.id}},{new:true}).then(responseDB=>{
  console.log(responseDB)
  res.redirect(`/add/shoppingList/${req.user._id}`)
}).catch(error=>console.log(error))
}); 


//this gets called with the button
router.get('/add/shoppingList/:id', (req, res, next) => {
  console.log("working?",req.params.id)
  res.render('shopping-list')
})


module.exports = router;




