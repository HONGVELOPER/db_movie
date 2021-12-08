import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import { useHistory } from "react-router";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Input } from './Input';
import axios from "axios";


const LogInOut = () => {
    const [isLogin, setIsLogin] = useRecoilState(loginState);
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (isLogin) {
            setIsLogin(false)
            alert('로그아웃 되었습니다.')
        } else {
            setOpen(true)
        }
    }
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputs

    const handleInputs = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const handleClick = () => {
        if (email === "" || password === "") {
            alert("이메일과 비밀번호를 입력하세요");
            return;
        }
        axios
            .post("/api/users/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                alert(`${res.data.U_NAME} 님이 로그인 하셨습니다.`);
                // handleClose()
                if (res.data.admin) {
                    setIsLogin({
                        id: res.data.U_ID,
                        email: res.data.U_EMAIL,
                        name: res.data.U_NAME,
                        phone: res.data.U_PH_NUM,
                        birth: res.data.U_BIRTH,
                        admin: res.data.admin
                    });
                } else {
                    setIsLogin({
                        id: res.data.U_ID,
                        email: res.data.U_EMAIL,
                        name: res.data.U_NAME,
                        phone: res.data.U_PH_NUM,
                        birth: res.data.U_BIRTH,
                        admin: false,
                    });
                }
                handleClose()
                history.push("/");
            })
            .catch((err) => {
                alert("아이디 또는 비밀번호를 확인해주세요.");
            });
        }

    return (
        <div style={{position: 'relative', left: '67px'}}>
            <p style={{display: 'inline-block',fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>welcome {isLogin && `  ${isLogin.name} 님`}</p>
            <li
                type="button"
                onClick={handleOpen}
                style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
            >
                {isLogin ? "logout" : "login"}
            </li>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1> Login 로그인 </h1>
                    <Input
                        onChange={handleInputs}
                        id="email"
                        name="email"
                        placeholder="이메일을 입력해주세요 "
                        style={{ height: '30px', display: 'block', width: '430px' }}
                    ></Input>
                    <Input
                        onChange={handleInputs}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        style={{ height: '30px', display: 'block', width: '430px' }}
                    />
                    <li type="button" onClick={handleClick} style={{ display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px' }}>login</li>
                    <li type="button" onClick={handleClose} style={{fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px' }}>
                        <Link to="/signup" style={{ textDecoration: "none", color: '#7b533f' }}>
                            sign up
                        </Link>
                    </li>
                </Box>
            </Modal>
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
                style={{marginRight: '20px', display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
            >
                {isLogin ? "my page" : "sign up"}
            </li>
        </div>
    );
};

export default LogInOut;
