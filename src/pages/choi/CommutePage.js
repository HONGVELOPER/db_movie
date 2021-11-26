import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommuteItem from "../../components/choi/CommuteItem";

const CommutePage = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
      <h1>{today}</h1>
      <CommuteItem name="홍영진" position="BOX" />
      <CommuteItem />
      <CommuteItem name="최수민" position="USHER" />

      {/* <h1>월급 계산</h1> */}
    </div>
  );
};

export default CommutePage;
