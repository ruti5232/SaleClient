import React from 'react'
import { useForm } from 'react-hook-form';
import ReactDOM from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Form.scss";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignupSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required().email(),
});

export default function Register() {
  const navigate = useNavigate();
  const addUser = () => {
    if (username && password && address && email) {
      axios.post('http://localhost:4000/user/addUser', {
        username: username,
        password: password,
        address: address,
        email: email
      }).then(data => { console.log(data.data);localStorage.setItem("currentUser",JSON.stringify(data.data));alert("משתמש נוסף בהצלחה✔✔✔✔");navigate('/List')})
        .catch(error => { console.log(error); alert("נכשל בהוספת משתמש!!!!!!!") });
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    addUser();
  };
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem("currentUser")).username);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className='form-component'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>שם משתמש</label>
          <input {...register("userName")} defaultValue={username} onChange={(e) => { setUsername(e.target.value) }} />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>סיסמא</label>
          <input {...register("password")} onChange={(e) => { setPassword(e.target.value) }} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>כתובת</label>
          <input {...register("address")} onChange={(e) => { setAddress(e.target.value) }} />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label className='form-label'>מייל</label>
          <input  {...register("email")} onChange={(e) => { setEmail(e.target.value) }} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}