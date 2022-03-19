import React from "react";
import styled from "styled-components";

function MainAbtcard(props) {
  return (
    <MainAbtCardsStyle>
      <MainAbtcards>
        <i className="fa-solid fa-diamond"></i>
        <div className="CardMessage">
          <h2>{props.title}</h2>
          <p>{props.paragraph}</p>
        </div>
      </MainAbtcards>
    </MainAbtCardsStyle>
  );
}
const MainAbtCardsStyle = styled.div`
  .fa-diamond {
    font-size: 50px;
  }

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
const MainAbtcards = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  opacity: 0.7;

  .CardMessage {
    margin-left: 20px;

    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    h2 {
    }
  }
`;

export default MainAbtcard;
