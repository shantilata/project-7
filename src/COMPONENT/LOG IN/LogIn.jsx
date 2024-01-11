import React, { useState, } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LogIn = () => {
    let navigate = useNavigate();
    let login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin"
    let [loginState, setLogin] = useState({
        mail: "",
        pwd: ""
    })


    let changeHandeler = (e) => {
        e.persist();
        let { name, value } = e.target
        setLogin(state => ({ ...state, [name]: value }))
        // setLogin({...loginState,[name]:value})
    }

    let submitHandler = (event) => {


        event.preventDefault();
        console.log("Data submit :", loginState)
        let formData = new FormData();
        formData.append("email", loginState.mail)
        formData.append("password", loginState.pwd);
        console.log("form data", formData);
        axios
            .post(login_api, formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((res) => {
                alert("Data submitted");
                console.log("add res", res)
                if (res.data.status === 200) {
                    console.log("Login successful");
                    window.sessionStorage.setItem("token", res.data.token)
                    navigate("/profile")
                }
                else {
                    alert("Login unsuccessful")
                }
            })
            .catch((err) => {
                alert("Error in add data")
                console.log("add err", err);
            })

    }
    return (
        <div className='wrap'>
            <div className='custom-wrap'>
            <div className="text">LOG IN</div>
            <form className='custom-form' onSubmit={submitHandler}>
                <div className="custom-input-group">
                    <label className='custom-level' htmlFor='email'>Email</label>
                    <input className="custom-input" type='email' name='mail' onChange={changeHandeler} />
                </div>
                <div className="custom-input-group">
                    <label className='custom-level' htmlFor='password'>Password</label>
                    <input className="custom-input" type='text' name='pwd' onChange={changeHandeler} />
                </div>
                <button type="text" className="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default LogIn