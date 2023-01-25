import React from 'react';
import './Footer.css';
import appleDownload from '../../assets/images/Footer/apple.png';
import androidDownload from '../../assets/images/Footer/android.png';
import footerLogo from '../../assets/images/logo-brand.png';
import FooterLinks from "./Component/FooterLinks";

const Footer = () => {
    return (
        <div>
            <footer className={"footer"}>
                <div className={"footer-text"}>
                    <h1 className={"footer-text-title"}>Join the waitlist</h1>
                    <p className={"footer-text-describe"}>Discover more of the under-water world of Australia’s beautiful
                        beaches.</p>
                    <div className={"downlaod-mobile-platforms"}>
                        <img src={appleDownload} alt={"apple-download"}/>
                        <img src={androidDownload} alt={"android-download"}/>
                    </div>
                </div>
                <div className={"logo-brand"}>
                    <img src={footerLogo} alt={"logo"} style={{width: "40px", height: "40px"}}/>
                    <p className={"footer-logo-name"}>BEACH COACH APP</p>
                </div>

                <div className={"social"}>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className={"bi bi-tiktok"}></i>
                </div>
            </footer>
            <FooterLinks/>

        </div>
    );
};

export default Footer;