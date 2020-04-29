import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers/";
import { typeDefs } from "./schemas/";

const startServer = async () => {
  try {
    const app = express();
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect("mongodb://localhost:27017/graphql_example", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen({ port: 4000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      )
    );
  } catch (err) {
    console.error(err);
  }
};

startServer();
