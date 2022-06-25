import { React, useState } from "react";
import styled from "styled-components";
import imageDivider from "./images/devider.png";
import MainAbtcard from "./MainAbtcard";
import { data } from "../../src/AboutUsData";

function About() {
  const [aboutUsData, setAboutUsData] = useState(data);
  return (
    <AboutStyled>
      <AboutHeader>
        <h2>About</h2>
        <img src={imageDivider} alt="divider" />
        <p>little information</p>
      </AboutHeader>
      <AboutInfo>
        <MainAbtcard aboutUsInfo={aboutUsData} />
      </AboutInfo>
    </AboutStyled>
  );
}
const AboutStyled = styled.div`
  margin: 50px 100px;

  h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  img,
  p {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;

const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
`;

const AboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
