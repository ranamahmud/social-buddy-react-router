import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';

const CommentList = (props) => {
    const [post, setPost] = useState([])
    const { postId } = useParams()
    const [comments, setComments] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=> setComments(data))
    }, [])

    
    useEffect(() => {
        fetch(postUrl)
        .then(resp=>resp.json())
        .then(data=> setPost(data))
    }, [])

    console.log(comments);
    return (
        <div>
            <Post post={post}/>
            <h2>User Comments:</h2>
            
            {
                comments.map(comment =>
                    <Comment key={comment.id} comment={comment}/>
                    )
            }
        </div>
    );
};

export default CommentList;