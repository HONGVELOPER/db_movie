import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";

const LogInOut = ({ history }) => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    return (
        <div>
            <h3>환영합니다 {`${isLogin.name}`} 님</h3>
            <Button
                type="button"
                class="btn btn-outline-dark"
                onClick={() => {
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

            {isLogin && (
                <Button type="button" class="btn btn-outline-dark">
                    <Link to="/mypage" />
                    마이페이지
                </Button>
            )}
        </div>
    );
};

export default LogInOut;
