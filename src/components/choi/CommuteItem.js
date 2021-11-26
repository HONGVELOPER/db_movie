import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CommuteItem = ({ name, position }) => {
  const [punchIn, setPunchIn] = useState("-");
  const [punchOut, setPunchOut] = useState("-");

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: green;
    border: 2px solid white;
  `;

  const LeftBox = styled.div`
    flex: 1;
    background: ${(props) => (props.name === "이름이없엉" ? "red" : "grey")};
  `;

  const MiddleBox = styled.div`
    flex: 2;
    background: skyblue;
  `;

  const RightBox = styled.div`
    flex: 2;
    background: lightblue;
  `;

  // const Circle = styled.div`
  //   width: 5rem;
  //   height: 5rem;
  //   background: black;
  //   border-radius: 50%;
  // `;

  // name === null ? "김사원" : name;
  if (name === undefined) {
    name = "이름이없엉";
  }

  if (position === undefined) {
    position = "직급이없엉";
  }

  const recordCurrentTime = (type) => {
    const currentTime = new Date();
    console.log(currentTime.toTimeString());
    console.log(typeof currentTime.toTimeString());

    if (type === "In") {
      setPunchIn(currentTime.toLocaleTimeString());

      if (punchOut !== "-") {
        setPunchOut("-");
      }
    }

    if (type === "Out") {
      if (punchIn === "-") {
        alert("출근 시각을 먼저 기입해주세요");
      } else {
        setPunchOut(currentTime.toLocaleTimeString());
      }
    }
  };

  return (
    <Container>
      <LeftBox name={name}>
        <h1>{name}</h1>
        <h2>{position}</h2>
      </LeftBox>

      <MiddleBox>
        <h2>출근시각</h2>
        <h3>{punchIn}</h3>
        <button
          onClick={() => {
            recordCurrentTime("In");
          }}
        >
          출근
        </button>
      </MiddleBox>

      <RightBox>
        <h2>퇴근시각</h2>
        <h3>{punchOut}</h3>
        <button
          onClick={() => {
            recordCurrentTime("Out");
          }}
        >
          퇴근
        </button>
      </RightBox>
    </Container>
  );
};

export default CommuteItem;
