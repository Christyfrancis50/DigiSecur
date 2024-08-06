// import React from "react";
// import { FaCheckDouble } from "react-icons/fa6";
// import ChooseUsImg from "../../assets/ChooseUs.webp";
// import { FaCircleArrowRight } from "react-icons/fa6";
// import { motion } from "framer-motion";

// export const ChooseUs = () => {
//   return (
//     <div className="flex px-36 py-20 bg-blue-50">
//       <div className="left w-[50%] space-y-5">
//         <motion.p
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//             delay: 0.2,
//           }}
//           className="text-orange-500 font-bold"
//         >
//           Why Choose Us?
//         </motion.p>
//         <motion.h1 initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//                 delay: 0.2,}}
//                 className="text-4xl leading-tight font-bold">
//           Digital Vigilance: Strengthening Cyber Defenses in the Modern.
//         </motion.h1>
//         <div className="list space-y-5 pb-4">
//           <p className="flex p-5 bg-blue-100 rounded-3xl w-fit">
//             <FaCheckDouble className="text-blue-500" />
//             <span className="leading-none pl-3">
//               Vulnerability Assessment and Penetration Testing
//             </span>
//           </p>
//           <p className="flex p-5 bg-blue-100 rounded-3xl w-fit">
//             <FaCheckDouble className="text-blue-500" />
//             <span className="leading-none pl-3">
//               Identity and Access Management (IAM)
//             </span>
//           </p>
//           <p className="flex p-5 bg-blue-100 rounded-3xl w-fit">
//             <FaCheckDouble className="text-blue-500" />
//             <span className="leading-none pl-3">
//               Security Information and Event Management
//             </span>
//           </p>
//           <p className="flex p-5 bg-blue-100 rounded-3xl w-fit">
//             <FaCheckDouble className="text-blue-500" />
//             <span className="leading-none pl-3">
//               Security Auditing and Compliance
//             </span>
//           </p>
//           <p className="flex p-5 bg-blue-100 rounded-3xl w-fit">
//             <FaCheckDouble className="text-blue-500" />
//             <span className="leading-none pl-3">
//               This service involves responding to security
//             </span>
//           </p>
//         </div>
//         <motion.button initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//                 delay: 0.2,}}
//                  className="text-white flex leading-7 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 py-4 px-5 rounded ">
//           <FaCircleArrowRight />
//           <span className="leading-none">Learn More</span>
//         </motion.button>
//       </div>
//       <div className="right w-[50%] flex justify-end pl-4 pt-4 items-center">
//         <img src={ChooseUsImg} className="w-[95%] h-[95%]" />
//       </div>
//     </div>
//   );
// };

import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import ChooseUsImg from "../../assets/ChooseUs.webp";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export const ChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-12 lg:px-36 py-10 md:py-20 bg-blue-50">
      <div className="left w-full md:w-[50%] space-y-5">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-orange-500 font-bold"
        >
          Why Choose Us?
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold"
        >
          Digital Vigilance: Strengthening Cyber Defenses in the Modern.
        </motion.h1>
        <div className="list space-y-3 md:space-y-4 lg:space-y-5 pb-4">
          {[
            "Vulnerability Assessment and Penetration Testing",
            "Identity and Access Management (IAM)",
            "Security Information and Event Management",
            "Security Auditing and Compliance",
            "This service involves responding to security",
          ].map((item, index) => (
            <p key={index} className="flex p-3 md:p-4 lg:p-5 bg-blue-100 rounded-3xl w-fit">
              <FaCheckDouble className="text-blue-500" />
              <span className="leading-none pl-3">{item}</span>
            </p>
          ))}
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
          className="text-white flex leading-7 space-x-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 py-3 md:py-4 px-4 md:px-5 rounded"
        >
          <FaCircleArrowRight />
          <span className="leading-none">Learn More</span>
        </motion.button>
      </div>
      <div className="right w-full md:w-[50%] flex justify-center md:justify-end pt-10 md:pt-0 items-center">
        <img src={ChooseUsImg} className="w-[90%] md:w-[95%] h-auto" />
      </div>
    </div>
  );
};
