import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Profile = () => {


    let profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"
    let valid_token = window.sessionStorage.getItem("token");
    console.log("collect token value", valid_token);
    let [single_user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        profile_pic: "",

    })




    useEffect(() => {
        axios.get(profile_api, {
            headers: {
                "x-access-token": valid_token,
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            }
        })
            .then(res => {
                console.log("axios res for fetching user", res);
                let base_url = "https://wtsacademy.dedicateddevelopers.us/";
                let folder_path = "uploads/user/profile_pic/";
                let img_url = base_url + folder_path + res.data.data.profile_pic;
                console.log("img_url", img_url);

                setUser({
                    ...single_user,
                    first_name: res.data.data.first_name,
                    last_name: res.data.data.last_name,
                    email: res.data.data.email,
                    profile_pic: img_url
                });

            })
            .catch(err => {
                console.log("Profile error", err);
            })
    }, [profile_api, valid_token])
    return (
        <div>
            <p>{single_user.first_name} {single_user.last_name}</p>
            <p>{single_user.email}</p>
            <img src={single_user.profile_pic} alt="xyx" />




        </div >
    )
}

export default Profile