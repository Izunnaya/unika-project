import { React } from "react";
import styled from "styled-components";

const MainAbtcard = ({ aboutUsInfo, handleDelete }) => {
  return (
    <MainAbtCardsStyle>
      <MainAbtcards>
        {aboutUsInfo.map((eachInfo) => {
          return (
            <>
              <i className="fa-solid fa-diamond"></i>
              <CardMessage key={eachInfo.id}>
                <h2>{eachInfo.title}</h2>
                <p>{eachInfo.paragraph}</p>
                <button
                  className="single-button"
                  onClick={() => {
                    handleDelete(eachInfo.id);
                  }}
                >
                  Click to remove This block
                </button>
                <button className="all-btn">Remove All blocks</button>
              </CardMessage>
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
`;
const MainAbtcards = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  opacity: 0.7;
`;

const CardMessage = styled.div`
  margin-left: 10px;
  width: 100%;
  margin-left: 20px;

  p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  h2 {
  }
  h2 {
    margin-bottom: 7px;
  }
  &:hover {
    opacity: 0.9;
  }

  .single-button {
    border: none;
    margin-bottom: 1.1rem;
    padding: 6px 10px;
    border-radius: 7px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default MainAbtcard;
