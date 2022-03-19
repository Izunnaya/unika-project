import React from "react";
import styled from "styled-components";
import imageDivider from "./images/devider.png";

function About() {
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae",

      exp1: "second",
    },
    {
      title: "Why we it ",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil commodi,",

      exp1: "third",
    },
    {
      title: "What we do",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit nesciunt laboriosam. Deserunt a molestias nihil",

      exp1: "fouth",
    },
  ];

  return (
    <AboutStyled>
      <h2>About</h2>
      <img src={imageDivider} alt="divider" />
      <p>little information</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit
        nesciunt laboriosam. Deserunt a molestias nihil commodi, molestiae fugit
        facilis.
      </p>
    </AboutStyled>
  );
}
const AboutStyled = styled.div`
  margin: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default About;
