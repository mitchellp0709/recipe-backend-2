const Recipe = require ('./models/recipe')

const resolvers = {
  Query: {
    welcome: () => {
      return "welcome akfjga;g;fashga;";
    },
    getRecipes: async () => {
      const recipes = await Recipe.find({});
      return recipes;
    },
    getRecipe: async (root, args) => {
      const recipe = await Recipe.findById(args.id)
      return recipe
    }
  },
  Mutation: {
    addRecipe: async (root, args) => {
      const newRecipe = new Recipe({
    name: args.name,
    description: args.description,
    instructions: args.instructions,
    image: args.image,
    ingredients: args.ingredients,
    quantities: args.quantities
      })
      await newRecipe.save()
      return newRecipe
    },
    deleteRecipe: async (root, args) => {
      await Recipe.findByIdAndRemove(args.id)
      return "Item deleted"
    },
    updateRecipe: async (root, args) => {
      const { id, name, description, instructions, image, ingredients, quantities } = args
      const updatedRecipe = {
        name: name, 
        description: description,
        instructions: instructions,
         image: image,
         ingredients: ingredients, 
        quantities: quantities }
      await Recipe.findByIdAndUpdate(id, updatedRecipe,{new:true})
      return updatedRecipe
    }
    

  }
};

module.exports=resolvers