import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addPostAC} from "../../../../redux/profileReducer";

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
                <AddPostForm/>
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

export const AddPostForm = () => {
    const dispatch = useDispatch()

    const addPost = (postText : string) => {
        dispatch(addPostAC(postText))
    }

    const formik = useFormik({
        initialValues: {
            post: ""
        },
        onSubmit: values => addPost(values.post)
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input name={"post"}
                       id={"post"}
                       onChange={formik.handleChange}
                       value={formik.values.post}/>
                <button type={"submit"}>add post </button>
            </form>
        </div>
    )
}



