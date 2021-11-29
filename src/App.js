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
import CheckBox from "./pages/lee/Checkbox";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import BoardList from "./pages/lim/BoardList";
import BoardWrite from "./pages/lim/BoardWrite";
import BoardDetail from "./pages/lim/BoardDetail";

// ? iamport 이식 - 수민
import PaymentHome from "./components/choi/iamport/Home";
import PaymentPage from "./pages/choi/PaymentPage"; // ! 결제페이지
import PaymentResult from "./components/choi/iamport/PaymentResult";
import CertificationPage from "./pages/choi/CertificationPage"; // ! 인증페이지
import CertificationResult from "./components/choi/iamport/CertificationResult";

function App() {
  return (
    // <div className="App">
    <RecoilRoot>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie" component={Movie} />
      <Route path="/movie/seat" component={Seat} />

      <Route path="/commute" component={CommutePage} />
      <Route path="/salary" component={SalaryPage} />

      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/check" component={CheckBox} />
      <Route path="/board" component={BoardList} />
      <Route path="/boardwrite" component={BoardWrite} />
      <Route path="/boarddetail" component={BoardDetail} />

      <Route exact path="/payment" component={PaymentHome} />
      <Route exact path="/payment/payment" component={PaymentPage} />
      <Route exact path="/payment/result" component={PaymentResult} />
      <Route exact path="/certification" component={CertificationPage} />
      <Route
        exact
        path="/certification/result"
        component={CertificationResult}
      />
    </RecoilRoot>
    // </div>
  );
}

// !  package.js 중복되는 deps
// "react": "^16.8.6",
// "react-dom": "^16.8.6",
// "react-router-dom": "^5.0.1",
// "react-scripts": "3.0.1",
// "styled-components": "^4.3.2"
export default App;
