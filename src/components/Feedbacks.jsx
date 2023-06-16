import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[320px] sm:w-[250px] flex items-center justify-center"
  >
    <a href={source_code_link} target="_blank" rel="noopener noreferrer">
      <img
        src={image}
        alt="feedback"
        className="w-10 h-10"
      />
    </a>
  </motion.div>
);

const Footer = () => {
  return (
    <div className="mt-17 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Social Media</p>
          <h2 className={styles.sectionHeadText}>Get in touch.</h2>
        </motion.div>
        <div className="mt-10 pb-14 flex  justify-center gap-6 sm:gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} index={index} {...testimonial} />
          ))}
        </div>
        <div className="pt-4 text-center">
          <p className="text-500">© Muhammed Hasan 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
