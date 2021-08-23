import React, {useState} from 'react'
import axios from 'axios'

const PostData2 = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        const formBody = {"name": name, "number": number}
        axios.post('https://jsonplaceholder.typicode.com/posts', formBody).then(response => {console.log(response)}).catch(error => {console.log(error)})
        setName('')
        setNumber('')
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name..." />
            <label>Phone:</label>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="Enter phone..." />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostData2