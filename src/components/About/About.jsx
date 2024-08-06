import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import aboutImg from "../../assets/about.webp";
import { OurServices } from "../../components/Home/OurServices.jsx";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div>
      <div className="bg-slate-200 py-20 w-full first-sec flex flex-col justify-center items-center space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-2xl font-bold"
        >
          About Us
        </motion.h2>
        <p className="flex mx-2">
          Home{" "}
          <span>
            {" "}
            <IoIosArrowForward className="mt-1" />{" "}
          </span>{" "}
          <a className="text-blue-600 hover:text-blue-800">About</a>
        </p>
      </div>
      <div className="second-sec flex flex-col lg:flex-row py-20 px-8 md:px-16 lg:px-36">
        <div className="left w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-12">
          <img src={aboutImg} className="w-full h-auto" alt="About Us" />
        </div>
        <div className="right w-full lg:w-1/2 lg:ml-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="top mb-12 space-y-4"
          >
            <p className="text-orange-600 font-bold">About</p>
            <h2 className="text-2xl md:text-4xl font-bold">
              The Virtual Realm: A Expansive Guide to Cybersecurity.
            </h2>
            <p>
              Organizations are now compelled to complete comprehensive
              cybersecurity strategies to safeguard their systems, networks, and
              data from the relentless onslaught of cyber threats, ensuring the
              protection of privacy...
            </p>
          </motion.div>
          <div className="bottom flex flex-col md:flex-row">
            <div className="left space-y-2 justify-center items-center mb-6 md:mb-0 md:mr-10">
              <span>
                <h3 className="px-5 py-6 border w-fit rounded-full font-bold text-xl">
                  4.7+
                </h3>
              </span>
              <p>Review Customer</p>
              <p>
                Organizations are now forced to implement comprehensive cyber
                security strategies,
              </p>
            </div>
            <div className="right justify-center items-center space-y-2">
              <span>
                <h3 className="px-5 py-6 border w-fit rounded-full font-bold text-xl">
                  4K+
                </h3>
              </span>
              <p>Project Completed</p>
              <p>
                Organizations are now forced to implement comprehensive cyber
                security strategies,
              </p>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-white flex leading-8 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 py-3 px-4 mt-8 rounded"
          >
            Request A Quote
          </motion.button>
        </div>
      </div>
      <OurServices />
    </div>
  );
};
