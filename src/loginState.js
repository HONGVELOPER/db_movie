import { atom } from "recoil";

const loginState = atom({
    key: "loginState",
    default: false,
    // default: {
    //     isLogin: false,
    //     userKey: -1,
    // },
});

export { loginState };
