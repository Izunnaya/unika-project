import styled from "styled-components";
import React from "react";

function Navbar() {
  return (
    <NavbarStyled>
      <NavbarContent>
        <Logo>Logo</Logo>

        <NavRight>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Works</a>
          <a href="">Team</a>
          <a href="">Prices</a>
          <a href="">Contact</a>
        </NavRight>
      </NavbarContent>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 80px;
  width: 100%;
  background-color: var(--Navbar-bg-color);
  
`;
const NavbarContent = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 20px;
  width: 100%;
  font-weight:700;

`;
const NavRight = styled.div`
  text-decoration: none;
  text-transform: uppercase;

  a {
    color: #f1f1f1;
    padding: 10px;
    opacity: .5;

   
    &:hover {
      opacity: 5;
      color: #f1f1f1;
      transition: .3s;
    }
  }
`;

const Logo = styled.div``;
export default Navbar;
