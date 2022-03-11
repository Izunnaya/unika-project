import React from "react";
import styled from "styled-components";
import imageSlider from "./images/slider-bg.jpg";

function Section() {
  return (
    <Wrap>
      <HeroInfo>
        <h2>I'm unika</h2>
        <p>One page responsive theme</p>
        <a href="#">view more!</a>
      </HeroInfo>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  background-image: url(${imageSlider});
  background-position: center;
`;
const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 500;

  h2 {
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-bottom: var(--Mg-b-sm);
  }
  p {
    text-transform: capitalize;
    word-spacing: var(--Word-spacing-sm);
    letter-spacing: var(--Letter-spacing-sm);
  }
  a {
    color: white;
    border: 2px solid white;
    padding: 10px;
    font-size: 0.95rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    word-spacing: 1px;
    margin-top: 50px;
    transform: translateZ(0);
    overflow: hidden;
      transition: 1s;
     
     

    &:hover {
      background-color: #f1f1f1;
      transition-property: color;
      transform-origin: bottom;
      color: black;
    }
  }
`;

export default Section;
