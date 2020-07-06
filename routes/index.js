const express = require('express');
const Recipe = require('../models/Recipe');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const user = req.user;
  Recipe.find().then(recipesFromDB => {
    res.render('index', {recipeList: recipesFromDB});
  })
  console.log(user);
});

router.get('/addRecipe', (req, res) => {
  res.render('addRecipe')
}); 
//needed: post route to create new recipe 


//see shopping list for chosen recipe
router.get('/shopping-list', (req, res) => {
  res.render('shopping-list')
}); 

router.get('/:recipeId', (req, res, next) => {
  const recipeId = req.params.recipeId; 
  Recipe.findById(recipeId).then(recipesFromDB => {
    console.log(recipesFromDB); 
    res.render('recipeDetails', {recipe: recipesFromDB}); 
  }).catch(err => {
    console.log(err); 
  })
})


module.exports = router;
