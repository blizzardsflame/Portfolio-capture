import home1 from "../img/home1.png";
import Wave from "../components/Wave";
//Style
import { Aboutblock, Description, Image, Hide } from "../Styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const About = () => {
  return (
    <Aboutblock>
      <Wave />
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
    </Aboutblock>
  );
};

export default About;
