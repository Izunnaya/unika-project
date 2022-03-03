import react from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";


function App() {
  return (
    <ContainerStyle>
      <Navbar />
      <Section />
    </ContainerStyle>
  );
}
const ContainerStyle = styled.div`

 `
export default App;
