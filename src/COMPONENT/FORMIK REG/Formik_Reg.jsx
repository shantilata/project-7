import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

const FormikReg = () => {
    let reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup"
    let formValidate = (formData) => {
        console.log("form data", formData);
        // let email_Validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        // let password_validate = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/
        let errors = {
            fullname: "",
            email: "",
            password: ""
        }

        if (formData.fullname.length === 0) {
            errors.fullname = "Required fild"
        }
        else if (formData.fullname.length < 3) {
            errors.fullname = "Min 3 character"
        }

        if (formData.email.length === 0) {
            errors.email = "Required fild"
        }
        else if (formData.email.length < 3) {
            errors.email = "Min 3 character"
        }

        if (formData.password.length === 0) {
            errors.password = "Required fild"
        }
        else if (formData.password.length < 3) {
            errors.password = "Min 3 character"
        }
    

        console.log("Errors", errors);
        return errors;



    }

    let formik = useFormik({

        initialValues: {
            fullname: "",
            email: "",
            password: "",
            image: ""
        },

        onSubmit: (data) => {
            console.log("Data submitted", data);
        }
    })



    axios
        .post(reg_api,formValidate, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then((res) => {
            alert("Data submitted");
            console.log("add res", res)
        })
        .catch((err) => {
            alert("Error in add product")
            console.log("add err", err);
        })


    return (
        <div>

            <h1>FORMIK FORM</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>NAME</label>
                <input type='text' name='fullname' value={formik.fullname} onChange={formik.handleChange} /><br></br><br></br>
                {formik.errors.fullname?<span>{formik.errors.fullname}</span> : null}
                <label htmlFor='email'>EMAIL</label>
                <input type='email' name='email' value={formik.email} onChange={formik.handleChange} /><br></br><br></br>
                {formik.errors.email?<span>{formik.errors.email}</span> : null}
                <label htmlFor='password'>PASSWORD</label>
                <input type='text' name='password' value={formik.password} onChange={formik.handleChange} /><br></br><br></br>
                {formik.errors.password?<span>{formik.errors.password}</span> : null}
                <label htmlFor='img'>Profle Pic</label>
                <input type='text' name='image' value={formik.image} onChange={formik.handleChange} />

                <input type='submit' value='Submit' />
            </form>
        </div >
    )
}

export default FormikReg