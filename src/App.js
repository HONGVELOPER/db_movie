import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/hong/Movie";
import Seat from "./pages/hong/Seat";
import CommutePage from "./pages/choi/CommutePage";
import SalaryPage from "./pages/choi/SalaryPage";
import LoginPage from "./pages/kim/LoginPage";
import SignUpPage from "./pages/kim/SignUpPage";
import MyPage from "./pages/kim/MyPage";
import { RecoilRoot, atom, useRecoilState } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={Movie} />
            <Route path="/movie/seat" component={Seat} />

            <Route path="/commute" component={CommutePage} />
            <Route path="/salary" component={SalaryPage} />

            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/mypage" component={MyPage} />
        </RecoilRoot>
    );
}

export default App;
