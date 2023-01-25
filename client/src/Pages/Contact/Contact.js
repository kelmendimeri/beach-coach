import React from 'react';
import SendMail from "./Component/SendMail";
import GetInTouch from "./Component/GetInTouch";

const Contact = () => {
    return (
        <div className={"contact"} id={"contact"}>
            <GetInTouch/>
            <SendMail/>
        </div>
    );
};

export default Contact;