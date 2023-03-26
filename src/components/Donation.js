import React from 'react'
import { useForm } from 'react-hook-form';
import ReactDOM from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Form.scss";
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router-dom';
const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    sumForDonation: yup.number().required().positive().integer(),
    creditCard: yup.string().required().length(16),
});

export default function Donation() {
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        alert("התרומה נוספה בהצלחה תזכו למצוות!!✔✔✔✔")
        navigate("/List");
    };

    return (
        <div className='form-component'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>שם פרטי</label>
                    <input {...register("firstName")} value={JSON.parse(localStorage.getItem("currentUser")).username} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>שם משפחה</label>
                    <input {...register("lastName")} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label>סכום לתרומה</label>
                    <input type="number" {...register("sumForDonation", { valueAsNumber: true })} />
                    {errors.sumForDonation && <p>{errors.sumForDonation.message}</p>}
                </div>
                <div>
                    <label>מספר אשראי</label>
                    <input {...register("creditCard")} />
                    {errors.creditCard && <p>{errors.creditCard.message}</p>}
                </div>
                {/* <SweetAlert
                    title={"Uses render props"}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                    dependencies={[this.state.firstName, this.state.lastName]}
                ></SweetAlert> */}
                <input type="submit"/>
            </form>
        </div>
    );
}



