import courseResolver from "./Course";

export const resolvers = {
  Query: {
    ...courseResolver.Query
  },
  Mutation: { ...courseResolver.Mutation }
};
