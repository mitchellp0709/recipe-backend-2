const express = require("express")
const { ApolloServer, gql } = require('apollo-server-express')
const app = express();
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};





async function initServer() {
  app.use(cors())
  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  const PORT = process.env.PORT || 5500;
  try {
    await mongoose.connect(DATABASE_URL,CONFIG)
    console.log(`Mongodb running on port ${PORT}`);
  } catch(error) {
    console.log(error)
  }
  app.use((req,res)=>{res.send("server started")})
  
  app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
}

initServer()
