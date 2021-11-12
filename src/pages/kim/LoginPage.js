import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 40px;
    margin: 10px 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #fff;

    justify-content: center;
`;
const Button = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 50%;
    height: 49px;
    margin: 16px 0 7px;

    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #03c75a;
    ${({ disabled }) =>
        disabled &&
        `
    `}
`;

const LoginForm = styled.div`
    width: 512px;
    height: 768px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    h1 {
        margin-bottom: 500;
        font-size: 36px;
        color: #343a40;
    }
`;

const LoginPage = () => {
    return (
        <LoginForm>
            <h1> Login Page </h1>
            <Input
                id="id"
                name="id"
                placeholder="아이디를 입력해주세요 "
            ></Input>
            <Input
                id="password"
                name="password"
                type="passowrd"
                placeholder="비밀번호를 입력해주세요"
            />
            <Button onClick={() => alert("login!")}>login</Button>
            <Button onClick={() => alert("sign up!")}>Sign up</Button>
        </LoginForm>
    );
};

export default LoginPage;
