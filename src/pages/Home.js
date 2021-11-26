import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { loginState } from "../loginState";
import { useRecoilState } from "recoil";

const Home = ({ history }) => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    return (
        <>
            <h1>Home page</h1>
            <h3>환영합니다 {`${isLogin.name}`} 님</h3>
            <Button variant="contained">
                <Link to="/movie">예매</Link>
            </Button>
            <Button
                onClick={() => {
                    if (!isLogin) history.push("/login");
                    else {
                        // logout!!
                        setIsLogin(false);
                        alert("로그아웃");
                    }
                }}
                variant="contained"
            >
                {isLogin ? "로그아웃" : "로그인"}
            </Button>
            {isLogin && (
                <Button variant="contained">
                    <Link to="/mypage">마이페이지</Link>
                </Button>
            )}
        </>
    );
};

export default Home;
