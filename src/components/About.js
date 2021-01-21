import home1 from "../img/home1.png";
//Style
import { Aboutblock, Description, Image, Hide } from "../Styles";

const About = () => {
  return (
    <Aboutblock>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </Aboutblock>
  );
};

export default About;
