import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { Button } from "../../components/kim/Button";
import { Input, Footer } from "../../components/kim/Input";
import { Form } from "../../components/kim/Form";

const SignUpPage = ({ history }) => {
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        birth: "",
        phone: "",
    });

    const { email, password, confirmPassword, username, phone, birth } = inputs;

    const handleInputs = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const doesPasswordMatch = () => {
        // console.log("doesPasswordMatch");
        return password === confirmPassword;
    };

    const confirmPasswordClassName = () => {
        // console.log("confirmPasswordClassName");
        if (confirmPassword) {
            return doesPasswordMatch() ? "is-valid" : "is-invalid";
        }
    };

    const renderFeedbackMessage = () => {
        if (confirmPassword) {
            if (!doesPasswordMatch()) {
                return (
                    <div className="invalid-feedback">
                        패스워드가 일치하지 않습니다
                    </div>
                );
            }
        }
    };

    const handleClick = () => {
        if (doesPasswordMatch()) {
            axios
                .post("/api/users/register", {
                    //id: id,
                    email: email,
                    username: username,
                    password: password,
                    birth: birth,
                    phone: phone,
                })
                .then(function (res) {
                    // response
                    alert("회원가입 완료되었습니다");
                })
                .catch(function (error) {
                    // error
                    alert(error.response.data.message);
                });
        }
    };

    return (
        <div className="container">
            <Form>
                <h1> Sign Up 회원가입 </h1>
                <div class="form-row">
                    <div className="col-md-12 mb-3">
                        <label className="col-md-4">이메일</label>
                        <Input
                            onChange={handleInputs}
                            value={email}
                            id="email"
                            name="email"
                            placeholder="이메일을 입력하세요"
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="col-md-4" htmlFor="passwordInput">
                            패스워드
                        </label>
                        <Input
                            onChange={handleInputs}
                            value={password}
                            type="password"
                            id="passwordInput"
                            className="form-control"
                            aria-describedby="passwordHelpInline"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                        />
                        <small
                            id="passwordHelpInline"
                            class="form-text text-muted"
                        >
                            Must be 8-20 characters long.
                        </small>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label
                            htmlFor="confirmPasswordInput"
                            class="col-sm-2 control-label"
                            className="col-md-4"
                        >
                            패스워드 확인
                        </label>
                        <Input
                            onChange={handleInputs}
                            value={confirmPassword}
                            type="password"
                            className={`form-control ${confirmPasswordClassName()}`}
                            id="confirmPasswordInput"
                            name="confirmPassword"
                            placeholder="비밀번호를 재입력하세요"
                        />
                        {renderFeedbackMessage()}
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="col-md-4">이름</label>
                        <Input
                            onChange={handleInputs}
                            value={username}
                            name="username"
                            placeholder="이름을 입력하세요"
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="col-md-4">전화번호</label>
                        <Input
                            onChange={handleInputs}
                            value={phone}
                            name="phone"
                            placeholder="전화번호를 입력하세요"
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label className="col-md-4">생년월일</label>
                        <Input
                            onChange={handleInputs}
                            value={birth}
                            name="birth"
                            placeholder="생년월일을 입력하세요"
                        />
                    </div>
                </div>
                <Button onClick={handleClick}>회원가입</Button>
                <Footer>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        로그인
                    </Link>
                </Footer>
            </Form>
        </div>
    );
};

export default SignUpPage;
