import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import { useHistory } from "react-router";
import React, { useState } from "react";

import SignUpPage from "../../pages/kim/SignUpPage";

const LogInOut = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const history = useHistory();
    const [signUpModalOn, setSignUpModal] = useState(false);

    return (
        <div>
            {/* <SignUpPage 
                show={signUpModalOn}
                onHide={() => setSignUpModal(false)}
            /> */}
            <p>환영합니다 {isLogin && `  ${isLogin.name} 님` }</p>
            <Button
                type="button"
                // class="btn btn-outline-dark"
                onClick={() => {
                    // setSignUpModal(true)
                    if (!isLogin) history.push("/login");
                    else {
                        // logout!!
                        setIsLogin(false);
                        alert("로그아웃");
                    }
                }}
            >
                {isLogin ? "로그아웃" : "로그인"}
            </Button>

            <Button
                type="button"
                onClick={() => {
                    if (!isLogin) {
                        // 회원가입
                        history.push("/signup");
                    } else {
                        history.push("/mypage");
                    }
                }}
            >
                {isLogin ? "마이페이지" : "회원가입"}
            </Button>
        </div>
    );
};

export default LogInOut;
