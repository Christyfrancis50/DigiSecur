import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ title, content, initiallyOpen }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200"
    >
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-gray-100"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const items = [
    {
      title: 'What is cybersecurity?',
      content: 'Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.',
    },
    {
      title: 'Why is cybersecurity important?',
      content: 'Cybersecurity is crucial because it protects all categories of data from theft and damage. This includes sensitive data, personally identifiable information (PII), protected health information (PHI), personal information, intellectual property, data, and governmental and industry information systems.',
    },
    {
      title: 'What are common types of cyber threats?',
      content: 'Common types of cyber threats include malware, phishing, ransomware, man-in-the-middle (MitM) attacks, denial-of-service (DoS) attacks, and SQL injection. Each type of threat targets different vulnerabilities and uses different methods to exploit them.',
    },
    {
      title: 'How can I protect my personal information online?',
      content: 'Protect your personal information online by using strong, unique passwords for different accounts, enabling two-factor authentication, being cautious of phishing scams, regularly updating software, and avoiding sharing sensitive information on unsecured websites.',
    },
    {
      title: 'What should I do if I suspect a cyber attack?',
      content: 'If you suspect a cyber attack, disconnect from the internet, scan your system with up-to-date antivirus software, change your passwords, and report the incident to your IT department or a cybersecurity professional. It is also advisable to notify relevant authorities if sensitive information is compromised.',
    },
  ];

  return (
    <div className="my-16 px-4 sm:px-6 lg:px-8">
      <p className="text-md font-bold text-orange-600 text-center pb-5">FAQs</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        A Dedication to Supporting All Aspects of Your Life.
      </h1>
      <div className="max-w-4xl mx-auto mt-10">
        {items.map((item, index) => (
          <FaqItem key={index} title={item.title} content={item.content} initiallyOpen={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
