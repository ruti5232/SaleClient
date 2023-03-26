import React from 'react'
import { useForm } from 'react-hook-form';
import ReactDOM from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Form.scss";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

export default function Form() {
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

  return (
    <div className='form-component'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input {...register("website")} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
    </div>
  );
}



// export default function Form() {
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();
  
//     return (
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
//         <input {...register('firstName')} placeholder="firstName"/>
//         <input {...register('lastName', { required: true })} placeholder="lastName"/>
//         {errors.lastName && <p>Last name is required.</p>}
//         <input {...register('age', { pattern: /\d+/ })} placeholder="age"/>
//         {errors.age && <p>Please enter number for age.</p>}
//         <input {...register('adress')} placeholder="adress"/>
//         <input {...register('email')} placeholder="firstName"/>
//         <input {...register('firstName')} placeholder="firstName"/>
//         <input type="submit" />
//       </form>
//     );
//   }
