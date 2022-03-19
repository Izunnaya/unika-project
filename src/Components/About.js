import React from "react";
import styled from "styled-components";
import imageDivider from "./images/devider.png";
import MainAbtcard from "./MainAbtcard";
const AboutData = [
  {
    title: "Who we are",

    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae fugit facilis",

    exp1: "First",
  },
  {
    title: "What we do",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae fugit facilis",

    exp1: "second",
  },
  {
    title: "Why we it ",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae fugit facilis",

    exp1: "third",
  },
  {
    title: "What we do",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae fugit facilis",

    exp1: "fouth",
  },
];

function About(props) {
  return (
    <AboutStyled>
      <AboutHeader>
        <h2>About</h2>
        <img src={imageDivider} alt="divider" />
        <p>little information</p>
      </AboutHeader>
      <AboutInfo>
        <MainAbtcard
          title={AboutData[0].title}
          paragraph={AboutData[0].paragraph}
        />
        <MainAbtcard
          title={AboutData[1].title}
          paragraph={AboutData[1].paragraph}
        />
        <MainAbtcard
          title={AboutData[2].title}
          paragraph={AboutData[2].paragraph}
        />
        <MainAbtcard
          title={AboutData[3].title}
          paragraph={AboutData[3].paragraph}
        />
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
