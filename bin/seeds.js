// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Recipe = require('../models/Recipe'); 

const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI ||'mongodb://localhost/recipe-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),

  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

// User.deleteMany()
// .then(() => {
//   return User.create(users)
// })
// .then(usersCreated => {
//   console.log(`${usersCreated.length} users created with the following id:`);
//   console.log(usersCreated.map(u => u._id));
// })
// .then(() => {
//   // Close properly the connection to Mongoose
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })

const recipes=[
  {
    user: "alice", 
    title: "Meatless meatballs with tomato sauce", 
    ingredients:[
      {name: "Red bell pepper", quantity: 1, measure: "pieces"},
      {name: "Cauliflower", quantity: 550, measure: "g"},
      {name: "Eggplants", quantity: 550, measure: "g"},
      {name: "Red onions", quantity: 2, measure: "pieces"},
      {name: "Gloves garlic", quantity: 4, measure: "pieces"},
      {name: "Spelt", quantity: 50, measure: "g"},
      {name: "Canned crushed tomatos", quantity: 800, measure: "g"},
      {name: "Panko breadcrumbs", quantity: 200, measure: "g"},
      {name: "Basil", quantity: 10, measure: "g"},
      {name: "Salt", quantity: 1, measure: "tbsp"},
      {name: "Pepper", quantity: 1, measure: "tbsp"},
      {name: "Olive Oil", quantity: 1, measure: "tbsp"},
    ], 
    duration: 40,
    image: "put image later", 
    description: "Preheat oven to 200°C/400°F. Roughly chop bell pepper, cauliflower, eggplant, and half of the red onion into bite-size pieces. Peel and crush half of the garlic cloves. Mince the remaining red onion and garlic cloves and set aside. Transfer the roughly chopped vegetables and crushed garlic cloves to a baking sheet. Drizzle with some olive oil and toss with salt and pepper. Roast at 200°C/400°F for approx. 20 min. or until the vegetables are tender. In the meantime, add spelt to a fine sieve and rinse under cold running water. Drain well and add to a pot of boiling water. Cook for approx. 20 min., or until spelt is chewy and cooked through. Drain and set aside. Heat olive oil in a deep frying pan or a large pot over medium. Add minced onion and garlic and sauté until the onion is translucent. Add canned tomatoes and bring to a simmer. Let the sauce cook until thickened slightly, stirring occasionally. Season to taste with salt and pepper. Remove roasted vegetables from the oven and transfer them to a food processor. Process until they’re roughly mixed. Transfer to a large bowl and add in cooked farro and breadcrumbs. Season with salt and pepper to taste, and mix to combine. If needed add more breadcrumbs until the mixture is able to hold its shape. Shape the mixture into small, gumball-sized balls and transfer them to a greased baking sheet, leaving room between them. Bake at 200°C/400°F for approx. 20 min. or until lightly browned and crisp on the outside. Add half of the basil leaves to the tomato sauce, then add the meatballs and lightly toss. Serve with remaining basil and enjoy!",
    dishType: "Main", 
  }, 
  {
    user: "bob", 
    title: "Sweet Potato Curry", 
    ingredients: [
      {name: "Red onions", quantity: 100, measure: "g"},
      {name: "Gloves garlic", quantity: 1, measure:"pieces"},
      {name: "Ginger", quantity: 1, measure:"tbsp"},
      {name: "Hokkaido", quantity: 200, measure: "g"},
      {name: "Cherry tomatos", quantity: 80, measure: "g"},
      {name: "Sweet potatos", quantity: 300, measure: "g"},
      {name: "Olive oil", quantity: 1, measure: "tbsp"},
      {name: "Tomato paste", quantity: 1, measure: "tbsp"},
      {name: "Curry powder", quantity: 1, measure: "tbsp"},
      {name: "Coconut milk", quantity: 500, measure:"ml"},
      {name: "Cashews", quantity: 80, measure:"g"},
      {name: "Salt", quantity: 1, measure: "tbsp"},
      {name: "Pepper", quantity: 1, measure: "tbsp"},
    ], 
    duration: 40, 
    image: "put image later", 
    description: "Finely dice onion and mince garlic. Peel ginger and finely mince. Next, cut pumpkin and bell pepper into cubes. Halve cherry tomatoes. Peel sweet potato and cut into equally sized cubes. Heat olive oil in pan over medium heat. Sauté onion, garlic, and ginger for approx. 1 – 2 min. Next, add cubed sweet potato, pumpkin, and red pepper. Stir in tomato paste, curry powder, and curry paste. Season to taste with salt, pepper, and chili flakes. Continue to sauté for an additional 3 – 5 min. Add coconut milk to frying pan and stir thoroughly. Bring to a boil, then reduce heat and allow to simmer for approx. 10 – 15 min. until tender. Roughly chop mint and basil. Add cashews, cherry tomatoes, and snow peas to frying pan. Stir thoroughly. Squeeze juice from lime and add to the curry. Gently stir in mint and basil. Serve with rice or bulgur and enjoy!", 
    dishType: "Main",
  }, 
  {
    user: "bob", 
    title: "Easy potato and onion tortilla", 
    ingredients: [
      {name: "Onions (small)", quantity: 2, measure:"pieces"},
      {name: "Potatoes (medium)", quantity: 6, measure:"pieces"},
      {name: "Eggs", quantity: 7, measure:"pieces"},
      {name: "Vegetable Oil", quantity: 1, measure: "tbsp"},
      {name: "Salt", quantity: 1, measure: "tbsp"},
      {name: "Pepper", quantity: 1, measure: "tbsp"},
    ], 
    duration: 30, 
    image: "put image later", 
    description: "Peel and dice onions. Peel potatoes and cut into slices of medium width. Add eggs to a large bowl, whisk until creamy, and season with salt and pepper. Set aside. Heat a generous amount of vegetable oil in a frying pan over medium heat. Add potatoes and cook for approx. 10 - 11 min. until potatoes are cooked through. Remove excess oil. Add onions and continue to sauté, stirring occasionally, for approx. 2 - 3 min. until softened. Pour in eggs to cover potatoes and cook approx. 8 - 10 min. over low heat until the bottom and the edges have set. Then run a spatula around edges of pan. Place a large plate on top. With one hand securing the plate and the other holding the handle of the frying pan, quickly flip the tortilla onto the plate and slide back into pan with raw side down. Cook on the other side for approx. 4 - 5 min. until egg is cooked through. Alternatively, transfer pan to oven and bake at 200°C/400°F until cooked through for approx. 10 min. Transfer to a plate to serve and cut into pieces.", 
    dishType: "Main",
  }, 
  {
    user: "bob", 
    title: "Vietnamese summer rolls", 
    ingredients: [
      {name: "Carrot", quantity: 1, measure:"pieces"},
      {name: "Thai basil", quantity: 10, measure:"g"},
      {name: "Cilantro", quantity: 10, measure:"g"},
      {name: "Mint", quantity: 10, measure:"g"},
      {name: "Tofu", quantity: 200, measure:"g"},
      {name: "Bell pepper", quantity: 1, measure:"pieces"},
      {name: "Green onions", quantity: 3, measure:"pieces"},
      {name: "Lettuce", quantity: 0.5, measure:"g"},
      {name: "Peanuts", quantity: 60, measure:"g"},
      {name: "Rice wrappers", quantity: 10, measure:"pieces"},
      {name: "Sesame seeds", quantity: 60, measure:"g"},
      {name: "Peanut/satay sauce", quantity: 200, measure:"ml"},
      {name: "Vegetable Oil", quantity: 1, measure: "tbsp"},
      {name: "Salt", quantity: 1, measure: "tbsp"},
      {name: "Pepper", quantity:1, measure: "tbsp"},
    ], 
    duration: 40, 
    image: "put image later", 
    description: "Using a spiral slicer, cut carrot into thin strips. Roughly chop Thai basil, cilantro, and mint. Cut tofu into thin rectangles. Cut pepper, onions, and lettuce into strips. Using a grease-free pan, toast nuts over medium-low heat for approx. 3 – 5 min. until fragrant. In a frying pan, sauté tofu in some vegetable oil over medium-high heat for approx. 2 – 3 min. per side or until golden brown. Season with salt and pepper. Dip rice wrappers evenly into water and allow to soak for approx. 1 min. Gently shake to remove excess water. Set aside on a plate or cutting board. In the middle of the rice wrapper, layer tofu, carrot, pepper, peanuts, sesame seeds, green onions, and chopped herbs. Finish off with a dollop of peanut sauce. In the same way you wrap a tortilla, fold the edges of the rice wrapper towards the center, bring forward the bottom, and roll forward with your thumbs until the roll is tight. Garnish the roll with sesame seeds and serve with a dipping sauce of your choice. Enjoy!", 
    dishType: "Snack",
  }, 
  {
    user: "alice", 
    title: "Shakshuka", 
    ingredients: [
      {name: "Onion", quantity: 1, measure:"pieces"},
      {name: "Garlic", quantity: 1, measure:"pieces"},
      {name: "Ginger slice", quantity: 1, measure:"pieces"},
      {name: "Chili", quantity: 1, measure:"pieces"},
      {name: "Red bell pepper", quantity: 1, measure:"pieces"},
      {name: "Yellow bell pepper", quantity: 1, measure:"pieces"},
      {name: "Tomatos (medium)", quantity: 5, measure:"pieces"},
      {name: "Spicy paprika powder", quantity: 1, measure: "tbsp"},
      {name: "Ground cumin", quantity: 1, measure: "tbsp"},
      {name: "Canned tomatoes, whole and peeled", quantity: 800, measure:"g"},
      {name: "Vegetable broth", quantity: 50, measure:"ml"},
      {name: "Worcestershire sauce", quantity: 1, measure: "tbsp"},
      {name: "Eggs", quantity: 4, measure:"pieces"},
      {name: "Feta", quantity: 50, measure:"g"},
      {name: "Vegetable Oil", quantity: 1, measure: "tbsp"},
      {name: "Parsley for serving", quantity: 1},
      {name: "Salt", quantity: 1, measure: "tbsp"},
      {name: "Pepper", quantity: 1, measure: "tbsp"},
    ], 
    duration: 45, 
    image: "put image later", 
    description: "Finely dice onion, garlic, ginger, and chili. Cut bell peppers into thin strips. Dice tomatoes. Heat some vegetable oil in a frying pan over medium heat. Add onion, garlic, chili, and bell pepper, and sauté until soft, approx. 6 - 8 min. Then add ginger, spicy paprika, and cumin and cook for another 2 min. Add fresh tomatoes and canned tomatoes to the pan and lightly crush them with the cooking spoon. Preheat oven to 190°C/375°F. Add vegetable broth and cook over medium heat, stirring occasionally, for approx. 20 min. Stir in Worcestershire sauce and season with salt and pepper. Crack eggs into pan. Then crumble feta on top. Transfer to oven and bake at 190°C/375°F for approx. 7 - 10 min. until eggs have set. Remove from oven and garnish with fresh parsley to serve.", 
    dishType: "Breakfast",
  }, 
  {
    user: "alice", 
    title: "Healthy Peanut Butter Cup Oat Bars", 
    ingredients: [
      {name: "Peanut butter, natural creamy and unsalted", quantity: 1, measure:"cup"},
      {name: "Oats", quantity: 1.25, measure:"cup"},
      {name: "Pure maple syrup", quantity: 0.5, measure:"cup"},
      {name: "Vegan chocolate chips", quantity: 0.5, measure:"cup"},
    ], 
    duration: 45, 
    image: "put image later", 
    description: "Line an 8-inch square baking pan with parchment paper or wax paper. Set aside. Make the Peanut Butter Oat Bars: In a medium, microwave-safe bowl (large enough to add oats later), add peanut butter and maple syrup. Whisk together until well-mixed. Heat in 20-second increments in the microwave until warm, fragrant and thickened. Whisk in between heating increments. Add oats. Stir and fold until thoroughly combined. Pour this mixture into the prepared baking pan. Using a rubber spatula, smooth into an even, tightly-packed layer. Set aside. Make the Vegan Chocolate Topping: Use the double boiler method or do the following. In a medium, microwave-safe bowl, add Chocolate Topping ingredients. Heat in 20-second increments until softened and melted. Stir until smooth. Pour this chocolate mixture over the bars. Using a clean rubber spatula, smooth into an even layer. Freeze for 30-40 minutes, or until firm. Remove from freezer and slice into 16 bars. Enjoy!", 
    dishType: "Dessert",
  }, 
  {
    user: "bob", 
    title: "Wholesome vegan pancakes", 
    ingredients: [
      {name: "Almond drink", quantity: 200, measure:"ml"},
      {name: "Coconut flour", quantity: 2, measure: "tbsp"},
      {name: "Wholemeal flour", quantity: 7, measure: "tbsp"},
      {name: "Agave nectar", quantity: 1, measure: "tbsp"},
      {name: "Puffed amaranth", quantity: 3, measure: "tsp"},
      {name: "Baking powder", quantity: 3, measure: "tsp"},
      {name: "Cinnamon", quantity: 0.5, measure: "tsp"},
      {name: "Coconut oil", quantity: 1, measure: "tsp"},
    ], 
    duration: 40, 
    image: "put image later", 
    description: "Combine coconut flour, wholemeal flour, puffed amaranth, baking powder, and cinnamon in a large mixing bowl. Add almond drink and agave nectar and stir until combined. It’s okay if there are some lumps in the batter, as this makes the pancakes even fluffier. Add a knob of coconut oil to pan and melt over a medium heat. When pan is hot, add 2 – 3 tbsp. of batter for each pancake. Fry for approx. 30 sec. until large bubbles appear on top, then flip. Remove from heat when golden brown on both sides. Enjoy!", 
    dishType: "Breakfast",
  }, 
]; 

// Recipe.create(recipes)
// .then(recipes => {
//   console.log(`Success! Added ${recipes.length} recipes to the database`); 
//   mongoose.connect.close(); 
// }).catch(err => {
//   console.log(err); 
// }); 

async function uploadSeeds() {
  console.log("Seeds are uploaded! Users and Recipes are deleted and imported again from seeds.js")
  const promises = []; 
  const deleteUsers = await User.deleteMany(); 

  const deleteRecipes = await Recipe.deleteMany(); 
  for (let user of users) {
    const userCreated = await User.create(user); 
    for (let recipe of recipes) {
      if (user.username === recipe.user) {
        recipe.user_id = userCreated._id; 
        const recipeCreated = await Recipe.create(recipe); 
        promises.push(recipeCreated); 
      }
    }
  }
  Promise.all(promises).then((response) => {
    User.find().then((response) => {
      mongoose.disconnect(); 
    }); 
  }); 
}

uploadSeeds(); 
