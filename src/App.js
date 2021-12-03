import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Home from "./pages/Home";
import Movie from "./pages/hong/Movie";
import Seat from "./pages/hong/Seat";
import CommutePage from "./pages/choi/CommutePage";
import SalaryPage from "./pages/choi/SalaryPage";
import LoginPage from "./pages/kim/LoginPage";
import SignUpPage from "./pages/kim/SignUpPage";
import MyPage from "./pages/kim/MyPage";
import LogInOut from "./components/kim/LogInOut";

// import CheckBox from "./pages/lee/Checkbox";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import BoardList from "./pages/lim/BoardList";
import BoardWrite from "./pages/lim/BoardWrite";
import BoardDetail from "./pages/lim/BoardDetail";

// ? iamport 이식 - 수민
import PaymentHome from "./components/choi/iamport/Home";
import PaymentPage from "./pages/choi/PaymentPage"; // ! 결제페이지
import PaymentResult from "./pages/choi/PaymentResultPage"; // ! 결제 결과페이지
import CertificationPage from "./pages/choi/CertificationPage"; // ! 인증페이지
import CertificationResult from "./components/choi/iamport/CertificationResult";

function App() {
    const [modalShow, setModalShow] = useState(false);
    return (
        // <div className="App">

        <div>
            {/* <SignUpPage
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
            {/* template */}
            <RecoilRoot>
                <div id="main">
                    <div class="top1">
                        <div class="container">
                            <div class="row">
                                <div class="span12">
                                    <div class="top2_inner clearfix">
                                        <header>
                                            <div class="logo_wrapper">
                                                <a
                                                    href="index.html"
                                                    class="logo"
                                                >
                                                    <img
                                                        src="assets/images/main_banner.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </header>
                                        <div class="top3 clearfix">
                                            <div class="social_wrapper">
                                                <div class="bot1">
                                                    <div class="bot1_inner">
                                                        <div class="menu_bot">
                                                            <ul
                                                                id="menu_bot"
                                                                class="clearfix"
                                                            >
                                                                <LogInOut />
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="hl1"></div>
                    <div class="hl2">
                        <div class="hl2_2">
                            <div class="container">
                                <div class="row">
                                    <div class="span12">
                                        <div class="hl2_2_inner">
                                            <div class="hl2_2_left"></div>
                                            <div class="hl2_2_px"></div>
                                            <div class="hl2_2_right"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hl2_inner">
                            <div class="container">
                                <div class="row">
                                    <div class="span12">
                                        <div class="hl1_inner2">
                                            <div class="navbar navbar_">
                                                <div class="navbar-inner navbar-inner_">
                                                    <a
                                                        class="btn btn-navbar btn-navbar_"
                                                        data-toggle="collapse"
                                                        data-target=".nav-collapse_"
                                                    >
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </a>
                                                    <div
                                                        class="nav-collapse nav-collapse_ collapse"
                                                        style={{
                                                            border: "1px solid black",
                                                        }}
                                                    >
                                                        <ul class="nav sf-menu clearfix">
                                                            <li>
                                                                <a href="index.html">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="index-1.html">
                                                                    Introduce
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="index-3.html">
                                                                    Reserve
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="index-4.html">
                                                                    Event
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="index-5.html">
                                                                    Contacts
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="page_title">
                                                <div class="page_title_left"></div>
                                                <div class="page_title_px">
                                                    현재 상영작
                                                </div>
                                                <div class="page_title_right"></div>
                                            </div>
                                            <div id="slider3">
                                                <a class="prev3" href="#"></a>
                                                <a class="next3" href="#"></a>
                                                <div class="carousel-box row">
                                                    <div class="inner span12">
                                                        <div class="carousel main">
                                                            <ul>
                                                                <li>
                                                                    <div class="thumb-carousel banner1">
                                                                        <div class="thumbnail clearfix">
                                                                            <a href="/movie">
                                                                                <figure>
                                                                                    <img
                                                                                        src="/assets/images/프렌치디스패치.jpeg"
                                                                                        alt=""
                                                                                    />
                                                                                </figure>
                                                                                <div class="caption">
                                                                                    프렌치
                                                                                    디스패치
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="thumb-carousel banner1">
                                                                        <div class="thumbnail clearfix">
                                                                            <a href="#">
                                                                                <figure>
                                                                                    <img
                                                                                        src="/assets/images/eternals.jpeg"
                                                                                        alt=""
                                                                                    />
                                                                                </figure>
                                                                                <div class="caption">
                                                                                    이터널스
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="thumb-carousel banner1">
                                                                        <div class="thumbnail clearfix">
                                                                            <a href="#">
                                                                                <figure>
                                                                                    <img
                                                                                        src="/assets/images/연애빠진로맨스.jpeg"
                                                                                        alt=""
                                                                                    />
                                                                                </figure>
                                                                                <div class="caption">
                                                                                    연애빠진
                                                                                    로맨스
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="thumb-carousel banner1">
                                                                        <div class="thumbnail clearfix">
                                                                            <a href="#">
                                                                                <figure>
                                                                                    <img
                                                                                        src="/assets/images/유체이탈자.jpeg"
                                                                                        alt=""
                                                                                    />
                                                                                </figure>
                                                                                <div class="caption">
                                                                                    유체이탈자
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="thumb-carousel banner1">
                                                                        <div class="thumbnail clearfix">
                                                                            <a href="#">
                                                                                <figure>
                                                                                    <img
                                                                                        src="/assets/images/엔칸토.jpeg"
                                                                                        alt=""
                                                                                    />
                                                                                </figure>
                                                                                <div class="caption">
                                                                                    엔칸토:
                                                                                    마법의
                                                                                    세계
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hl3"></div>

                    <div id="content">
                        <div class="container">
                            <div class="row">
                                <div class="span8">
                                    <div class="box1">
                                        <Route
                                            exact
                                            path="/"
                                            component={Home}
                                        />
                                        <Route
                                            exact
                                            path="/movie"
                                            component={Movie}
                                        />
                                        <Route
                                            path="/movie/seat"
                                            component={Seat}
                                        />

                                        <Route
                                            path="/commute"
                                            component={CommutePage}
                                        />
                                        <Route
                                            path="/salary"
                                            component={SalaryPage}
                                        />

                                        <Route
                                            path="/login"
                                            component={LoginPage}
                                        />
                                        <Route
                                            path="/signup"
                                            component={SignUpPage}
                                        />
                                        <Route
                                            path="/mypage"
                                            component={MyPage}
                                        />
                                        {/* <Route path="/check" component={CheckBox} /> */}
                                        <Route
                                            path="/board"
                                            component={BoardList}
                                        />
                                        <Route
                                            path="/boardwrite"
                                            component={BoardWrite}
                                        />
                                        <Route
                                            path="/boarddetail"
                                            component={BoardDetail}
                                        />

                                        <Route
                                            exact
                                            path="/payment"
                                            component={PaymentHome}
                                        />
                                        <Route
                                            exact
                                            path="/payment/payment"
                                            component={PaymentPage}
                                        />
                                        <Route
                                            exact
                                            path="/payment/result"
                                            component={PaymentResult}
                                        />
                                        <Route
                                            exact
                                            path="/certification"
                                            component={CertificationPage}
                                        />
                                        <Route
                                            exact
                                            path="/certification/result"
                                            component={CertificationResult}
                                        />
                                        {/* <h4>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </h4>

                    <div class="thumb1">
                      <div class="thumbnail clearfix">
                        <figure class="img-polaroid img-rounded"><img src="https://via.placeholder.com/218x167" alt="" /></figure>
                        <div class="caption">
                          <p>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ipsum dolor sit amet conse ctetur adipisic t conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetuer adipiscing elit.
                          </p>
                          <p>
                            <a href="#">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </a>
                          </p>
                          <div class="text-right"><a href="#" class="button1">read more<em></em></a></div>
                        </div>
                      </div>
                    </div> */}
                                    </div>
                                </div>
                                <div class="span4">
                                    <div class="box2">
                                        <div class="box2">
                                            <div class="box2_title">
                                                <h3>Event</h3>
                                            </div>
                                            <div class="box2_inner">
                                                <ul class="ul0">
                                                    <div class="thumb4">
                                                        <div class="thumbnail clearfix">
                                                            <figure class="img-polaroid img-rounded">
                                                                <img
                                                                    src="./eventLPoint.png"
                                                                    alt=""
                                                                />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div class="thumb4 last">
                                                        <div class="thumbnail clearfix">
                                                            <figure class="img-polaroid img-rounded">
                                                                <img
                                                                    src="./eventUser.png"
                                                                    alt=""
                                                                />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="span12">
                                <div class="bot1">
                                    <div class="bot1_inner">
                                        <div class="menu_bot">
                                            <ul id="menu_bot" class="clearfix">
                                                <li>
                                                    <a href="index.html">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-1.html">
                                                        Introduce
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">
                                                        Reserve
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">
                                                        Event
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">
                                                        address
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/board">board</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <footer>
                                    <div class="copyright">
                                        (15588) 경기도 안산시 상록구 한양대학로
                                        55
                                        <br />
                                        대표: 홍영진 | 호스팅사업자: 한양대
                                        에리카 DataNoBase | 개인정보보호 책임자:
                                        김한나 | 대표 이메일:
                                        DataNoBase@hanyang.ac.kr | 고객센터:
                                        031-400-5114
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                <script type="text/javascript" src="js/bootstrap.js"></script>
            </RecoilRoot>
        </div>
    );
}

// !  package.js 중복되는 deps
// "react": "^16.8.6",
// "react-dom": "^16.8.6",
// "react-router-dom": "^5.0.1",
// "react-scripts": "3.0.1",
// "styled-components": "^4.3.2"
export default App;
