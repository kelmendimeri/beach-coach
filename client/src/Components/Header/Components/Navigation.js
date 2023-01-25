import React from 'react';
import './Navigation.css';
import GradientButton from "../../GradientButton";
import logoBrand from '../../../assets/images/logo-brand.png';
import {HashLink} from 'react-router-hash-link';

const Navigation = () => {
    return (
        <nav id={"navigation"} className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className={"navbar-brand"} href={"/"}>
                    <img className={"navbar-brand-logo"} src={logoBrand} alt={"brand-logo"}/>
                    <p className={"brand-name"}>Beach Coach App</p>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                <ul className={"navbar-nav me-auto"}>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"/where"}>Where</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"/when"}>When</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"/creator"}>Creators</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"/blog"}>Blog</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"/coach"}>Coach</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink className={"nav-link"} to={"contact"}>Contact</HashLink>
                    </li>
                    <li className={"nav-item"}>
                        <HashLink to="/#subscribe">
                            <GradientButton className={"navigationGradientButton"} text={"JOIN WAIT LIST"}/>
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;