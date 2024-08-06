// import React from "react";
// import service1 from "../../assets/services-1.jpg";
// import service2 from "../../assets/services-2.jpg";
// import service3 from "../../assets/services-3.jpg";
// import service4 from "../../assets/services-4.jpg";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { motion } from "framer-motion";

// export const OurServices = () => {
//   const ServiceCards = [
//     {
//       Image: service1,
//       title: "Application Security",
//       subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
//     },
//     {
//       Image: service2,
//       title: "Application Security",
//       subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
//     },
//     {
//       Image: service3,
//       title: "Application Security",
//       subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
//     },
//     {
//       Image: service4,
//       title: "Application Security",
//       subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
//     },
//   ];
//   return (
//     <div className="space-y-4 pb-16">
//       <div className="top flex px-36 pt-6 pb-4">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//             delay: 0.2,
//           }}
//           className="left w-[50%] space-y-4"
//         >
//           <p className="text-orange-400 font-bold">Our Services</p>
//           <h1 className="text-4xl font-bold">
//             What We Do for Your (SIEM) Security in Paheli.
//           </h1>
//         </motion.div>
//         <div className="right w-[50%] flex justify-end pt-6">
//           <button className="">
//             <span className="hover:bg-gradient-to-r border rounded-md p-3 border-blue-600 hover:from-blue-500 hover:to-orange-500 hover:text-white">
//               Our Services
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-36">
//           {ServiceCards.map((card, index) => (
//             <div key={index} className="relative">
//               <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-md">
//                 <img className="w-full h-64" src={card.Image} alt="Service" />
//               </div>
//               <div className="px-2 py-4 space-y-2">
//                 <motion.h2 initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//                 delay: 0.2,}} className="font-bold text-xl">
//                   {card.title}
//                 </motion.h2>
//                 <p>{card.subtitle}</p>
//                 <button className="flex leading-4 text-blue-400 transition-transform duration-300 hover:translate-x-2 rotate-0 pt-2">
//                   {" "}
//                   <span className="pr-2">Read More </span>
//                   <FaArrowTrendUp className="" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import service1 from "../../assets/services-1.jpg";
import service2 from "../../assets/services-2.jpg";
import service3 from "../../assets/services-3.jpg";
import service4 from "../../assets/services-4.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";

export const OurServices = () => {
  const ServiceCards = [
    {
      Image: service1,
      title: "Application Security",
      subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      Image: service2,
      title: "Application Security",
      subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      Image: service3,
      title: "Application Security",
      subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      Image: service4,
      title: "Application Security",
      subtitle: "The Imperative of Cybersecurity in an Interconnected World.",
    },
  ];
  return (
    <div className="space-y-4 pb-16">
      <div className="top flex flex-col md:flex-row px-6 md:px-12 lg:px-36 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="left w-full md:w-[50%] space-y-4"
        >
          <p className="text-orange-400 font-bold">Our Services</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            What We Do for Your (SIEM) Security in Paheli.
          </h1>
        </motion.div>
        <div className="right w-full md:w-[50%] flex justify-start md:justify-end pt-6 md:pt-0">
          <button className="">
            <span className="hover:bg-gradient-to-r border rounded-md p-3 border-blue-600 hover:from-blue-500 hover:to-orange-500 hover:text-white">
              Our Services
            </span>
          </button>
        </div>
      </div>
      <div className="bottom px-6 md:px-12 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ServiceCards.map((card, index) => (
            <div key={index} className="relative">
              <div className="overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-md">
                <img className="w-full h-64 object-cover" src={card.Image} alt="Service" />
              </div>
              <div className="px-2 py-4 space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="font-bold text-xl"
                >
                  {card.title}
                </motion.h2>
                <p>{card.subtitle}</p>
                <button className="flex items-center leading-4 text-blue-400 transition-transform duration-300 hover:translate-x-2 rotate-0 pt-2">
                  <span className="pr-2">Read More</span>
                  <FaArrowTrendUp />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
