import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gradient-to-r from-[#2c1b10] via-black to-[#1a120b]">
      <motion.div
        ref={ref}
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
