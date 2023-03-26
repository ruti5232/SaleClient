import React, { useState ,useContext } from 'react'
import { useForm } from 'react-hook-form';
import ReactDOM from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Form.scss";
import { arrContext } from "./ArrSaleContext";
import { useParams } from 'react-router';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required().length(10),
  address: yup.string(),
  city: yup.string(),
  email: yup.string().email(),
  creditCard: yup.string().required().length(16),
  productName: yup.string().required(),
  productPrice: yup.number().required().positive().integer(),
});

export default function Purchase() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const ctx=useContext(arrContext);
  const [count,setCount]=useState(0);
  const [sum,setSum]=useState(0);
  const params = useParams();
  const product =ctx.products[params.id];
  const currentUser=JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className='form-component'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className='form-label'>שם פרטי</label>
        <input {...register("firstName")} value={currentUser.username}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label className='form-label'>שם משפחה</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label className='form-label'>פלאפון</label>
        <input {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <div>
        <label className='form-label'>כתובת</label>
        <input {...register("address")} value={currentUser.address}/>
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label className='form-label'>עיר</label>
        <input {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>
      <div>
        <label className='form-label'>מייל</label>
        <input  {...register("email")} value={currentUser.email}/>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label className='form-label'>שם מוצר</label>
        <input {...register("productName")} value={product.name}/>
        {errors.productName && <p>{errors.productName.message}</p>}
      </div>
      <div>
        <label>מחיר מוצר</label>
        <input type="number" {...register("productPrice", { valueAsNumber: true })} value={product.price}/>
        {errors.productPrice && <p>{errors.productPrice.message}</p>}
      </div>
      <div>
      <label className='form-label'>מספר כרטיסים</label>
      <div className='num-cards'>
      <div className='plus-minus-container'>
     <AddCircleIcon className='plus-minus' onClick={() => { setCount(count + 1); setSum(sum+product.price) }}/>
      <div id="num"><h6>{count}</h6></div>
     <RemoveCircleIcon className='plus-minus' onClick={() => { count > 0 && setCount(count - 1); sum-product.price>=0&&setSum(sum-product.price) }}/>
     </div>
      <h6>סכום לתשלום : ₪{sum}</h6>
      </div>
      </div>
      <div>
        <label className='form-label'>מספר אשראי</label>
        <input {...register("creditCard")} />
        {errors.creditCard && <p>{errors.creditCard.message}</p>}
      </div>
      <input type="submit" />
    </form>
    </div>
  );
}
