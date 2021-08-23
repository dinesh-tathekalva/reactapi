import React, { useState } from 'react'
 
export const SampleForm = () => {
 
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")
 
   const submit = () => {
       fetch('https://api.jsonbin.io/v3/b', {
           method: 'POST',
           body: JSON.stringify(name, phone, address)
       }).then((res) => {
           res = res.json
       }).then(()=> {
          
       })
   }
 
   return (
       <form style={{display: 'flex', flexDirection: "column", width: '25%', marginLeft:'5em'}}>
           <label>Name</label>
           <input name="Name" value={name} type="text" onChange={(e) => {
               setName(e.target.value)
           }}>
           </input>
           <label>Phone</label>
           <input name="Phone" value={phone} type="number" onChange={(e) => {
               setPhone(e.target.value)
           }}>
           </input>
           <label>Address</label>
           <input name="Address" value={address} type="text" onChange={(e) => {
               setAddress(e.target.value)
           }}>
           </input>
 
           <button type="submit" onSubmit={submit}>Save</button>
       </form>
   )
}
