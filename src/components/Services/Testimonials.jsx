import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Johndoe from "../../assets/john_doe.jpg";
import janeSmith from "../../assets/Jane_smith.jpg";
import samWilson from "../../assets/sam wilson.jpg";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    photo: Johndoe,
    rating: 5,
    testimonial: "Our team of dedicated cybersecurity professionals excels at safeguarding digital landscapes. With expertise in threat detection, risk management, and compliance, they are committed to protecting your valuable data. Their proactive approach and innovative solutions ensure robust security measures, giving you peace of mind in an ever-evolving cyber environment. Trust our skilled team for your security needs.",
  },
  {
    name: "Jane Smith",
    title: "CTO of Tech Corp",
    photo: janeSmith,
    rating: 4,
    testimonial: "At our cybersecurity company, our employees are our greatest asset. Their expertise and dedication ensure the highest level of protection for our clients' data. Our team, comprised of industry-leading professionals, continuously innovates to stay ahead of evolving threats. We take pride in fostering a supportive work environment that encourages growth, collaboration, and excellence in every project.",
  },
  {
    name: "Sam Wilson",
    title: "Head of IT",
    photo: samWilson,
    rating: 5,
    testimonial: "Discover how our dedicated team has empowered clients with top-notch cyber security solutions. Hear firsthand from our employees about their experiences in fostering a safer digital environment, their commitment to innovation, and the exceptional service they provide. Our testimonials highlight their expertise, passion, and the positive impact they've made on our clients' security.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="bg-white p-8 py-8 rounded-lg shadow-md flex flex-col items-center"
                variants={item}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.188h4.396c.969 0 1.371 1.24.588 1.81l-3.56 2.588 1.357 4.188c.3.921-.755 1.688-1.541 1.18l-3.56-2.588-3.56 2.588c-.786.508-1.842-.259-1.541-1.18l1.357-4.188-3.56-2.588c-.783-.57-.38-1.81.588-1.81h4.396l1.357-4.188z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-gray-700 text-start">{testimonial.testimonial}</p>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
