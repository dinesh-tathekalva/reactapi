import React, {useState} from 'react';
import axios from 'axios'

const PostData = () => {
   const [name, setName] =useState("")
   const [userId, setUserId] =useState("")
   const [title, setTitle] =useState("")

   const clickHandler = e => {
    e.preventDefault(); 
    const formBody = {"name": name, "userId": userId, "title": title}
       axios.post('https://jsonplaceholder.typicode.com/posts', formBody).then((response)=>{
           console.log(response, "response");
       }).catch((error) => console.log(error))
   }

    return (
        <form> 
            <div>
                User Id: <input type="text" onChange={e=>setUserId(e.target.value)} value={userId} placeholder="Enter user Id... " />
            </div>
            <div>
                Name: <input type="text" onChange={e=>setName(e.target.value)} value={name} placeholder="Enter name... " />
            </div>
            <div>
                Title: <input type="text" onChange={e=>setTitle(e.target.value)} value={title} placeholder="Enter title... " />
            </div>
            <button type="submit" onClick={clickHandler}>Submit</button>
        </form>
    )
}

export default PostData