import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/kim/Button";
import { Input, Footer } from "../../components/kim/Input";
import { Form } from "../../components/kim/Form";

const SignUpPage = ({ history }) => {
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        birth: "",
        phone: "",
    });

    const { email, password, username, phone, birth } = inputs;

    const handleInputs = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleClick = () => {
        axios
            .post("/api/users/member", {
                //id: id,
                email: email,
                username: username,
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
                alert("fail : " + err);
            });
    };

    return (
        <Form>
            <h1> Sign Up 회원가입 </h1>
            <Input
                onChange={handleInputs}
                value={email}
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요 "
            />
            <Input
                onChange={handleInputs}
                value={password}
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={username}
                name="username"
                placeholder="이름을 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={phone}
                name="phone"
                placeholder="전화번호를 입력해주세요"
            />
            <Input
                onChange={handleInputs}
                value={birth}
                name="birth"
                placeholder="생년월일을 입력해주세요"
            />
            <Button onSubmit={handleClick}>회원가입</Button>
            {/* <Button
                onClick={() => {
                    history.push("/login");
                }}
            >
                login
            </Button> */}
            <Footer>
                <Link to="/login">로그인</Link>
            </Footer>
        </Form>
    );
};

export default SignUpPage;
