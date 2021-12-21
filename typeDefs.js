const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Recipe {
    id: ID
    name: String
    description: String
    instructions: String
    image: String
    ingredients: [String]
    quantities: [String]
  }

  type Query {
    welcome: String
    getRecipes: [Recipe]
    getRecipe(id: ID): Recipe
  }

  type Mutation {
    addRecipe(
      name: String
      description: String
      instructions: String
      image: String
      ingredients: [String]
      quantities: [String]
    ): Recipe
    deleteRecipe(id: ID): String
    updateRecipe(
      id:ID
      name: String
      description: String
      instructions: String
      image: String
      ingredients: [String]
      quantities: [String]
    ): Recipe
  }
`;

module.exports = typeDefs