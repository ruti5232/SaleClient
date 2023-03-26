import React, { useRef, useContext } from "react";
import '../styles/Arr.scss'
import { arrContext } from './ArrSaleContext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Arr() {


    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const ctx = useContext(arrContext);
    const navigate = useNavigate();
    const [image, setImage] = useState(ctx.products[0].img);
    function Add() {
        var products = ctx.products;
        let arr = [...products];
        arr.push({ name: nameRef.current.value, price: priceRef.current.value, img: image });
        ctx.setProducts(arr);
    }
    return (
        <div className="body">
            {
                ctx.products.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>שם המוצר</th>
                                <th>מחיר </th>
                                <th>תמונה</th>
                                <th>עריכת מוצר</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ctx.products.map((i, index) =>
                                <tr key={index} >
                                    <td>{i.name}</td>
                                    <td>{i.price}</td>
                                    <td><img src={i.img} /></td>
                                    <td><input type="button" className="buy" value="ערוך מוצר" onClick={() => { navigate('/EditItem/' + i.id) }} /></td>
                                </tr>)}
                            <tr>
                                <td><input type="text" placeholder="שם מוצר" ref={nameRef}></input></td>
                                {/* <td><input type="text" placeholder="color" ref={colorRef}></input></td> */}
                                <td><input type="number" placeholder="מחיר מוצר" ref={priceRef}></input></td>
                                {/* <td><input type="image" ref={imgRef}></input></td> */}
                                <td><input type="text" defaultValue={ctx.products[0].img} onChange={(e) => { setImage(e.target.value) }} /></td>
                                <td></td>
                            </tr>
                            <tr >
                                <td ><input type="button" className="buy" onClick={Add} value="הוסף מוצר" ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
            }
        </div>

    )
}