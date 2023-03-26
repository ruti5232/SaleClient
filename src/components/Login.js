import React, { useState, useRef } from 'react';
import PageStart from './PageStart';
import '../styles/Login.scss'
import Form from './Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Email } from '@mui/icons-material';

export default function Login(props) {
    const { setIsLogin } = props;
    const nameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const userRegister = { username: " ", password: " ", address: " ", email: " " }
    // const getStart = () => {
    //     nameRef.current.value && passwordRef.current.value && setIsLogin(true);
    //     localStorage.setItem("user", nameRef.current.value);
    //     localStorage.setItem("password", passwordRef.current.value);
    //     // isLogin();
    // }
    const getStart = () => {
        // nameRef.current.value==="admin" && passwordRef.current.value==="1234" && setIsLogin(true)
        // &&localStorage.setItem("currentUser", nameRef.current.value)&&
        // localStorage.setItem("password", passwordRef.current.value);
        nameRef.current.value && passwordRef.current.value &&
            axios.get(`http://localhost:4000/user/getUserByName/${nameRef.current.value}`).then(
                data => {
                    console.log(data);
                    if (data.data != null && data.data != '') {
                        console.log("login", data.data)
                        setIsLogin(true);
                        localStorage.setItem("currentUser", JSON.stringify(data.data))
                        // localStorage.setItem("user", nameRef.current.value);
                        // localStorage.setItem("password", passwordRef.current.value);
                    }
                    else {
                        console.log("register", data.data)
                        setIsLogin(true);
                        userRegister.username = nameRef.current.value;
                        console.log(userRegister);
                        localStorage.setItem("currentUser",JSON.stringify(userRegister));
                        // localStorage.setItem("password", passwordRef.current.value);
                        navigate("/Register");
                    }
                }
            )
                .catch(error => {
                    console.log('error')
                })
    }
    // const login=()=>{
    //     axios.get(`http://localhost:4000/user/getUserByName/r`).then(
    //         data => {
    //             if (data.data != null && data.data.password === passwordRef.current.value) {
    //                 console.log("login",data.data)
    //                 setIsLogin(true);
    //                 localStorage.setItem("user", nameRef.current.value);
    //                 localStorage.setItem("password", passwordRef.current.value);
    //             }
    //             else {
    //                 console.log("register",data.data)
    //                 setIsLogin(true);
    //                 localStorage.setItem("user", nameRef.current.value);
    //                 localStorage.setItem("password", passwordRef.current.value);
    //                 // navigate("/Register");
    //             }
    //         }
    //     )
    //     .catch(error => {
    //         console.log('error')
    //     })
    // }
    // const isLogin = () => {
    //     axios.get(`http://localhost:4000/user/getUserByName/${localStorage.getItem("user")}`).then(
    //         data => { console.log(data.data); if (data == null) { navigate("/Register") } }
    //     )
    // }
    return (
        <div className="divAll">
            {/* <img className="login-img" src="../assets/login.png"/> */}
            <div className="login-inputs">
            <div className="input-group input-group-sm mb-3  mineInp">
                <span className="input-group-text" id="inputGroup-sizing-sm">שם</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ref={nameRef} />
            </div>
            <div className="input-group input-group-sm mb-3  mineInp">
                <span className="input-group-text" id="inputGroup-sizing-sm">סיסמא</span>
                <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ref={passwordRef} />
            </div>
            <button className="buy" onClick={() => { getStart() }}>התחברות</button>

            </div>
        </div>
    )
}