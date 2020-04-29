import { model } from "mongoose";

const CourseModel = model("Course", {
  title: String,
  description: String
});

export default CourseModel;
