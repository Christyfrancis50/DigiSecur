import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { BannerCards } from "../../components/Home/BannerCards";
import { CiLock } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbUserShield } from "react-icons/tb";
import { IoKeyOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { BsShieldPlus } from "react-icons/bs";
import Testimonials from "./Testimonials";

export const Services = () => {
  const service = [
    {
      icon: <CiLock />,
      title: "Endpoint Security",
      subtitle: "Tailored Services for a Secure Tomorrow.",
    },
    {
      icon: <IoShieldCheckmarkOutline />,
      title: "Cloud Security",
      subtitle: "Tailored Services for a Secure Tomorrow.",
    },
    {
      icon: <TbUserShield />,
      title: "Security Consulting",
      subtitle: "Our Robust Cybersecurity Service Suite.",
    },
    {
      icon: <IoKeyOutline />,
      title: "Network Security",
      subtitle: "Elevate Your Protection with Our Cyber Services.",
    },
    {
      icon: <LuUserCog />,
      title: "Application Security",
      subtitle: "Your Trusted Partner in Digital Security",
    },
    {
      icon: <BsShieldPlus />,
      title: "Security Awareness",
      subtitle: "Unveiling Our Cybersecurity Service Arsenal.",
    },
  ];

  return (
    <div>
      <div className="bg-blue-50 py-24 w-full first-sec flex flex-col justify-center items-center space-y-2">
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
      <div className="py-20 bg-blue-50">
        <BannerCards />
      </div>
      <div className="flex justify-center items-center flex-col py-20 space-y-6">
        <p className="text-orange-500 font-bold">Our Services</p>
        <h1 className="text-4xl font-bold text-center">From Your Cyber Security Services.</h1>
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 p-4 border-r border-gray-200 last:border-r-0 bg-white hover:bg-blue-100 transition-colors duration-300 hover:rounded-md py-12">
              <div className="flex items-center space-x-2 text-xl flex-col group transition-colors duration-300">
              <span className="border p-7 mb-6 rounded-full group-hover:text-blue-800 group-hover:border-blue-500 group-hover:shadow-lg">
                {item.icon}
              </span>
                <p className="ml-2 font-bold">{item.title}</p>
              </div>
              <p className="text-center">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  );
};
