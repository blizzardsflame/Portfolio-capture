import About from "../components/About";
import Services from "../components/Services";
import Faq from "../components/Faq";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <About />
      <Services />
      <Faq />
    </motion.div>
  );
};

export default AboutUs;
