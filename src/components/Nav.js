import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Nav = ({ toggle }) => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link id="logo" to="/">
        Capture
      </Link>

      <Bars onClick={toggle} />
      <UlStyled>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "45%" : "0%" }}
          />
        </li>
      </UlStyled>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;
const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding-left: 10rem;
    position: relative;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 1.2rem;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -70%;
  left: 60%;
`;

export default Nav;
