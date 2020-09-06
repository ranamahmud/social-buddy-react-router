import React, { useEffect, useState, createContext } from 'react';
import Post from '../Post/Post';
export const PostContext = createContext({});
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
            {
                posts.map(p =>
                    <Post key={p.id} post={p} commentButton={true}></Post>

                )
            }
        </div>
    );
};

export default PostList;