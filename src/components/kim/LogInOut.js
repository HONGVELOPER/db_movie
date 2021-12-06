import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import { useHistory } from "react-router";

const LogInOut = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const history = useHistory();

    return (
        <div>
            {/* <p style={{display: 'inline-block',fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>welcome {isLogin && `  ${isLogin.name} 님`}</p> */}
            <li
                type="button"
                onClick={() => {
                    if (!isLogin) history.push("/login");
                    else {
                        // logout!!
                        setIsLogin(false);
                        alert("로그아웃");
                    }
                }}
                style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
            >
                {isLogin ? "logout" : "login"}
            </li>

            <li
                type="button"
                onClick={() => {
                    if (!isLogin) {
                        // 회원가입
                        history.push("/signup");
                    } else {
                        history.push("/mypage");
                    }
                }}
                style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
            >
                {isLogin ? "my page" : "sign up"}
            </li>
        </div>
    );
};

export default LogInOut;
