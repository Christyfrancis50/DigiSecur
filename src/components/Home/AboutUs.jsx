import React from "react";
import aboutImg from "../../assets/Aboutus.webp";
import { RiTeamFill } from "react-icons/ri";
import { BsSoundwave, BsBrightnessAltHighFill } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const AboutCard = [
    {
      Title: "Highly Professional Members",
      Subtitle:
        "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
      Icon: <RiTeamFill />,
    },
    {
      Title: "Infrastructure Integration Technology",
      Subtitle:
        "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
      Icon: <BsSoundwave />,
    },
    {
      Title: "Vulnerability Assessment & Penetration Testing",
      Subtitle:
        "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
      Icon: <BsBrightnessAltHighFill />,
    },
    {
      Title: "Security Information & Event Management",
      Subtitle:
        "Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,",
      Icon: <GrShieldSecurity />,
    },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-36 pt-16 pb-16 space-y-14">
      <div className="top flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 pt-4 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="left w-full lg:w-1/2 space-y-4"
        >
          <p className="text-orange-400 font-bold tracking-wide">About DigiSecur</p>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            The Virtual Realm: An Expansive Guide to Cybersecurity.
          </h1>
        </motion.div>
        <div className="right w-full lg:w-1/2 flex items-center">
          <p>
            Organizations are now compelled to complete comprehensive
            cybersecurity strategies to safeguard their systems, networks, and
            data from the relentless onslaught of cyber threats, ensuring the
            protection of privacy...
          </p>
        </div>
      </div>
      <div className="bottom flex flex-col lg:flex-row space-y-10 lg:space-y-0">
        <div className="left w-full lg:w-1/2">
          <img className="w-full lg:w-[36vw] h-auto" src={aboutImg} alt="About DigiSecur" />
        </div>
        <div className="right w-full lg:w-1/2 space-y-8">
          {AboutCard.map((card, index) => (
            <div key={index} className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
              <div className="left text-4xl border p-4 md:p-6 rounded-full hover:shadow-md">
                {card.Icon}
              </div>
              <div className="right space-y-1">
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="text-lg md:text-xl font-bold leading-normal"
                >
                  {card.Title}
                </motion.h2>
                <p>{card.Subtitle}</p>
              </div>
            </div>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-white flex leading-8 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 py-3 px-4 rounded"
          >
            <FaCircleArrowRight className="text-3xl pr-2 pt-0" /> Know More About
          </motion.button>
        </div>
      </div>
    </div>
  );
};
