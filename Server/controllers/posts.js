import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {
        // PostMessage.find() or finding something inside a model takes time so it is an asynchronous action. For that reason we have to add an await in front of it.
        const postMessages = await PostMessage.find();

        console.log(postMessage);

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req,res) => {
    const body = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {

        res.status(409).json({ message: error.message });

    }
}