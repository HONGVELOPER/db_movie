import axios from "axios";
import React, { useState } from "react";
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

const SignUpForm = styled.div`
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

const SignUpPage = () => {
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        password: "",
        birth: "",
        phone: "",
    });

    const { id, name, password, birth, phone } = inputs;

    const handleInputs = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleClick = async () => {
        //alert("test");
        //const result = await axios

        axios
            .post("/api/users/test", {
                id: id,
                name: name,
                password: password,
                birth: birth,
                phone: phone,
            })
            .then(function (res) {
                // response
                alert("success!!");
            })
            .catch(function (err) {
                // error
                alert("fail!");
            });

        // if (result.status === 200 || result.status === 201) {
        //     alert("success!!");
        // } else {
        //     alert("fail");
        // }
    };

    return (
        <SignUpForm>
            <h1> Sign Up Page </h1>
            <Input
                onChange={handleInputs}
                value={id}
                id="id"
                name="id"
                placeholder="아이디를 입력해주세요 "
            />
            <Input
                onChange={handleInputs}
                value={name}
                name="name"
                placeholder="이름을 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={password}
                id="password"
                name="password"
                type="passowrd"
                placeholder="비밀번호를 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={birth}
                name="birth"
                placeholder="생년월일을 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={phone}
                name="phone"
                placeholder="전화번호를 입력해주세요"
            />
            <Button onClick={handleClick}>Sign up</Button>

            <b>id : {id}</b>
            <b>name : {name}</b>
            <b>password : {password}</b>
            <b>birth : {birth}</b>
            <b>phone : {phone}</b>
        </SignUpForm>
    );
};

export default SignUpPage;
