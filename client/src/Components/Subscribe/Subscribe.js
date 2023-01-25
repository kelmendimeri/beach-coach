import React from 'react';
import './Subscribe.css';
import {useForm} from "react-hook-form";
import axios from "axios";

const Subscribe = ({title, describe, ...rest}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:3000/waiting-list', {
            email: data.subscribeEmail
        }).then(()=>{reset(data)});
    }

    return (
        <div id={"subscribe"} className={"subscribe"}>
            <div className={"subscribe-text"}>
                <div className={"subscribe-text-title"}>
                    <p>{title.toUpperCase()}</p>
                </div>
                <div className={"subscribe-text-describe"}>
                    <p>{describe}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"subscribe-controls"}>
                <input type="email" className="form-control" placeholder={errors.subscribeEmail ? "Required Field" : "Subscribe here"}
                       style={{border: errors.subscribeEmail && "1px solid red"}}
                       {...register("subscribeEmail", {required: {value: true, message: "Required Field"}})}/>
                <input type={"submit"} className={"form-control"} value={"SIGN UP"} placeholder={"Subscribe here"}/>
            </form>
        </div>
    );
};

export default Subscribe;