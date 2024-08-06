import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import BgImg from "../../assets/BannerFeamale.webp";
import { motion } from "framer-motion";

export const Banner = () => {
  const BannerImg = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="min-h-[55vw] flex flex-col md:flex-row items-center md:items-top px-4 py-16 md:px-10 z-0"
      style={BannerImg}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="left w-full md:w-1/2 space-y-4 text-center md:text-left"
      >
        <p className="text-orange-400 font-bold tracking-wide">
          Enhancing Digital Security:
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide leading-tight">
          Fortifying Your Digital Security Measures.
        </h1>
        <p className="text-white">
          Digital security is essential to protect sensitive information from
          cyber threats. Implement strong passwords, use multi-factor
          authentication, update software regularly, and educate users about
          phishing to ensure robust protection against data breaches.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-6 justify-center md:justify-start">
          <button className="text-white flex leading-7 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 p-4 rounded">
            <FaCircle className="text-lg pr-2 pt-2" />
            Request A Demo
          </button>
          <button className="text-white flex leading-7 p-4">
            <FaRegCirclePlay className="text-3xl pr-2 hover:text-orange-500" />
            Watch Intro Video
          </button>
        </div>
      </motion.div>
      <div className="right w-full md:w-1/2"></div>
    </div>
  );
};
