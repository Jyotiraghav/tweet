import React, { useState, useEffect} from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";
// import image1 from "./assets/images/image.gif";
// import girlavatar from "./assets/avatar/678130.png";
// import giphy from "./assets/images/giphy.gif";
// import santa from "./assets/images/santa.gif";
// import santa3 from "./assets/images/santa3.gif";
// import profile from "./assets/avatar/profile.webp";

import db from "./firebase";


function Feed(){

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            //setPosts(snapshot.nb8d5OL7CVjpkN4SVG2d.map(doc => doc.data()))
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
   
return (

    <div className="feed">
        {/* header */}
        <div className="feed__header">
        <h2>For you </h2>
    </div>

        {/* Tweetbox */}
        <TweetBox/>

        {/*post*/}
        {posts.map(post => (

        <Post
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        ))}
         console.log(db);


        {/* <Post 
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={false}
        text="Lets build twitter-clone"
        image={giphy}
        avatar={profile}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {santa}
        avatar={profile}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {santa3}
        avatar={profile}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={profile}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={profile}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        />
        <Post
        DisplayName="Jyoti Raghav"
        username="jyotiraghav"
        verified ={true}
        text="Lets build twitter-clone"
        image= {image1}
        avatar={girlavatar}
        /> */}
</div>
);

}
export default Feed;