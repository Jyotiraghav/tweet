import React from "react";
import "./TweetBox.css"; 
import { Button } from "@mui/material";
import { Avatar } from "@mui/material"; /*Avatar-user profile images*/
import db from "./firebase";
//import profile from "./assets/avatar/profile.webp";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import FlipMove from "react-flip-move";

function TweetBox() {
    const [tweetMessage, setTweetMessage]= useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = async (e) => {			//function to send tweet 
        e.preventDefault();
        console.log("Button clicked!");

        try {

          const postsCollection = collection(db, 'posts');
            await addDoc(postsCollection, {
              displayName: 'Jyoti Raghav',
              username: '@jyotiraghav',
              verified: true,
              text: tweetMessage,
              images: tweetImage,
              avatar: "https://firebasestorage.googleapis.com/v0/b/twitter-clone-f663f.appspot.com/o/678130.png?alt=media&token=73a7c70a-b9e8-4479-bd85-8ed5e9b98c64"
            });
        
            console.log("Tweet sent successfully!");
            setTweetMessage('');
            setTweetImage('');
          } catch (error) {
            console.error("Error sending tweet:", error);
          }
        };

    return (
      <FlipMove>
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="twitter-account-844570.png"/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)} //mapping 
                    value={tweetMessage}
                    placeholder="What's happening ?!" 
                    type="text">      
                    </input>
                    
        </div>
              <input 
              value={tweetImage} 
              onChange={(e) => setTweetImage(e.target.value)}
              className="tweetBox__image"
              placeholder= "Optional: Enter image URL" 
              type="text"
              />

               <Button onClick ={sendTweet} type="submit" className="tweetBox__post">Post</Button>
            </form>
            
        </div>
        </FlipMove>
    )
}

export default TweetBox;