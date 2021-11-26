import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SalaryItem = ({ name, position, workingHours, minWage }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: green;
    border: 2px solid white;
  `;

  const LeftBox = styled.div`
    flex: 1;
    background: ${(props) => (props.name === "이름이없엉" ? "red" : "green")};
  `;

  const MiddleBox = styled.div`
    flex: 2;
    background: skyblue;
  `;

  const RightBox = styled.div`
    flex: 2;
    background: lightblue;
    border: 2px solid black;
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

  if (workingHours === undefined) {
    workingHours = -1;
  }

  return (
    <Container>
      <LeftBox name={name}>
        <h1>{name}</h1>
        <button
          onClick={() => {
            alert("준비중");
          }}
        >
          출퇴근기록 확인하기
        </button>
      </LeftBox>

      <MiddleBox>
        <h2>월 근로시간</h2>
        <h3>{workingHours} 시간</h3>
      </MiddleBox>

      <RightBox>
        <h2>월 급여</h2>
        <h3>{(workingHours * minWage).toLocaleString("ko-KR")} 원</h3>
      </RightBox>
    </Container>
  );
};
export default SalaryItem;
