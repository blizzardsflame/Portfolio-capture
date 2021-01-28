import styled from "styled-components";
import { motion } from "framer-motion";

//Styled components
export const Aboutblock = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1100px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 5rem;
  h2 {
    font-weight: 5rem;
  }
  z-index: 2;
  @media (max-width: 1100px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
