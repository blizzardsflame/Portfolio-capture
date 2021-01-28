import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = ({ isOpen, toggle }) => {
  const { pathname } = useLocation();
  return (
    <SideBarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <li>
            <SideBarLink to="/" onClick={toggle}>
              About Me
            </SideBarLink>
            <SideLine
              style={{ left: "39%" }}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "23%" : "0%" }}
            />
          </li>
          <li>
            <SideBarLink to="/work" onClick={toggle}>
              Portfolio
            </SideBarLink>
            <SideLine
              style={{ left: "40%" }}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "20%" : "0%" }}
            />
          </li>
          <li>
            <SideBarLink to="/contact" onClick={toggle}>
              Contact
            </SideBarLink>
            <SideLine
              style={{ left: "41%" }}
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "18%" : "0%" }}
            />
          </li>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const SideBarWrapper = styled.div`
  color: #fff;
`;
const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: #fff;
`;
const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 8rem);

  li {
    position: relative;
  }

  @media screen and (max-width: 480px) {
    grid-template: repeat(3, 5rem);
  }
`;

const SideLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  margin-top: 0.5rem;
`;

export default SideBar;
