import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const reserveState = atom({
    key: "reserveState",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export { reserveState };
