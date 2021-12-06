import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { Button } from "../../components/kim/Button";
import { Input, Footer } from "../../components/kim/Input";
import { Form } from "../../components/kim/Form";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";

const LoginPage = ({ history }) => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputs;

    const handleInputs = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleClick = () => {
        if (email === "" || password === "") {
            window.alert("이메일과 비밀번호를 입력하세요");
            return;
        }

        axios
            .post("/api/users/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                // response
                alert(`로그인 성공 ${res.data.U_NAME}`);
                if (res.data.admin) {
                    console.log('접근')
                    setIsLogin({
                        id: res.data.U_ID,
                        email: res.data.U_EMAIL,
                        name: res.data.U_NAME,
                        phone: res.data.U_PH_NUM,
                        birth: res.data.U_BIRTH,
                        admin: res.data.admin
                    });
                } else {
                    console.log("else")
                    setIsLogin({
                        id: res.data.U_ID,
                        email: res.data.U_EMAIL,
                        name: res.data.U_NAME,
                        phone: res.data.U_PH_NUM,
                        birth: res.data.U_BIRTH,
                        admin: false,
                    });
                }
                history.push("/");
            })
            .catch((err) => {
                // error
                alert("아이디 또는 비밀번호를 확인해주세요.");
            });
    };
    return (
        <Form style={{border: '1px solid black', height: '300px'}}>
            <h1> Login 로그인 </h1>
            <Input
                onChange={handleInputs}
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요 "
                style={{height: '30px'}}
            ></Input>
            <Input
                onChange={handleInputs}
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                style={{height: '30px'}}
            />
            <li style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>
                <Link to="/signup" style={{textDecoration: "none", color: '#7b533f'}}>
                    sign up
                </Link>
            </li>
            <li type="button" onClick={handleClick} style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>login</li>
        </Form>
    );
};

export default LoginPage;
