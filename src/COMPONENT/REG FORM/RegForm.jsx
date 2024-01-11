import React from 'react'
import './reg.css'
import { useState } from 'react';
import axios from 'axios';
const Reg_Form = () => {
    let reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup"

    let [inputState, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        pwd: ""
    })
    let [imgState, setImgState] = useState();
    // console.log("iamge collect", imgState)
    let changeHandeler = (e) => {
        e.persist();
        let { name, value } = e.target
        setInput({ ...inputState, [name]: value })

    }


    let submitHandler = (event) => {
        event.preventDefault();
        console.log("collect state", inputState, imgState);
        console.log("Data submit :", inputState)
        //change to required object for api

        let formData = new FormData();
        formData.append("first_name", inputState.firstname);
        formData.append("last_name", inputState.lastname);
        formData.append("email", inputState.email);
        formData.append("password", inputState.pwd);
        formData.append("profile_pic", imgState);



        axios
            .post(reg_api, formData, {
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

    }



    return (
        <div className='wrap1'>
            <div className='custom-wrap1'>
                <div className="text1">
                    REGISTRATION
                </div>

                <form className='custom-form1' onSubmit={submitHandler}>

                    <div className="custom-input-group1">
                        <label className='custom-level1' htmlFor="firstname">First Name</label>
                        <input className='custom-input1' type="text" name="firstname" placeholder='' onChange={changeHandeler} />
                    </div>

                    <div className="custom-input-group1">
                        <label className='custom-level1' htmlFor='lastname'>Last Name</label>
                        <input className="custom-input1" type='text' name='lastname' placeholder='' onChange={changeHandeler} />

                    </div>

                    <div className="custom-input-group1">
                        <label className='custom-level1' htmlFor="email">Email</label >
                        <input className='custom-input1' type="email" name='email' placeholder='' onChange={changeHandeler} />

                    </div>
                    <div className='custom-input-group1'>
                        <label className='custom-level1' htmlFor='pwd'>Password</label>
                        <input className='custom-input1' type='text' name='pwd' placeholder='' onChange={changeHandeler} />

                    </div>
                    <div className='custom-input-group1'>
                        <label className='custom-level1' htmlFor='profile_pic'>Choose Profile Picture</label>
                        <input className='custom-input1' type='file' name="profile_pic" onChange={(event) => setImgState(event.target.files[0])}
                            accept="image/*" />
                    </div>
                    <button type="text" className="submit1">Submit</button>


                </form>
            </div>
        </div>
    )
}

export default Reg_Form