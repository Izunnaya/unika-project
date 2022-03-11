import React from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";


function App() {
  return (
    <ContainerStyle>
      <Navbar />
      <Section />
      <About/>
    </ContainerStyle>
  );
}
const ContainerStyle = styled.div`
overflow: hidden;
 `
export default App;
