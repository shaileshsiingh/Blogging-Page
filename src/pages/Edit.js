import { useState } from "react";
import React from 'react'
import { collection, query, where, getDocs, updateDoc, doc} from "firebase/firestore";
import {  db } from "../firebase-config";



function Edit() {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const updateUser = async () => {
        const findUsers = await getDocs();
        findUsers.forEach( async (user) => {
         const getUser = doc(db, 'users', user.id);
         await updateDoc(getUser, {
          title: title,
          postText: postText
         });
        });
       }

  return (
    <div>
        <p>Edit</p>
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <textarea name="" id="" cols="30" rows="10" placeholder="post" onChange={(e) => setPostText(e.target.value)}></textarea>
   <button onClick={() => updateUser}>Update</button>
    </div>
  )
}

export default Edit