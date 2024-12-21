import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-top'>
                <div className="footer-section logo-section">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Passionate teachers ignite a love for learning. Enroll now to give your child a well-rounded education for lifelong success!</p>
                </div>
                <div className="footer-section links-section">
                    <h1>Additional Links</h1>
                    <a className='link' href="#">Login</a>
                    <a className='link' href="#">Register</a>
                    <a className='link' href="#">Categories</a>
                    <a className='link' href="#">Certificate Validation</a>
                </div>
                <div className="footer-section info-section">
                    <h1>Information</h1>
                    <a className='link' href="#">Terms & Conditions</a>
                    <a className='link' href="#">Privacy Policy</a>
                    <a className='link' href="#">FAQs</a>
                    <a className='link' href="#">Support</a>
                </div>
                <div className="footer-section contact-section">
                    <h1>Contact Us</h1>
                    <div className='contact-container'>
                    <div className='link-container'>
                        <a className='link' href="#">Link 1</a>
                        <a className='link' href="#">Link 2</a>
                        <a className='link' href="#">Link 3</a>
                    </div>
                    <div className="social-icons">
                        <a href="#"><img src="/images/Facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="/images/Instagram.png" alt="instagram" /></a>
                        <a href="#"><img src="/images/TwitterX.png" alt="twitter" /></a>
                        <a href="#"><img src="/images/WhatsApp.png" alt="whatsapp" /></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fidel Tutor. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;