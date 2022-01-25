import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';


import useStyles from './styles';

const Posts = () => {

    // we initialize our useSelector as a hook
    const posts = useSelector((state) => state.posts)
    // inside the useSelector we are going to have a callback function. 
    // As a parameter in that callback function we get access to that whole global redux store or state.
    // And we can immediately return state.posts
    // We know it is state.posts because we have labelled it posts within the object in reducers/index.js

    console.log(posts);

    const classes = useStyles();
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;