import mongoose from 'mongoose';

// Schema - mongoose allows us some uniformity to our documents. Each post can have title and string etc... tags: [String] will contain an array of String. likeCount and createdAt are objects.
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String, 
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date, 
        default: new Date()
    },
});

// Now we need to turn schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

// We are exporting a mongoose model from the postMessage file. And then on that model we can perform CRUD operations.
export default PostMessage;