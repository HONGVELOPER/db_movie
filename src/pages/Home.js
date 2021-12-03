import React from "react";
import Button from "react-bootstrap/Button";
import LogInOut from "../components/kim/LogInOut";
import { useRecoilState } from "recoil";
import { loginState, qrState } from "../loginState";
import { useHistory } from "react-router";
import QR from '../components/lee/check'
 
const Home = (props) => {
    console.log(props.location.state)
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const [qrCheck, setQrCheck] = useRecoilState(qrState);
    const history = useHistory();

    const toMovie = () => {
        if (isLogin) {
            alert("로그인이 필요합니다.")
        } else if (!props.location.state.safe) {
            alert("you are not safe")
        } else {
            console.log(qrCheck);
            history.push({
                pathname: '/movie',
                state: {
                    email: isLogin.email
                }
            })
        }
    }

    const qrFail = () => {
        setQrCheck(false)
        console.log(qrCheck)
    }

    return (
        <>
        <Button type="button" onClick={qrFail}>
                        예매
                    </Button>
            {qrCheck ? (
                <>
                    {/* <Button type="button" onClick={toMovie}>
                        예매
                    </Button> */}
                    {/* <button onClick={qrFail}>
                        예매전 QRCode
                    </button> */}
                </>
            ) : (
                <QR />
            )}
        </>
    );
};

export default Home;
