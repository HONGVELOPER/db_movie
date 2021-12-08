import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommuteItem from "../../components/choi/CommuteItem";
const workerData = [
  { name: "홍영진", position: "BOX" },
  { name: "최수민", position: "USHER" },
  { name: "김한나", position: "CON" },
  { name: "이병권", position: "USHER" },
  { name: "임창준", position: "BOX" },
];

const CommutePage = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
      <h1>{today}</h1>
      {/* <CommuteItem name="홍영진" position="BOX" />
      <CommuteItem />
      <CommuteItem name="최수민" position="USHER" /> */}

      {workerData.map((obj) => (
        <CommuteItem name={obj.name} position={obj.position} />
      ))}

      {/* <h1>월급 계산</h1> */}
    </div>
  );
};

export default CommutePage;
