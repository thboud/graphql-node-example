import { mutations } from "./mutations";
import { queries } from "./queries";

const courseResolver = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
};

export default courseResolver;
