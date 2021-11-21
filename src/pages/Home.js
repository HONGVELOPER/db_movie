import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = ({ history }) => {
    return (
        <>
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
        </>
    );
};

export default Home;
