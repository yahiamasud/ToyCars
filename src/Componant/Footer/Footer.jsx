import React from 'react';
import img from '/public/ldp_plugin-wpml.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className=' bg-sky-400'>
            <div >
            <footer className="footer p-10  text-base-content">
                <div className='text-center'>
                    <img className='imgFooter' src={img} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
        <div className=' link footer-title link-hover text-center p-5'>don't copyRight@toyCors</div>
        </div>
    );
};

export default Footer;