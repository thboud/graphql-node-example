const Schema = `
  type Course {
    id: ID!
    title: String!
    description: String!
  }
`;

const Query = `
  courses: [Course!]!
`;

const Mutation = `
  createCourse(title: String!, description: String!): Course
`;

const Course = { Schema, Query, Mutation };

export default Course;
