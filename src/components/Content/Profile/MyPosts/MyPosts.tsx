import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {addPostAC, onPostChangeAC, PostType, UnionActionType} from "../../../../fake_redux/state";

type MyPostsPropsType = {
    state: {
        posts: PostType[]
        postText: string
    }
    dispatch: (obj: UnionActionType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let text = e.currentTarget.value
        let action = onPostChangeAC(text)
        props.dispatch(action)
    }

    const addPost = () => {
        let action = addPostAC(props.state.postText)
        props.dispatch(action)
    }


    return (
        <div>
            <div>
                <textarea value={props.state.postText}
                          onChange={onPostChange}></textarea>
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



