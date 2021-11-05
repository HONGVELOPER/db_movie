import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SalaryItem from "../../components/choi/SalaryItem";

const dummyData = [
  { name: "홍영진", workingHours: 120 },
  { name: "최수민", workingHours: 240 },
];

const SalaryPage = () => {
  // const today = new Date().toLocaleDateString();

  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  // ! 최저시급 api 로 가져오게 할 예정. https://www.data.go.kr/data/15068774/fileData.do#/API%20%EB%AA%A9%EB%A1%9D/GETuddi%3Ad1e3f9de-a67c-498c-b010-b1c85ae2301e
  // const minWage = fetch();
  const minWage = 10000;

  return (
    <div className="App">
      <h2>{year}년</h2>
      <h1>{month}월 급여명세표</h1>
      {dummyData.map((Element) => (
        <SalaryItem name={Element.name} workingHours={Element.workingHours} />
      ))}

      <SalaryItem name="김한나" workingHours={80} minWage={minWage} />
      <SalaryItem />
      <SalaryItem name="임창준" workingHours={75} minWage={minWage} />
      <SalaryItem name="이병권" workingHours={27} minWage={minWage} />

      {/* <h1>월급 계산</h1> */}
    </div>
  );
};

export default SalaryPage;
