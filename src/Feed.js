import React, { useState, useEffect} from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Post from "./Post";
import FlipMove from 'react-flip-move'; // Import FlipMove



// import image1 from "./assets/images/image.gif";
// import girlavatar from "./assets/avatar/678130.png";
// import giphy from "./assets/images/giphy.gif";
// import santa from "./assets/images/santa.gif";
//import santa3 from "./assets/images/santa3.gif";
// import profile from "./assets/avatar/profile.webp";


function Feed(){

    const[posts, setPosts] = useState([]);

    useEffect(() => {
         const postCollection = async() => {
            const postRef = collection(db, "posts");
            const docsSnap = await getDocs(postRef);
            setPosts(docsSnap.docs.map(doc => doc.data()));
         }
         postCollection ();

        }, [db]);
   
return (

    <div className="feed">
        {/* header */}
        <div className="feed__header">
        <h2>For you </h2>
    </div>

        {/* Tweetbox */}
        <TweetBox/>

        {/*post*/}
        
        <FlipMove>
        {posts.map((post, index)=> (
        <Post
        key={index}   //Ensure you provide a unique key
        avatar={post.avatar}
        displayName={post.displayName}
        images={post.images}
        text={post.text}
        username={post.username}
        verified={post.verified}
        />
        ))}
        </FlipMove>

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