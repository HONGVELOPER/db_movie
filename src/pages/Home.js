import React from "react";
import Button from "react-bootstrap/Button";
import LogInOut from "../components/kim/LogInOut";
import { useRecoilState } from "recoil";
import { loginState, qrState } from "../loginState";
import { useHistory } from "react-router";
import QR from '../components/lee/check'
 
const Home = (props) => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const [qrCheck, setQrCheck] = useRecoilState(qrState);
    console.log(qrCheck, 'QR STATE')
    const history = useHistory();

    const toMovie = () => {
        if (isLogin) {
            alert("로그인이 필요합니다.")
        } else if (!qrCheck.safe) {
            alert("코로나 위험이 있습니다")
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
        console.log('진입')
        setQrCheck({
            check: false,
            safe: false,
        })
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
