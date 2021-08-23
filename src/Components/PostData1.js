import React, {useState} from 'react'
import axios from 'axios'

const PostData1 = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

   const submitHandler = e => {
    e.preventDefault(); 
        const formBody = {"name": name, "phone": phone}
        axios.post('https://jsonplaceholder.typicode.com/posts', formBody).then((response) => {
            console.log(response)
        }).catch((error) => {console.log(error)})
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" name="name" value={name} placeholder="Name" onChange={e => setName(e.target.value) }/>
            <label>Phone Number</label>
            <input type="number" name="phone" value={phone} placeholder="Phone" onChange={e => setPhone(e.target.value)}/>
            <button type="submit" >Submit</button>
        </form>
    )
}
export default PostData1