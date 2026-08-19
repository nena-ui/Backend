import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema( {

        title: {
            type: String,
            required: true
        },

        description: String,
    

        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;