import { useParams } from 'react-router';
import { useContext } from 'react';
import arr, { arrContext } from "./ArrSaleContext";
import React, { createContext, useEffect, useState } from "react";
import '../styles/Item.scss'
import { useNavigate } from 'react-router';

export default function Item() {
    const navigate = useNavigate();
    const params = useParams();
    const context = useContext(arrContext);
    console.log(params)
    console.log(context.products);
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="contain">
                <img className="item-img" src={context.products[params.id - 1].img} />
                <div className="text">{context.products[params.id - 1].name}<p></p>
                    ₪{context.products[params.id - 1].price}
                    <p></p>
                    <input className ="buy" type="button" value="לרכישה" onClick={() => { navigate('/Purchase/'+params.id) }}/></div>
            </div>

        </>
        //         <div style={{backgroundColor:params.id}} >
        // Hello!
        //         </div>
    );
}