import "./App.css";
import React, { useRef } from "react";
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
import PaymentResultPage from "./pages/choi/PaymentResultPage"; // ! 결제 결과페이지
import CertificationPage from "./pages/choi/CertificationPage"; // ! 인증페이지
import CertificationResult from "./components/choi/iamport/CertificationResult";
import GoCommute from "./components/choi/GoCommute";

function App() {
  return (
    <div>
      <RecoilRoot>
        <div id="main">
          <div class="top1">
            <div class="container">
              <div
                class="clearfix"
                style={{ textAlign: "right", paddingTop: "20px" }}
              >
                <div>
                  <ul id="menu_bot" class="clearfix">
                    <GoCommute />
                    <LogInOut />
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="span12">
                  <div class="top2_inner clearfix">
                    <header>
                      <div class="logo_wrapper">
                        <a href="/" class="logo">
                          <img src="assets/images/main_banner.png" alt="" />
                        </a>
                      </div>
                    </header>
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
                        <div
                          class="navbar-inner navbar-inner_"
                          style={{
                            textAlign: "center",
                            width: "100%",
                            bottom: "10px",
                            position: "relative",
                          }}
                        >
                          {/* <a
														class="btn btn-navbar btn-navbar "
														data-toggle="collapse"
														data-target=".nav-collapse_"
													>
														<span class="icon-bar" />
														<span class="icon-bar" />
														<span class="icon-bar" />
													</a> */}
                          <ul class="nav sf-menu clearfix">
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="index-1.html">Introduce</a>
                            </li>
                            <li>
                              <a href="/movie">Reserve</a>
                            </li>
                            <li>
                              <a href="/board">Notice</a>
                            </li>
                            <li>
                              <a href="index-4.html">Event</a>
                            </li>
                            <li>
                              <a href="index-5.html">Contacts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="page_title">
                        <div class="page_title_left"></div>
                        <div class="page_title_px">현재 상영작</div>
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
                                          프렌치 디스패치
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
                                        <div class="caption">이터널스</div>
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
                                          연애빠진 로맨스
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
                                        <div class="caption">유체이탈자</div>
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="thumb-carousel banner1">
                                    <div class="thumbnail clearfix">
                                      <a
                                        target="_blank"
                                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=210282"
                                      >
                                        <figure>
                                          <img
                                            src="/assets/images/엔칸토.jpeg"
                                            alt=""
                                          />
                                        </figure>
                                        <div class="caption">
                                          엔칸토: 마법의 세계
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
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/movie" component={Movie} />
                    <Route path="/movie/seat" component={Seat} />

                    <Route path="/commute" component={CommutePage} />
                    <Route path="/salary" component={SalaryPage} />

                    {/* <Route path="/login" component={LoginPage} /> */}
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/mypage" component={MyPage} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/board" component={BoardList} />
                    <Route path="/boardwrite" component={BoardWrite} />
                    <Route path="/boarddetail" component={BoardDetail} />
                    <Route exact path="/payment" component={PaymentHome} />
                    <Route
                      exact
                      path="/payment/payment"
                      component={PaymentPage}
                    />
                    <Route
                      exact
                      path="/payment/result"
                      component={PaymentResultPage}
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
                  </div>
                </div>
                <div class="span4">
                  <div class="box2">
                    <div class="page_title">
                      <div class="page_title_left"></div>
                      <div class="page_title_px">Event</div>
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
                                          src="./eventSpeedMovie.png"
                                          alt=""
                                        />
                                        <div class="caption">
                                          2021.11.17 ~ 2021.12.31
                                        </div>
                                      </figure>
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
                                          src="https://img.cgv.co.kr/WebApp/contents/eventV4/33609/16387470657970.jpg"
                                          alt="[엔칸토: 마법의 세계] 
											스페셜 리미티드 포스터"
                                        />
                                        <div class="caption">
                                          {" "}
                                          2021.12.01 ~ 2121.12.31
                                        </div>
                                      </figure>
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
                                          src="https://img.cgv.co.kr/WebApp/contents/eventV4/33597/16384093821630.jpg"
                                          alt="[몬스타엑스: 더 드리밍] 
                                            포토플레이 시크릿 컷"
                                        />
                                        <div class="caption">
                                          {" "}
                                          2021.12.01 ~ 2121.12.31
                                        </div>
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="thumb-carousel banner1">
                                  <div class="thumbnail clearfix">
                                    <a href="#">
                                      <figure>
                                        <img src="./eventToss.png" alt="" />
                                        <div class="caption">
                                          2021.12.01 ~ 2121.12.31
                                          <br />
                                        </div>
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="thumb-carousel banner1">
                                  <div class="thumbnail clearfix">
                                    <a href="#">
                                      <figure>
                                        <img img src="./eventIMAX.png" alt="" />
                                        <div class="caption">
                                          2021.11.01~2022.06.01
                                        </div>
                                      </figure>
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

          <div class="container">
            <div class="row">
              <div class="span12">
                <div class="bot1">
                  <div class="bot1_inner">
                    <div class="menu_bot">
                      <ul id="menu_bot" class="clearfix">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="index-1.html">Introduce</a>
                        </li>
                        <li>
                          <a href="/movie">Reserve</a>
                        </li>
                        <li>
                          <a href="index-4.html">Event</a>
                        </li>
                        <li>
                          <a href="index-5.html">address</a>
                        </li>
                        <li>
                          <a href="/board">Notice</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <footer>
                  <div class="copyright">
                    (15588) 경기도 안산시 상록구 한양대학로 55
                    <br />
                    대표: 홍영진 | 호스팅사업자: 한양대 에리카 DataNoBase |
                    개인정보보호 책임자: 김한나 | 대표 이메일:
                    DataNoBase@hanyang.ac.kr | 고객센터: 031-400-5114
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

export default App;
