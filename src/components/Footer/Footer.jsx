import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";
import FooterImg from "../../assets/FooterLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-slate-800 px-6 md:px-12 lg:px-32 w-full">
      <div className="top text-white flex flex-col lg:flex-row justify-between pt-12 pb-12 border-b-2 border-gray-700">
        <div className="left flex items-center space-x-3 mb-6 lg:mb-0">
          <div className="bg-slate-100 p-3 rounded-full">
            <BiPhoneCall className="text-4xl text-blue-800"/>
          </div>
          <div>
            <p>Give Us A Call</p>
            <h3>+319-665-3322</h3>
          </div>
        </div>
        <div className="mid text-white flex flex-col items-center space-y-2 mb-6 lg:mb-0">
          <p>Follow Us On</p>
          <div className="social-media-icons flex space-x-3">
            <a href="https://www.facebook.com/DigiSecur-107399218391216/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF/>
            </a>
            <a href="https://www.instagram.com/digisecur_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/digisecur" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://pinterest.com/digisecur" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="right flex flex-col lg:flex-row items-center lg:justify-center lg:items-center space-x-0 lg:space-x-4">
          <p className="lg:w-[15%] lg:mr-2 mb-2 lg:mb-0">Join Our Newsletter</p>
          <div className="bg-gray-700 p-3 text-white flex flex-col lg:flex-row items-center lg:items-center rounded-md">
            <input type="text" placeholder="Your Email Address" className="h-8 lg:h-[2vw] w-full lg:w-auto bg-transparent text-white mb-2 lg:mb-0 lg:mr-2 p-2"/>
            <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white px-4 py-2 w-full lg:w-auto">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="middle text-white flex flex-col lg:flex-row w-full justify-between py-12 border-b-2 border-gray-700">
        <div className="first w-full lg:w-[30%] mb-6 lg:mb-0">
        <Link to="/">
          <img src={FooterImg} className="w-[70%] h-auto"/>
          </Link>
          <p>Cybersecurity is crucial in today's digital age, where many individuals and organizations store a significant amount of sensitive data on computers...</p>
        </div>
        <div className="second w-full lg:w-[30%] flex flex-col justify-start items-start ps-0 lg:ps-10 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold pb-3">Contact Us</h3>
          <div className="flex space-x-2">
            <p>Phone :</p>
            <h4>+319-665-3322</h4>
          </div>
          <div className="flex space-x-2">
            <p>Email :</p>
            <h4>info@digisecur.com</h4>
          </div>
          <div className="flex space-x-2">
            <p>Address:</p>
            <h4>Amsterdam, Netherlands</h4>
          </div>
        </div>
        <div className="third w-full lg:w-[15%] mb-6 lg:mb-0">
          <h3 className="text-xl font-bold pb-3">Quick Links</h3>
          <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
            <li>Services</li>
            <li>Testimonial</li>
            <li>Our Blog</li>
          </ul>
        </div>
        <div className="fourth w-full lg:w-[15%]">
          <h3 className="text-xl font-bold pb-3">Resources</h3>
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="bottom text-white flex flex-col lg:flex-row justify-center items-center py-10 space-y-4 lg:space-y-0">
        <p className="text-center lg:text-left">Copyright @ 2024 <span className="text-orange-500">DigiSecur</span>. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
