import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import { useHistory } from "react-router";


const LogInOut = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const history = useHistory();

  const toMovie = () => {
    if (!isLogin) {
        alert("로그인이 필요합니다.")
    }else {
        history.push({
            pathname: '/movie',
            state: {
                email: isLogin.email
            }
        })
    }
}

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
