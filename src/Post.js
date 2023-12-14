import React from "react";
import "./Post.css" ;
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    DisplayName,
    username,
    verified,
    text,
    image,
    avatar
}){

    return (
        <div className="post">
            <div className="post__avator">
            <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {DisplayName}{""}
                            <span className="post__headerSpecial"> 
                                {verified && <VerifiedUserIcon className= "post__badge">
                                    </VerifiedUserIcon> }@{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                
                <img src={image}
                alt="Sample"></img>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>

        </div>
    )
}

export default Post;