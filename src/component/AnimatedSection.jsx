import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const animationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }) => {
  // disable animations on small screens to avoid jank
  const [enableAnim, setEnableAnim] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setEnableAnim(window.innerWidth >= 640); // enable only on >= sm
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  // if animations disabled, always render visible (no motion)
  if (!enableAnim) {
    return <div className="bg-gradient-to-r from-[#2c1b10] via-black to-[#1a120b]">{children}</div>;
  }

  return (
    <div className="bg-gradient-to-r from-[#2c1b10] via-black to-[#1a120b]">
      <motion.div
        ref={ref}
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
