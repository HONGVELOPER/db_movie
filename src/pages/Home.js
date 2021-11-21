import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

const Home = ({ history }) => {
    const loginState = atom({
        key: "loginState", // unique ID (with respect to other atoms/selectors)
        default: "", // default Value (aka initial value)
    });

    return (
        <RecoilRoot>
            <h1>Home page</h1>
            <Button variant="contained">
                <Link to="/movie">예매</Link>
            </Button>
            <Button
                onClick={() => {
                    history.push("/login");
                }}
                variant="contained"
            >
                login
            </Button>
        </RecoilRoot>
    );
};

export default Home;
