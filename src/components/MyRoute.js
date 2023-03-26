import React, { useState } from "react";
import { Link, Route,  Routes} from 'react-router-dom';

import '../styles/MyRoute.scss'

import App from "../App";
import Arr from "./Arr";
import Login from "./Login";
import List from "./List";
import Item from "./Item";
import Purchase from "./Purchase";
import PageStart from "./PageStart";
import Donation from "./Donation";
import { TabMenu } from 'primereact/tabmenu';
import Register from './Register';
import Logout from "./Logout";
import EditItem from "./EditItem";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default function MyRoute(props) {
    const { setIsLogin } = props;
   
    return (
        <>
        {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
{/* <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} /> */}
    {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Button color="inherit"><Link to="/arr">List (table)</Link></Button>
          <Button color="inherit"><Link to="/login">התחברות</Link></Button>
          <Button color="inherit"><Link to="/list">כל הפרסים</Link></Button>
        </Toolbar>
      </AppBar>
    </Box> */}
    <div>
            {/* <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/arr">List (table)</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/List">list(arr)</Link>
                    </li>
                </ul>
            </div> */}
            <Routes >
                <Route path="/" element={<List />}/>

                <Route path="/arr" element={<Arr/>} />
                
                <Route path="/login" element={ <Login/>} />
               
                <Route path="/List" element={ <List/>} />
               
                <Route path="/Item/:id"element={<Item/>}  />

                <Route path="/Purchase/:id"element={<Purchase/>}  />

                <Route path="/Donation"element={<Donation/>}  />
                
                <Route path="/Register"element={<Register/>}  />

                <Route path="/Logout"element={<Logout setIsLogin={setIsLogin}/>}  />

                <Route path="/EditItem/:id"element={<EditItem/>}  />

            </Routes>
        </div>
        </>

    )
}