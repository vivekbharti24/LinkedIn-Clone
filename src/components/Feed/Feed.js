import React, {useState} from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption/InputOption";
import { Event, Photo, Subject, VideoLibrary } from '@material-ui/icons'
import Post from './Posts/Post';
import { useEffect } from 'react';
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput]= useState('');
   const [posts, setPosts]= useState([]);

   useEffect(() => {
db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>(
  setPosts(snapshot.docs.map(doc => (
    {
      id: doc.id,
      data: doc.data(),
    }))
  )
))
   }, []);

   const sendPost = (e) =>{
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    });
    setInput("");
   };

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
            <CreateIcon/>
            <form>
                <input placeholder='write a post' value={input} onChange={e =>{ setInput(e.target.value) }} type="text"/>
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
           <InputOption Icon={Photo} color= {"#70B5F9"} title={"Photos"}/>
           <InputOption Icon={VideoLibrary} color= {"#E7A33E"} title={"Video"}/>
           <InputOption Icon={Event} color= {"#C0CBCD"} title={"Events"}/>
           <InputOption Icon={Subject} color= {"#7FC15E"} title={"Create Article"}/>
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: {name, description, message,photoUrl} })=> (
        
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
        
      ))}

      
    </div>
  )
}

export default Feed
