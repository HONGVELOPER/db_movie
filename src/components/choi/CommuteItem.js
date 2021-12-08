import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { style } from "@mui/system";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: green;
  border: 2px solid white;
`;

const LeftBox = styled.div`
  flex: 1;
  background: ${(props) => (props.name === "-" ? "grey" : "grey")};
`;

const MiddleBox = styled.div`
  flex: 2;
  background: skyblue;
`;

const RightBox = styled.div`
  flex: 2;
  background: lightblue;
`;

const StyledButton = styled.button`
  /* background: green; */
  margin-bottom: 20px;
  padding: 10px;
`;

const CommuteItem = ({ name, position }) => {
  const [punchIn, setPunchIn] = useState("-");
  const [msPunchIn, setMsPunchIn] = useState("-");
  const [punchOut, setPunchOut] = useState("-");

  useEffect(() => {}, [punchIn, punchOut]);

  const sendPunchIn = (name, dateTime) => {
    console.log("sendPunchIn:", name, dateTime);

    axios
      .post("/api/commute/In", {
        userName: name,
        inTime: dateTime,
      })
      .catch((err) => {
        // error
        console.log("sendPunchIn ERR:", err);
      });
  };

  const sendPunchOut = (name, dateTime, punchIn) => {
    console.log("sendPunchOut:", name, dateTime);

    axios
      .post("/api/commute/Out", {
        userName: name,
        outTime: dateTime,
        pairInTime: punchIn,
      })
      .catch((err) => {
        // error
        console.log("sendPunchOut ERR:", err);
      });
  };

  if (name === undefined) {
    name = "-";
  }

  if (position === undefined) {
    position = "-";
  }

  const recordCurrentTime = (type) => {
    const currentTime = new Date();
    const ms = Date.now();
    // console.log(currentTime.toTimeString());
    // console.log(typeof currentTime.toTimeString());

    switch (type) {
      case "In":
        setPunchIn(currentTime.toLocaleTimeString());
        setMsPunchIn(ms);

        if (punchOut !== "-") {
          alert(
            "기존 출퇴근 시간이 저장되었습니다. 새로운 출퇴근 기록이 시작됩니다"
          );
          setPunchOut("-");
        } else {
          sendPunchIn(name, ms.toString());
        }
        break;

      case "Out":
        if (punchIn === "-") {
          alert("출근 시각을 먼저 기입해주세요");
        } else {
          setPunchOut(currentTime.toLocaleTimeString());
          sendPunchOut(name, ms.toString(), msPunchIn);
        }
        break;

      default:
        console.log("THERE IS NO TYPE");
        break;
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
        <StyledButton
          onClick={() => {
            recordCurrentTime("In");
          }}
        >
          출근
        </StyledButton>
      </MiddleBox>

      <RightBox>
        <h2>퇴근시각</h2>
        <h3>{punchOut}</h3>
        <StyledButton
          onClick={() => {
            recordCurrentTime("Out");
          }}
        >
          퇴근
        </StyledButton>
      </RightBox>
    </Container>
  );
};

export default CommuteItem;
