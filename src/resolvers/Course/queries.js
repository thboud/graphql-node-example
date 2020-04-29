import Course from "../../models/Course";

export const queries = {
  courses: () => Course.find({})
};
