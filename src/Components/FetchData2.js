import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData2 = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
            console.log(data)
            setPosts(data.data)
        }).catch(err => 
            console.log(err)
        )
    }, [])
    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default FetchData2