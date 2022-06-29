import { React, useState } from "react";
import styled from "styled-components";
import imageDivider from "./images/devider.png";
import MainAbtcard from "./MainAbtcard";
import { data } from "../../src/AboutUsData";

function About() {
  const [aboutUsData, setAboutUsData] = useState(data);

  //Click even for deleting all blogs
  const deleteAllHandler = () => {
    setAboutUsData([]);
  };

  // click Event for deleting single items
  const handleDelete = (id) => {
    const newData = aboutUsData.filter((eachInfo) => eachInfo.id !== id);
    setAboutUsData(newData);
  };
  return (
    <AboutStyled>
      <AboutHeader>
        <h2>About</h2>
        <img src={imageDivider} alt="divider" />
        <p>little information</p>
      </AboutHeader>
      <AboutInfo>
        <MainAbtcard
          aboutUsInfo={aboutUsData}
          handleDelete={handleDelete}
          deleteAllHandler={deleteAllHandler}
        />
      </AboutInfo>
    </AboutStyled>
  );
}
const AboutStyled = styled.div`
  margin: 50px;

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
  width: 100%;
`;

export default About;

//===========================  PROCEDURE ==================================

// This is the click event that handles the removal of one single about us Item - Here's how it works below

// 1. First i created the onclick event named "handleDelete" on the button that the click event is going to happen on. I did this on the button with the class of "single-button" in the MainAbtcard.js component

// 2. Then I went on to the About.js component to create the Actual function for "handleDelete". I did this because that's where the data lives and also i'd be updating the state at every click and "setState" cannot be passed as a prop into the "MainAbtcard" component.

// 3. I created the "handleDelete function". It takes an "id param" and inside the function i used the ".filter array  method" to loop through the "aboutUsData". So on every single item in "aboutUsData" when the button is clicked, that's meant to take the id of that item out of the rest of the items. The remaining items should be shifted into the new variable called "newData". Now when that happens, the state should be updated by using the "setAboutUsData" and passing the "newData" as argument. So in a nutshell what happens here is once the button is clicked it takes away that unique id away from the array and re-renders what's remaining. And this is achieved with the help of "setAboutUsData"
