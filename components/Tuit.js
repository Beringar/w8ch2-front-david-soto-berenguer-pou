import styled from "styled-components";
import minutesAgo from "../utils/minutesAgo";

const StyledTuit = styled.div`
  background-color: white;
  border-radius: 33px;
  list-style: none;
  margin: 0;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 1.95px 1.95px 2.6px;

  :hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.85) 1.95px 1.95px 2.6px;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
  }

  .like {
    width: 100px;
    height: 15px;
    border: none;
    outline: none;
    color: #000;
    background: #00000040;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    text-align: center;
  }

  .like:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .like:active {
    color: #000;
  }

  .like:active:after {
    background: transparent;
  }

  .like:hover:before {
    opacity: 1;
  }

  .like:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1110;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const Tuit = ({ tuit }) => {
  return (
    <>
      <StyledTuit>
        <li key={tuit._id}>
          <p>{tuit.text}</p>
          <div className="info">
            <p className="like">{`Likes ${tuit.likes}`}</p>
            <p>{`${minutesAgo(tuit.date)} ago`}</p>
          </div>
        </li>
      </StyledTuit>
    </>
  );
};
export default Tuit;
