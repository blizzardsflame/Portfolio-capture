import ScrollTop from "../components/ScrollTop";
//Animation && Style
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
import { Hide } from "../Styles";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>
            Get <span>In Touch</span>
          </motion.h2>
        </Hide>
      </Title>
      <contactForm>
        <form
          style={{
            width: "400px",
            border: "0.5px solid #23d997",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            marginTop: "5px",
          }}
        >
          <Hide>
            <Social variants={titleAnimation}>
              <input type="text" className="form-control" placeholder="Name" />
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <textarea
                className="form-control"
                placeholder="Message"
                rows="6"
              ></textarea>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <button className="form-control">Send</button>
            </Social>
          </Hide>
        </form>
      </contactForm>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  align-items: center;
  color: black;
  h2 {
    font-weight: bold;
    font-size: 6rem;
  }
`;

const contactForm = styled(motion.div)`
  align-items: center;
`;

const Social = styled(motion.div)`
  margin: 3px;
  padding: 5px;
  input,
  textArea {
    width: 100%;
    display: block;
    border: 1px solid #ccc;
    background: #f5f5f5;
    padding: 8px;
    border-radius: 3px;
  }
  button {
    width: 100%;
    display: block;
    color: black;
    background-color: #23d997;
  }
`;

export default ContactUs;
