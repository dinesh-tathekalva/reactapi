import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
            console.log(result);
            setPosts(result.data)
        }).catch(err => console.log(err));
    }, [])
    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default FetchData