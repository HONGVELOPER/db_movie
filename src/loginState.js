import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginState = atom({
    key: "loginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

const qrState = atom({
    key: "qrState",
    default: 0,
    effects_UNSTABLE: [persistAtom],
})

export { loginState, qrState };
