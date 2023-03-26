import React, { useState, useEffect, useContext } from "react";
import "../styles/List.scss";
import "./Arr.js";
import arr, { arrContext } from "./ArrSaleContext";
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PageStart from "./PageStart";

export default function List(props) {

    const navigate = useNavigate();
    const ctx = useContext(arrContext);
    // const [count, setCount] = useState(props);
    // const {setCount}=props;
    // const initialState = [
    //     { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 },
    //     { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 },
    //     { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 },
    //     { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }
    // ];

    // const [arrCount, setArrCount] = useState(initialState);
    // const updateState = (index) =>{
    //     const newArray = arrCount.map((item, i) => {
    //       if (index === i) {
    //         return { ...item, count:arrCount[index].count+1 };
    //       } else {
    //         return item;
    //       }
    //     });
    //     setArrCount(newArray);
    //   };
    return (
        <>
            <div className="mineAll ">

                {ctx.products.map((i, index) => <div key={index} className="card mineCard" onClick={() => { navigate('/item/' + i.id) }}>

                    <div className="card-body" id="all-card">

                        <img src={i.img} className="card-img-top mineImg" />
                        <h5 className="card-text">{i.name}</h5>
                        <p className="card-text">₪{i.price}</p>
                        {/* <p className="card-text">{i.color}</p> */}
                        {/* <input className="myInput" type="button" value="sendColor" onClick={() => { navigate('/item/' + i.color) }} /> */}
                        {/* כפתורי + - */}
                        {/* <div className="flex-container">
                        <img src="../assets/plus.png" className="myInput" onClick={() => { setCount(count + 1) }} />
                        <p className="myInput">{count}</p>
                        <img src="../assets/minus.png" className="myInput" onClick={() => { count > 0 && setCount(count - 1) }} />
                    </div> */}
                        {/* <AddShoppingCartIcon className="cart" onClick={()=>{updateState(index)}} /> */}
                        {/* {console.log(arrCount[index].count)} */}
                        {/* {arrCount[index].count} */}
                    </div>
                </div>
                )
                }

            </div>
        </>

    )
}