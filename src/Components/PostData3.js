import React, { useState } from 'react';
import axios from 'axios'

const PostData3 = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const formBody = { name: name, phone: phone }
        axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(formBody))
            .then(response => {
                console.log(response);
            }).catch(error => console.log(error))
        setName('')
        setPhone('')
    }


    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={submitHandler}>
            <div style={{marginBottom:'1em'}}>
                <label>Name:</label>
                <input type="text" value={name} placeholder="Enter name..."
                    onChange={
                        e => setName(e.target.value)
                    } name={name} />
            </div>
            <div style={{marginBottom:'1em'}}>
                <label>Phone:</label>
                <input type="text" value={phone} placeholder="Enter phone..."
                    onChange={
                        e => setPhone(e.target.value)
                    }
                />
            </div>
            <button type="submit" >Submit</button>
        </form>
    )

}

export default PostData3