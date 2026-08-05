import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    // String is shorthand for {type: String}
    title : {
        type: String,
        required : true
    },
    description : String,
    category : String,
    likes : Number,
    status : Boolean,
    author : String

});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog

// title
// description
// status 
// .js


