const mongoose = require("mongoose");
const Schema = mongoose.Schema
 
const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  instructions: { type: String },

  image: { type: String },

  ingredients: [String],

  quantities: [String],
  
},
{timestamps:true}
);

module.exports = mongoose.model('Recipe', recipeSchema)