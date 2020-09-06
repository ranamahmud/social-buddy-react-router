import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const PostList = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {posts.length}
            {
                posts.map(p => <Post key={p.id} post={p}></Post>)
            }
        </div>
    );
};

export default PostList;