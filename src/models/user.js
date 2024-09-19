import {  model, models, Schema } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const modelUser = models.modelUser || model("modelUser", schema);
export default modelUser;
