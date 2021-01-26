import styled from "styled-components";
import { Aboutblock } from "../Styles";
import { AnimateSharedLayout } from "framer-motion";
import Toggle from "./Toggle";
import { scrollAnim } from "../animation";
import { useScroll } from "./Scroll";

const Faq = () => {
  const [element, controls] = useScroll();
  return (
    <FaqBlock
      variants={scrollAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, ipsam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, ipsam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, ipsam.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, ipsam.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqBlock>
  );
};

const FaqBlock = styled(Aboutblock)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
