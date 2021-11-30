import React from "react";
import { Form } from "../../components/kim/Form";
import Button from "react-bootstrap/Button";
// import { Button } from "../../components/kim/Button";
import { Input, Footer } from "../../components/kim/Input";
import { loginState } from "../../loginState";
import { useRecoilState } from "recoil";

const MyPage = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    return (
        <Form>
            <h1> 마이페이지 </h1>
            <h4>이름 : {isLogin.name}</h4>
            <h4>이메일 : {isLogin.email} </h4>
            <h5>생년월일 : {isLogin.birth} </h5>
            <h5>핸드폰 번호 : {isLogin.phone} </h5>
            <h5>예매 내역</h5>
            <Button onClick={() => {}}>수정하기</Button>

            <Button>탈퇴하기</Button>
        </Form>
    );
};

export default MyPage;
