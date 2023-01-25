import React from 'react';
import './SendMail.css';
import GradientButton from "../../../Components/GradientButton";
import {useForm} from 'react-hook-form';
import axios from "axios";

const SendMail = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3000/send-form', {
            email: data.Email,
            fullName: data.Fullname,
            message: data.Message,
            phoneNumber: data.PhoneNumber
        }).then(()=>{reset(data)});
        console.log(data)
        reset(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"send-mail"} id={"send-mail"}>
            <div className={"send-mail-title"}><p>Send us a message</p></div>
            <div className="input-group">
            <span className="input-group-text bg-transparent">
                <i className="bi bi-person-fill"></i>
            </span>
                <input type="text" {...register("Fullname", {required: {value: true, message: "Required Field"}})}
                       className="form-control" placeholder={errors.Fullname ? "Required Field" : "Fullname"}
                       style={{border: errors.Fullname && "1px solid red"}}/>
            </div>
            <div className="input-group">
            <span className="input-group-text bg-transparent">
                <i className="bi bi-envelope"></i>
            </span>
                <input type="email" className="form-control" placeholder={errors.Email ? "Required Field" : "Email"}
                       style={{border: errors.Email && "1px solid red"}}
                       {...register("Email", {required: {value: true, message: "Required Field"}})}/>
            </div>
            <div className="input-group">
            <span className="input-group-text bg-transparent">
                <i className="bi bi-telephone-fill"></i>
            </span>
                <input type="tel" {...register("PhoneNumber")} className="form-control" placeholder={"Phone Number"}/>
            </div>
            <div className="input-group">
            <span className="input-group-text span-text-area bg-transparent">
                <i className="bi bi-chat-text-fill"></i>
            </span>
                <textarea {...register("Message", {
                    required: {
                        value: true,
                        message: "Required Field"
                    }, maxLength: 200
                })} className="form-control" placeholder={errors.Email ? "Required Field" : "Text(max 200 character)"}
                          style={{border: errors.Email && "1px solid red"}} maxLength={200}/>
            </div>
            <GradientButton className={"gradient-button-send-mail form-control"} text={"Send"}
                            icon={<i className={"bi bi-arrow-right"}></i>} type={"submit"}/>
        </form>
    );
};

export default SendMail;