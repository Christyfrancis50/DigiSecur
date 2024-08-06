import React from 'react';
import { motion } from "framer-motion";
import { IoIosArrowForward, IoMdPin, IoMdMail, IoMdCall } from "react-icons/io";
import { ContactForm } from "../../components/Contact/ContactForm";
import { Map } from "../../components/Map/Map";

export const Contact = () => {
  const details = [
    {
      title: "Our Address:",
      details: "123 Main St, City, State, 12345",
      icon: <IoMdPin className="text-4xl text-blue-600" />
    },
    {
      title: "Email:",
      details: "contact@example.com",
      icon: <IoMdMail className="text-4xl text-blue-600" />
    },
    {
      title: "Contact Info:",
      details: "+1-123-456-7890",
      icon: <IoMdCall className="text-4xl text-blue-600" />
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-slate-200 py-20 w-full flex flex-col justify-center items-center space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Contact Us
        </motion.h2>
        <p className="flex mx-2">
          Home
          <span>
            <IoIosArrowForward className="mt-1" />
          </span>
          <a className="text-blue-600 hover:text-blue-800">Contact</a>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 py-24 px-4 md:px-16">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.2 }}
            className="border border-gray-300 rounded-lg p-6 w-full md:w-1/3 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 border-2 border-gray-300 rounded-full">
                {detail.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
            <p>{detail.details}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
          className="text-orange-600 font-bold"
        >
          Send Us A Message
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
          className="text-4xl font-bold"
        >
          Get in Touch with Us Today.
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
        className="py-24 px-4 md:px-16"
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
        className="w-full h-96"
      >
        <Map />
      </motion.div>
    </div>
  );
};
