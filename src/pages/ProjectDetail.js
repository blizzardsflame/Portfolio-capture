import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//Components
import ScrollTop from "../components/ScrollTop";
//Style && Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Data
import { ProjectState } from "../projectState";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="project" />
          </HeadLine>
          <Awards>
            {project.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
      <ScrollTop />
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50%) (-10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const AwardBlock = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardBlock>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardBlock>
  );
};

export default ProjectDetail;
