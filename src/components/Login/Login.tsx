import React, {ChangeEvent, useState} from "react";
import {useFormik, Field} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../redux/authReducer";

export const Login = () => {
    const dispatch = useDispatch()
    let isAuth = useSelector<AppRootStateType, boolean>( state => state.auth.isAuth)

    let sendLogin = (email : string, password : string, rememberMe : boolean) => {
        dispatch(loginTC(email,password,rememberMe))

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        onSubmit: values => sendLogin(values.email,values.password,values.rememberMe)
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked)
    }


        if(isAuth){
            return <Navigate to={`/profile/17183`}/>
        }


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Login</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor={"password"}>Password</label>
                <input id={"password"}
                       name={"password"}
                       type="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                />

                <label htmlFor={"rememberMe"}>Remember Me</label>
                <input type={"checkbox"} {...formik.getFieldProps("rememberMe")} checked={formik.values.rememberMe}/>

                <button type={"submit"}>Login</button>
            </form>
        </div>
    )
}