/*
 import React from "react";
 import {useFormik} from "formik";
 import styles from "./formikTutorial.module.css"


 const validate = (values: ValuesType) => {
     const errors: ValuesType = {
         name: undefined,
         lastname: undefined,
         email: undefined
     }
     if (!values.name) {
         errors.name = "NAME Required"} else if (values.name.length > 15) {
         errors.name = "name Should be 15 or less"
     }


     if (!values.lastname) {
         errors.lastname = "LASTNAME Required"
     } else if (values.lastname.length > 15) {
         errors.lastname = "surname should be 15 or less"
     }

     if (!values.email) {
         errors.email = "EMAIL REQUIRED"
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = "INVALID EMAIL"
     }
     return errors
 }


 export const FormikTutorial = () => {
     const formik = useFormik({
         initialValues: {
             name: "",
             lastname: "",
             email: ""
         },
         validate,
        onSubmit: (values) => console.log(values)
     })

     return (
         <div>
             <form onSubmit={formik.handleSubmit}>
                 <label htmlFor="name">name</label>
                 <input id={"name"}
                       name={"name"}
                        type={"name"}
                        className={formik.touched.name && formik.errors.name ? styles.error : ""}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}/>
                 {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

                 <label htmlFor="lastname">lastname</label>
                 <input id={"lastname"}
                        name={"lastname"}
                        type={"text"}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastname}/>
                 {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}


                 <label htmlFor="email">Email address</label>
                 <input id={"email"}
                        name={"email"}
                        type={"email"}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                 {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                 <button type={"submit"}>Submit</button>
             </form>
         </div>


     )
 }


 type ValuesType = {
     email: string | undefined
     password: string | undefined
     rememberMe: boolean | undefined
 }


export let a = 1;
*/

export let a = 1
