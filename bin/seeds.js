// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Recipe = require('../models/Recipe'); 

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/recipe-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})

const recipes=[
  {
    title: "Meatless meatballs with tomato sauce", 
    ingredients: 
    {
      "Red bell pepper": 1,
      "Cauliflower": 550,
      "Eggplants": 550, 
      "Red onions": 2,
      "Gloves garlic": 4,
      "Spelt": 50,
      "Canned crushed tomatos": 800, 
      "Panko breadcrums": 200, 
      "Basil": 10,
      "Salt": 1, 
      "Pepper": 1, 
      "Olive oil": 1
    }, 
    duration: 40,
    image: "put image later", 
    description: "put cooking description",
    dishType: "main_course", 
  }, 
  {
    title: "Sweet Potato Curry", 
    ingredients: {
      "Red onions": 100, 
      "Gloves garlic": 1, 
      "Ginger": 1, 
      "Hokkaido": 200, 
      "Red bell pepper": 100, 
      "Cherry tomatos": 80, 
      "Sweet potatos": 300, 
      "Olive oil": 1, 
      "Tomato paste": 1, 
      "Curry powder": 1, 
      "Coconut milk": 500, 
      "Cashews": 80, 
      "Salt": 1, 
      "Pepper": 1, 
    }, 
    duration: 40, 
    image: "put image later", 
    description: "put description later", 
    dishType: "main_course",
  } 
]; 


