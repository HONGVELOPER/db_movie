import React from "react";
import { Form } from "../../components/kim/Form";
import { Button } from "../../components/kim/Button";
import { Input, Footer } from "../../components/kim/Input";
import { loginState } from "../../loginState";
import { useRecoilState } from "recoil";

const MyPage = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    return (
        <Form>
            <h1> 마이페이지 </h1>
            <h3>이름 : {`${isLogin.name}`}</h3>
            <h3>이메일 :{isLogin.email} </h3>
            <h3>예매 내역</h3>
            <Button>수정하기</Button>
            <Button>탈퇴하기</Button>
        </Form>
    );
};

export default MyPage;
