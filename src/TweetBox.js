import React from "react";
import "./TweetBox.css"; 
import { Button } from "@mui/material";
import {Avatar} from "@mui/material"; /*Avatar-user profile images*/

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="twitter-account-844570.png"/>
                    <input placeholder="What's happening ?!" type="text"></input>
                    
        </div>
              <input className="tweetBox__image"
              placeholder= "Optional: Enter image URL" 
              type="text"
              />

               <Button className="tweetBox__post">Post</Button>
            </form>
            
        </div>
    )
}

export default TweetBox;