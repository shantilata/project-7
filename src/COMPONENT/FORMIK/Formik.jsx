import { useFormik } from 'formik'
import './formik.css'
import React from 'react'
import axios from 'axios'

const Formik = () => {
    let reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup"
    let formValidate = (formData) => {
        console.log("form data", formData);
        let email_Validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let password_validate = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/
        let errors = {
            // fullname: "",
            // email: "",
            // password: "",
            // image: ""
        }
        if (formData.fname.length === 0) {
            errors.fname = "Required fild"
        }
        else if (formData.fname.length < 3) {
            errors.fname = "Min 3 character"
        }
        if (formData.lname.length === 0) {
            errors.lname = "Required fild"
        }
        else if (formData.lname.length < 3) {
            errors.lname = "Min 3 character"
        }

        if (formData.email.length === 0) {
            errors.email = "Required fild"
        }
        else if (formData.email.length < 3) {
            errors.email = "Min 3 character"
        }

        else if (!email_Validate.test(formData.email)) {
            errors.email = "Wrong pattern"
        }

        if (formData.password.length === 0) {
            errors.password = "Required fild"
        }
        else if (formData.password.length < 3) {
            errors.password = "Min 3 character"
        }
        else if (!password_validate.test(formData.password)) {
            errors.password = "Wrong pattern"

        }

        console.log("Errors", errors);
        return errors;



    }

    let formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
            image: ""
        },
        validate: formValidate,
        onSubmit: (data) => {
            console.log("Data submitted", data);
            let obj = new FormData()
            obj.append("first_name", data.fname)
            obj.append("last_name", data.lname)
            obj.append("email", data.email)
            obj.append("password", data.password)
            obj.append("img", data.image)

            axios
                .post(reg_api, obj, {
                    headers: {
                        "Content-Type": "application/form-data",
                        "Access-Control-Allow-Origin": "*",
                    }
                })
                .then((res) => {
                    alert("Data submitted");
                    console.log("add res", res)
                })
                .catch((err) => {
                    alert("Error in add product")
                    console.log("add err", err);
                })

        }


    })
    return (
        <div className='wraper'>
            <div className='customWraper'>
                <div className='text2'>FORMIK FORM</div>
                <form className='custom-form2' onSubmit={formik.handleSubmit}>
                    <div className='custom-input-group2'>
                        <label className='custom-level2' htmlFor='fname'>FIRST NAME</label>
                        <input className='custom-input2 ' type='text' name='fname' value={formik.fname} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br></br><br></br>
                        {formik.touched.fname && formik.errors.fname ? <span style={{color:'red'}}>{formik.errors.fname}</span> : null}
                    </div>
                    <div className='custom-input-group2'>
                        <label className='custom-level2' htmlFor='fname'>LAST NAME</label>
                        <input className='custom-input2' type='text' name='lname' value={formik.lname} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br></br><br></br>
                        {formik.touched.lname && formik.errors.lname ? <span style={{color:'red'}}>{formik.errors.lname}</span> : null}
                    </div>
                    <div className='custom-input-group2'>
                        <label className='custom-level2' htmlFor='email'>EMAIL</label>
                        <input className='custom-input2 ' type='email' name='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br></br><br></br>
                        {formik.touched.email && formik.errors.email ? <span style={{color:'red'}}>{formik.errors.email}</span> : null}
                    </div>
                    <div className='custom-input-group2'>
                        <label className='custom-level2' htmlFor='password'>PASSWORD</label>
                        <input className='custom-input2 ' type='text' name='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br></br><br></br>
                        {formik.touched.password && formik.errors.password ? <span style={{color:'red'}}>{formik.errors.password}</span> : null}
                    </div>
                    <div className='custom-input-group2'>
                        <input className='custom-input2 ' type='file' name='image' placeholder='image' onChange={(event) => formik.setFieldValue("image", event.target.files[0])} />
                    </div>
                    <input className='submit2' type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Formik