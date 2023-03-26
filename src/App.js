import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import MyRoute from './components/MyRoute';
import React, { useState } from 'react';
import ArrSaleContext from './components/ArrSaleContext';
import PageStart from './components/PageStart';
import List from './components/List';
import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/primereact.min.css";

import "primeicons/primeicons.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  //const [count, setCount] = useState(0);
  return (
    <div>
      <BrowserRouter>
        {
          !isLogin ?
            <Login setIsLogin={setIsLogin} />
            :
            <ArrSaleContext>
              {/* <List setCount={setCount} /> */}
              {/* <h1>{count}</h1> */}
              {/* {console.log("count",count)} */}
              <PageStart/>
              <MyRoute setIsLogin={setIsLogin}/>
            </ArrSaleContext>
        }
      </BrowserRouter>
    </div>
  );
}
export default App;
