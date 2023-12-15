import React from "react";
import { forwardRef } from "react";
import "./Post.css" ;
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import FlipMove from "react-flip-move";

const Post = forwardRef(
    ({
    displayName,
    username,
    verified,
    text,
    images,
    avatar }, ref) => {

    return (
        <FlipMove>
        <div className="post" ref={ref}>
            <div className="post__avator">
            <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{""}
                            <span className="post__headerSpecial"> 
                                {verified && <VerifiedUserIcon className= "post__badge">
                                    </VerifiedUserIcon> }{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                
                <img src={images}
                alt="Sample"></img>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>

        </div>
        </FlipMove>
    );
});

export default Post;