import React, { createContext, useEffect, useState } from "react";
import '../styles/Arr.scss'
import axios from 'axios';
export const arrContext = createContext();


export default function ArrSaleContext(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <arrContext.Provider value={{ products, setProducts }}>
            {props.children}
        </arrContext.Provider>
    );
};