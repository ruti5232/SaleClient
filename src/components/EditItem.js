import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from 'react';
import arr, { arrContext } from "./ArrSaleContext";
import { useParams } from 'react-router';
import { useNavigate } from "react-router";
export default function EditItem() {
    const context = useContext(arrContext);
    const params = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState(context.products[params.id - 1].img);
    const [name, setName] = useState(context.products[params.id - 1].name);
    const [price, setPrice] = useState(context.products[params.id].price);
    function update() {
        var products = context.products;
        let arr = [...products];
        arr[params.id - 1].name = name;
        arr[params.id - 1].price = price;
        arr[params.id - 1].img = image;
        context.setProducts(arr);
        console.log("product", context.products[params.id - 1]);
        navigate('/List');
    }

    return (<>
        <div className="contain" style={{ marginBottom: '5vh' }}>
            <img className="item-img" src={image} />
            <div className="text">
                <label>שם מוצר</label><p></p>
                <input defaultValue={context.products[params.id - 1].name} onChange={(e) => setName(e.target.value)} />
                <p></p>
                <label>מחיר מוצר</label><p></p>
                <input type="number" defaultValue={context.products[params.id - 1].price} onChange={(e) => { setPrice(e.target.value) }} />
                <p></p>
                <label>תמונת מוצר</label><p></p>
                <input type="text" defaultValue={context.products[params.id - 1].img} onChange={(e) => { setImage(e.target.value) }} />
                <p></p>
                <input className="buy" type="button" value="שמור שינויים" onClick={() => { update() }} />
            </div>
        </div>

    </>)
}