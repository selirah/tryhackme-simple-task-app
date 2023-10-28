import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  dueDate: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Task", taskSchema);
