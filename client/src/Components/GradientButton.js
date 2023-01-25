import React from 'react';
import '../assets/styles/gradientbutton.css';

const GradientButton = ({icon, ...props}) => {
    return (
        <button className={"gradient-button"} style={{display: "flex"}} {...props}>
            {props.text}
            {icon}
        </button>
    );
};

export default GradientButton;