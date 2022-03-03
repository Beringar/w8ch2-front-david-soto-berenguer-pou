import styled from "styled-components";
import Tuit from "./Tuit";

const StyledList = styled.div`
  ul {
    flex-direction: column;
    background-color: #fafafa91;
    border-radius: 33px;
    padding: 30px;
    margin: 60px;
    width: 600px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

const TuitList = ({ tuits }) => {
  return (
    <>
      <StyledList>
        <ul>
          {tuits.reverse().map((tuit) => (
            <>
              <Tuit tuit={tuit} />
            </>
          ))}
        </ul>
      </StyledList>
    </>
  );
};

export default TuitList;
