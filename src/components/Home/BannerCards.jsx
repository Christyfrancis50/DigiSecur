import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export const BannerCards = () => {
  const BanCard = [
    {
      Digit: "01",
      Title: "Security Management",
      Subtitle: "The Imperative of Cybersecurity in an International world.",
      Icon: <FaCircle />,
      Button: "Learn More",
      ButtonIcon: <FaArrowTrendUp />,
    },
    {
      Digit: "02",
      Title: "Risk Assessment",
      Subtitle: "Understanding the potential risks in your system.",
      Icon: <FaCircle />,
      Button: "Learn More",
      ButtonIcon: <FaArrowTrendUp />,
    },
    {
      Digit: "03",
      Title: "Incident Response",
      Subtitle: "Effective strategies for managing security incidents.",
      Icon: <FaCircle />,
      Button: "Learn More",
      ButtonIcon: <FaArrowTrendUp />,
    },
    {
      Digit: "04",
      Title: "Compliance",
      Subtitle: "Ensuring adherence to security regulations.",
      Icon: <FaCircle />,
      Button: "Learn More",
      ButtonIcon: <FaArrowTrendUp />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center z-10 md:mt-[-12vw] pt-20">
      {BanCard.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] rounded overflow-hidden shadow-lg m-3 bg-slate-50 rounded-tr-3xl rounded-bl-3xl"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="flex items-center mb-2 z-20">
              <span className="font-bold text-xl mr-2 p-6 shadow-md rounded-full digit hover:bg-blue-500 z-20">
                {card.Digit}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="font-bold text-xl mb-2"
            >
              {card.Title}
            </motion.div>
            <p className="text-gray-700 text-base">{card.Subtitle}</p>
            <button className="mt-4 flex items-center text-blue-500 transition-transform duration-300 hover:translate-x-2 rotate-2">
              <span className="mr-2">{card.Button}</span>
              {card.ButtonIcon}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
