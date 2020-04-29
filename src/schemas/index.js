import { gql } from "apollo-server-express";
import CourseSchema from "./Course";
import { combineSchemas } from "../utils/schemaUtils";

export const typeDefs = gql`
  ${combineSchemas([CourseSchema])}
`;
