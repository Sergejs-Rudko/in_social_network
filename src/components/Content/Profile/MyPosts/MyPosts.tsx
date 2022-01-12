import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div><textarea>My posts</textarea></div>
            <div>
                <Post message={"Here is my first post"} likesCount={1}/>
                <Post message={"Second post"} likesCount={2}/>
                <button>Add post</button>
            </div>
        </div>
    )
}