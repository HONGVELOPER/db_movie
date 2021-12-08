import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import { useHistory } from "react-router";

const GoCommute = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const history = useHistory();
  const isAdmin = isLogin.email === "admin" || isLogin.name === "admin";
  // console.log("isLogin", isLogin);

  return (
    <div>
      {/* <p style={{display: 'inline-block',fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>welcome {isLogin && `  ${isLogin.name} 님`}</p> */}
      <li
        type="button"
        onClick={() => {
          if (isAdmin) history.push("/commute");
        }}
        style={{
          display: "inline-block",
          fontFamily: "Thysen",
          fontWeight: 400,
          fontSize: "18px",
          color: "#7b533f",
          textTransform: "uppercase",
          lineHeight: "20px",
          padding: "8px 20px",
          letterSpacing: "1px",
        }}
      >
        {isAdmin ? "출퇴근관리" : ""}
      </li>
    </div>
  );
};

export default GoCommute;
