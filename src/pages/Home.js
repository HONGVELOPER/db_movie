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
        console.log('진입')
        if (!isLogin) {
            alert("로그인이 필요합니다.")
        } else if (!qrCheck.safe) {
            alert("코로나 위험이 있습니다")
        } else {
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
            <div>
                {qrCheck.check? (
                    <>
                        <h1>Home page</h1>
                        <li
                            type="button"
                            onClick={toMovie}
                            style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
                        >
                            Reserve
                        </li>
                        <button onClick={qrFail}>
                            fail
                        </button>
                    </>
                ) : (
                    <QR />
                )}
            </div>
        </>
    );
};

export default Home;
