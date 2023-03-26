import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Logout(props) {
    const { setIsLogin } = props;
    const navigate = useNavigate();
    useEffect(() => {
        setIsLogin(false);
        navigate('/');
        localStorage.removeItem("currentUser");
    }, [])
    return (<>
        {console.log(setIsLogin)}
    </>)
}