import React, {useEffect, useState} from 'react'
import axios from 'axios'

const FetchData3 = () => {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
            setPosts(response.data)
        }).catch(error => console.log(error))
    }, [])
    return (
        <div>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default FetchData3