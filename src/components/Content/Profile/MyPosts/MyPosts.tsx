import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsType) => {

    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPost(props.state.postText)
    }

    return (
        <div>
            <div>
                <input value={props.state.postText}
                       onChange={onPostChange}></input>
                <button onClick={() => addPost()}>Add post</button>
            </div>
            <div>
                {
                    props.state.posts.map((p) => <Post key={p.id}
                                                       message={p.message}
                                                       likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    )
}



