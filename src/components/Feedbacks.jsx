import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <div className="flex justify-center p-5 xs:w-[60px] w-full">
      <div onClick={() => window.open(source_code_link)} className="cursor-pointer">
        <img
          src={image}
          alt="source code"
          className="object-contain w-16 h-16"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[50px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Find me on</p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center xs:gap-6 sm:gap-8 md:gap-4 lg:gap-2 xl:gap-0`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <div className="text-center -mt-10 pb-10">
        <p>© Muhammed Hasan 2023.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
