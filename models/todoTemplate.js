import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const TodoTemplate = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default TodoTemplate;