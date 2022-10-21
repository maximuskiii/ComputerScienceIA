import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts); // we know they will be called posts because that is what we did in the combine reducers 
    const classes = useStyles();

    console.log(posts);
    return(
        <>
         <h1>Posts</h1>
         <Post/>
         <Post/>
        </>
       
    );
}

export default Posts;