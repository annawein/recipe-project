const express = require('express'); 
const passport = require('passport'); 
const router = express.Router(); 
const User = require('../models/User'); 
const Recipe = require('../models/Recipe'); 
const mongoose = require('mongoose'); 
const ensureLogin = require("connect-ensure-login");

//when I want to render the page from the nav bar
router.get("/shoppingList", ensureLogin.ensureLoggedIn(), (req, res) => {
  // const list = req.user.shoppingList[0].quantity;
  const list = req.user.shoppingList; 
  const user=req.user; 

  console.log(list)

  // console.log(ing); 
   res.render('shopping-list' , {list, user: user})
  // .catch((err)=> {
  //   console.log(err); 
  //   next(); 
  // }); 
}); 

//when I click the button (add to list)
router.post("/shoppingList", ensureLogin.ensureLoggedIn(), (req, res) => {
  // console.log(Object.values(ing)); 
  const user=req.user._id; 
  let ing= req.body.ingredient; 

  // console.log(user); 
  // console.log("SHOW ME THE"+ing)

  const list = ing.map(elem => {
    let part=elem.split(" ")
    return {quantity:part[0], name:part.slice(1).join(" ")}
  })

  User.findByIdAndUpdate(
    user, 
 { $push:{shoppingList: list}}
).then(list => {   
    res.redirect('/shoppingList')
    // res.render('shopping-list',{ list, user: user})
  }).catch(err => {
    console.log(err)
  })
}); 

router.get('/ingredients/remove/:ingredient', (req, res) => {
  const ingr=req.params.ingredient; 
  const user=req.user._id; 


  console.log(`${ingr} removed for user ${user}.`); 


  User.findByIdAndUpdate(
    user, 
    { $pull: {shoppingList: ingr}}
  ).then(list => {
    res.redirect('/shoppingList')
  }).catch(err => {
    console.log(err)
  })
}); 



router.post('/shoppingList/update', (req, res) => {
  console.log(req.body); 
}); 


// old
// router.post('/addShoppingList/:id', (req, res, next) => {
//   console.log("working", req.params.id,req.user); 
//   User.findByIdAndUpdate(req.user._id,{$push:{shoppingList:req.params.id}},{new:true}).then(responseDB=>{
//   console.log(responseDB)
//   res.redirect(`/add/shoppingList/${req.user._id}`)
// }).catch(error=>console.log(error))
// }); 
//this gets called with the button
// router.get('/add/shoppingList/:id', (req, res, next) => {
//   console.log("working?",req.params.id)
//   res.render('shopping-list')
// })


module.exports = router;




