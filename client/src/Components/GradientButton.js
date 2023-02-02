import React from 'react';
import '../assets/styles/gradientbutton.css';

const GradientButton = ({icon, ...props}) => {
    return (
        <button className={"gradient-button"} style={{display: "flex", color: "black"}} {...props}>
            {props.text}
            {icon}
        </button>
    );
};

export default GradientButton;