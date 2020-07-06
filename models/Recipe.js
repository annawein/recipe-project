const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const recipeSchema = new Schema({
  title: String, 
  ingredients: {
    type: String, 
    min: 1, 
  }, 
  duration: {
    type: Number, 
    min: 0,
  }, 
  image: String, 
  description: String, 
  dishType: {
    type: String, 
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'],
  }
}); 

const Recipe = mongoose.model('Recipe', recipeSchema); 
module.exports = Recipe; 