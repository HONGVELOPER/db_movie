import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LogInOut from "../components/kim/LogInOut";

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <Button type="button">
                <Link to="/movie">
                    예매
                </Link>
            </Button>
            <LogInOut />
        </>
    );
};

export default Home;
