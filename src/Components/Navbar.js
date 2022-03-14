import styled from "styled-components";
import React from "react";

function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContent>
        <Logo>Logo</Logo>

        <NavRight>
          <a href="https://www.google.com">Home</a>
          <a href="https://www.google.com">About</a>
          <a href="https://www.google.com">Services</a>
          <a href="https://www.google.com">Works</a>
          <a href="https://www.google.com">Team</a>
          <a href="https://www.google.com">Prices</a>
          <a href="https://www.google.com">Contact</a>
        </NavRight>
      </NavbarContent>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 70px;
  width: 100%;
  background-color: var(--Navbar-bg-color);
  position: fixed;

  
`;
const NavbarContent = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 7rem;
  width: 100%;
  font-weight:500;
  font-size: .95rem;
  word-spacing: var(--Word-spacing-sm);
  font-family: 'Roboto', sans-serif;

`;
const NavRight = styled.div`
  text-decoration: none;
  text-transform: uppercase;

  a {
    color: #f1f1f1;
    padding: 10px;
    opacity: .5;

    //Styling for the first item on the right nav-links
    &:first-of-type{
      color: #f1f1f1;
    opacity: 100;
    }
    
   //styling for the hover on the right nav-links
    &:hover {
      opacity: 5;
      color: #f1f1f1;
      transition: .3s;
    }
  }
`;

const Logo = styled.div``;
export default Navbar;
