import Course from "../../models/Course";

export const mutations = {
  createCourse: async (_, { title, description }) => {
    const course = new Course({ title, description });
    await course.save();
    return course;
  }
};
