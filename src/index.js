import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { resolvers } from "./resolvers/";
import { typeDefs } from "./schemas/";

import { API_PORT, MONGO_URL } from "./config/";

const startServer = async () => {
  try {
    const app = express();
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen({ port: API_PORT }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${API_PORT}${server.graphqlPath}`
      )
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();
