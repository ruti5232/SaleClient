import React from 'react'
import Arr from './Arr'
import List from './List';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/PageStart.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';

export default function PageStart(props) {
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("currentUser")));
    return (
        <div className='body'>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar  className="navbox">
                    <Toolbar  className="navbar">
                        <div className='button-container'>
                        {currentUser.username==="admin"&&currentUser.password==="1234"&&<Button color="inherit"><Link className="buttons" to="/arr">טבלת המוצרים</Link></Button>}
                        {/* <Button color="inherit"><Link className="buttons" to="/login">התחברות</Link></Button> */}
                        {/* <Button color="inherit"><Link className="buttons" to="/register">הרשמה</Link></Button> */}
                        <Button color="inherit"><Link className="buttons" to="/list">כל הפרסים</Link></Button>
                        <Button color="inherit"><Link className="buttons" to="/donation">לתרומה</Link></Button>
                        <Button color="inherit"><Link className="buttons" to="/logout">התנתקות</Link></Button>
                        </div>
                        <div className='hello'>
                            <h3>שלום {currentUser.username}</h3>
                            <h3>{props.count}</h3>
                            {/* <ShoppingCartOutlinedIcon className='cart'/> */}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            <img className="navimg" src="../assets/header.jpg" id="header"/>
        </div>
    )
}