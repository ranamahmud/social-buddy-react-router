import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const CommentList = (props) => {
    console.log(props);

    const { postId } = useParams()
    console.log(postId);

    const [comments, setComments] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`


    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=> setComments(data))
    }, [])
    return (
        <div>
            {comments.length}
            {
                comments.map(comment =>
                    <Comment comment={comment}/>
                    )
            }
        </div>
    );
};

export default CommentList;