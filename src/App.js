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
// import CheckBox from "./pages/lee/Checkbox";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import BoardList from "./pages/lim/BoardList";
import BoardWrite from "./pages/lim/BoardWrite";
import BoardDetail from "./pages/lim/BoardDetail";

// ? iamport 이식 - 수민
import PaymentHome from "./components/choi/iamport/Home";
import Payment from "./components/choi/iamport/Payment";
import PaymentResult from "./components/choi/iamport/PaymentResult";
import Certification from "./components/choi/iamport/Certification";
import CertificationResult from "./components/choi/iamport/CertificationResult";

function App() {
  return (
    // <div className="App">

    <div>
      {/* template */}


      <RecoilRoot>
        <div id="main">

          <div class="top1">
            <div class="container">
              <div class="row">
                <div class="span12">
                  <div class="top1_inner clearfix">
                    <header><div class="logo_wrapper"><a href="index.html" class="logo"><img src="assets/images/main_banner.png" alt="" /></a></div></header>
                    {/* <div class="top2 clearfix">
            <div class="search-form-wrapper clearfix">
              <form id="search-form" action="search.php" method="GET" accept-charset="utf-8" class="navbar-form" >
                <input type="text" name="s" value='Search' onBlur="if(this.value=='') this.value='Search'" onFocus="if(this.value =='Search' ) this.value=''"/>
                <a href="#" onClick="document.getElementById('search-form').submit()"></a>
              </form>
            </div>
            <div class="social_wrapper">
              <ul class="social clearfix">
                <li><a href="#"><img src="assets/images/social_ic1.png"/></a></li>
                <li><a href="#"><img src="assets/images/social_ic2.png"/></a></li>
              </ul>
            </div>
          </div> */}
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
                          <a class="btn btn-navbar btn-navbar_" data-toggle="collapse" data-target=".nav-collapse_">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </a>
                          <div class="nav-collapse nav-collapse_ collapse">
                            <ul class="nav sf-menu clearfix">
                              <li class="active"><a href="index.html">home</a></li>
                              <li class="sub-menu sub-menu-1"><a href="index-1.html">about</a>
                                <ul>
                                  <li><a href="index-1.html">who we are</a></li>
                                  <li><a href="index-1.html">our staff</a></li>
                                  <li><a href="index-1.html">history</a></li>
                                  <li><a href="index-1.html">Products</a></li>
                                </ul>
                              </li>
                              <li><a href="index-2.html">our cakes</a></li>
                              <li><a href="index-3.html">services</a></li>
                              <li><a href="index-4.html">MENU</a></li>
                              <li><a href="index-5.html">contacts</a></li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div id="slider_wrapper">
                        <div id="slider" class="clearfix">
                          <div id="camera_wrap">
                            <div data-src="https://via.placeholder.com/932x476">
                              <div class="camera_caption fadeIn">
                                <div class="txt1">Best Cakes for Every Occasion</div>
                                <div class="txt2">Taste the Difference</div>
                              </div>
                            </div>
                            <div data-src="https://via.placeholder.com/932x476">
                              <div class="camera_caption fadeIn">
                                <div class="txt1">Best Cakes for Every Occasion</div>
                                <div class="txt2">Taste the Difference</div>
                              </div>
                            </div>
                            <div data-src="https://via.placeholder.com/932x476">
                              <div class="camera_caption fadeIn">
                                <div class="txt1">Best Cakes for Every Occasion</div>
                                <div class="txt2">Taste the Difference</div>
                              </div>
                            </div>
                            <div data-src="https://via.placeholder.com/932x476">
                              <div class="camera_caption fadeIn">
                                <div class="txt1">Best Cakes for Every Occasion</div>
                                <div class="txt2">Taste the Difference</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="slider_shadow"><img src="assets/images/slider_shadow.png" alt="" /></div>
                      </div> */}
                      <div class="page_title"><div class="page_title_left"></div><div class="page_title_px">현재 상영작</div><div class="page_title_right"></div></div>
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
                                          <img src="/assets/images/프렌치디스패치.jpeg" alt="" />
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
                                          <img src="/assets/images/eternals.jpeg" alt="" />
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
                                          <img src="/assets/images/연애빠진로맨스.jpeg" alt="" />
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
                                          <img src="/assets/images/유체이탈자.jpeg" alt="" />
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
                                          <img src="/assets/images/엔칸토.jpeg" alt="" />
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
                    <Route exact path="/movie" component={Movie} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/movie" component={Movie} />
                    <Route path="/movie/seat" component={Seat} />

                    <Route path="/commute" component={CommutePage} />
                    <Route path="/salary" component={SalaryPage} />

                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/mypage" component={MyPage} />
                    {/* <Route path="/check" component={CheckBox} /> */}
                    <Route path="/board" component={BoardList} />
                    <Route path="/boardwrite" component={BoardWrite} />
                    <Route path="/boarddetail" component={BoardDetail} />

                    <Route exact path="/payment" component={PaymentHome} />
                    <Route exact path="/payment/payment" component={Payment} />
                    <Route exact path="/payment/result" component={PaymentResult} />
                    <Route exact path="/certification" component={Certification} />
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
                    <div class="box2_title"><h3>Services</h3></div>
                    <div class="box2_inner">
                      <ul class="ul0">
                        <li><a href="#">Celebration Cakes</a></li>
                        <li><a href="#">Cupcakes</a></li>
                        <li><a href="#">Biscuits & Favours</a></li>
                        <li><a href="#">Chocolates & Cookies</a></li>
                        <li><a href="#">Strawberry Cakes</a></li>
                        <li><a href="#">Flavor Cakes</a></li>
                        <li><a href="#">Wedding Cakes</a></li>
                        <li><a href="#">Delivery</a></li>
                      </ul>
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
                        <li><a href="index.html">home</a></li>
                        <li><a href="/movie">reserve</a></li>
                        <li><a href="/board">공지사항</a></li>
                        <li><a href="index-5.html">contacts</a></li>
                        <li><a href="/login">login</a></li>
                        <li><a href="/signup">sign up</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <footer>
                  <div class="copyright">Copyright © 2020 <a href="https://gridgum.com/themes/category/free/">Free Bootstrap Templates</a>. All rights reserved.</div>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route path="/movie/seat" component={Seat} />

        <Route path="/commute" component={CommutePage} />
        <Route path="/salary" component={SalaryPage} />

        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/mypage" component={MyPage} /> */}
        {/* <Route path="/check" component={CheckBox} /> */}
        {/* <Route path="/board" component={BoardList} />
        <Route path="/boardwrite" component={BoardWrite} />
        <Route path="/boarddetail" component={BoardDetail} />

        <Route exact path="/payment" component={PaymentHome} />
        <Route exact path="/payment/payment" component={Payment} />
        <Route exact path="/payment/result" component={PaymentResult} />
        <Route exact path="/certification" component={Certification} />
        <Route
          exact
          path="/certification/result"
          component={CertificationResult}
        /> */}
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
