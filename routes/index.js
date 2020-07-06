const express = require('express');
const Recipe = require('../models/Recipe');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  Recipe.find().then(recipesFromDB => {
  res.render('index', {recipeList: recipesFromDB});  
  }).catch(err => {
    console.log(err); 
  })
});

router.get('/:recipeId', (req, res) => {
  const recipeId = req.params.recipeId; 
  Recipe.findById(recipeId).then(recipesFromDB => {
    console.log(recipesFromDB); 
    res.render('recipeDetails', {recipe: recipesFromDB}); 
  }).catch(err => {
    console.log(err); 
  })
})

module.exports = router;
