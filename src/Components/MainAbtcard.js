import { React } from "react";
import styled from "styled-components";

const MainAbtcard = ({ aboutUsInfo }) => {
  // const aboutUsInfo = props.aboutUsInfo;
  return (
    <MainAbtCardsStyle>
      <MainAbtcards>
        {aboutUsInfo.map((eachInfo) => {
          return (
            <>
              <i className="fa-solid fa-diamond"></i>;
              <div className="CardMessage" key={eachInfo.id}>
                <h2>{eachInfo.title}</h2>
                <p>{eachInfo.paragraph}</p>
              </div>
            </>
          );
        })}
      </MainAbtcards>
    </MainAbtCardsStyle>
  );
};
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
  width: 100%;
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
