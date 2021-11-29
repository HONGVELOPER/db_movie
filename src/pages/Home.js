import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LogInOut from "../components/kim/LogInOut";
import { useRecoilState } from "recoil";
import { loginState } from "../loginState";
import { useHistory } from "react-router";
 
const Home = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const history = useHistory();

    const toMovie = () => {
        if (!isLogin) {
            alert("로그인이 필요합니다.")
        } else {
            history.push({
                pathname: '/movie',
                state: {
                    email: isLogin.email
                }
            })
        }
    }

    return (
        <>
            <h1>Home page</h1>
            <Button type="button" onClick={toMovie}>
                {/* <Link to="/movie">
                </Link> */}
                예매
            </Button>
            <LogInOut />
        </>
    );
};

export default Home;
