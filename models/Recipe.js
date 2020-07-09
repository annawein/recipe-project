const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const recipeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: "User", 
    // required: true, 
  },
  title: String, 
  ingredients: [
    {
    name: String, 
    quantity: Number, 
    measure: String, 
  },
], 
  duration: {
    type: Number, 
    min: 0,
  }, 
  image: String, 
  description: String, 
  dishType: {
    type: String, 
    enum: ['Breakfast', 'Main', 'Soup', 'Snack', 'Drink', 'Dessert', 'Other'],
  }
}); 

const Recipe = mongoose.model('Recipe', recipeSchema); 
module.exports = Recipe; 