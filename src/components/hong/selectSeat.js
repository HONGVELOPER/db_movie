import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  root: {
    border: "1px solid black",
  },
  subHeader: {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
  },
  button: {
    padding: 0,
    maxWidth: "30px",
    minWidth: "30px",
  },
  navBar: {
    backgroundColor: "black",
    color: "white",
    height: "150px",
    paddingTop: "20px",
    marginTop: "10px",
  },
  select: {
    paddingTop: "10px",
    fontSize: "23px",
  },
});

const SelectSeat = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [adultSeat, setAdultSeat] = useState(0);
  const [childSeat, setChildSeat] = useState(0);
  const [seatNum, setSeatNum] = useState(0);
  const [seatCodes, setSeatCodes] = useState([]);
  const [selectSeat, setSelectSeat] = useState([]);
  const [price, setPrice] = useState(0);

  const handleAdult = async (event) => {
    setAdultSeat(event.target.textContent);
    document.getElementById(event.target.id).style.backgroundColor = "black";
    for (let i = 0; i < 9; i++) {
      if (`Adult-${i}` !== event.target.id) {
        document.getElementById(`Adult-${i}`).style.backgroundColor = "white";
      }
    }
  };
  const handleChild = (event) => {
    setChildSeat(event.target.textContent);
    document.getElementById(event.target.id).style.backgroundColor = "black";
    for (let i = 0; i < 9; i++) {
      if (`child-${i}` !== event.target.id) {
        document.getElementById(`child-${i}`).style.backgroundColor = "white";
      }
    }
  };
  const handleSeat = (event) => {
    if (
      document.getElementById(event.target.id).style.backgroundColor === "black"
    ) {
      document.getElementById(event.target.id).style.backgroundColor = "white";
      setSeatNum(seatNum - 1);
      setSeatCodes(seatCodes.filter((e) => e !== event.target.id));
      setSelectSeat(selectSeat.filter((e) => e !== event.target.name));
    } else {
      if (seatNum < parseInt(adultSeat) + parseInt(childSeat)) {
        document.getElementById(event.target.id).style.backgroundColor =
          "black";
        setSeatNum(seatNum + 1);
        setSeatCodes([...seatCodes, event.target.id]);
        setSelectSeat([...selectSeat, event.target.name]);
      } else {
        alert("인원을 초과하였습니다.");
      }
    }
    setPrice(parseInt(adultSeat) * 12000 + parseInt(childSeat) * 9000);
  };
  const handlePay = async () => {
    const result = await axios.post("/api/reserve/pay", {
      params: {
        mtCode: props.data.date.code,
        msCode: seatCodes,
        email: props.data.email,
        price: price,
      },
    });
    console.log(result, "pay result");
    if (result.status === 200) {
      history.push({
        pathname: "/payment/payment",
        state: {
          mpReserveNum: result.data.mriCode,
          mpEmail: result.data.email,
          mpPrice: result.data.price,
        },
      });
    }
  };

  let rowSeat = null;
  if (props.seat) {
    if (!props.seat.data.seat[0]) {
      return alert("좌석 배정이 되지 않았습니다.");
    }
    let row = props.seat.data.seat[0].MS_ROW;
    rowSeat = props.seat.data.seat.map((seat) => {
      if (row !== seat.MS_ROW) {
        row = seat.MS_ROW;
        return (
          <span key={seat.MS_CODE}>
            <br />
            <span style={{ display: "inline-block", width: "30px" }}>
              {seat.MS_ROW}
            </span>
            <Button
              variant="outlined"
              id={seat.MS_CODE}
              onClick={handleSeat}
              style={{
                borderRadius: 0,
                margin: 3,
                padding: 0,
                maxWidth: "30px",
                minWidth: "30px",
                backgroundColor: "white",
              }}
            >
              {seat.MS_COL}
            </Button>
          </span>
        );
      } else {
        return (
          <Button
            variant="outlined"
            key={seat.MS_CODE}
            id={seat.MS_CODE}
            name={`${seat.MS_ROW}${seat.MS_COL}`}
            onClick={handleSeat}
            style={{
              borderRadius: 0,
              margin: 3,
              padding: 0,
              maxWidth: "30px",
              minWidth: "30px",
              backgroundColor: "white",
            }}
          >
            {seat.MS_COL}
          </Button>
        );
      }
    });
    setTimeout(() => {
      for (const reserved of props.seat.data.reservedSeat) {
        document.getElementById(reserved.MS_CODE).style.backgroundColor =
          "gray";
        document.getElementById(reserved.MS_CODE).disabled = "true";
        document.getElementById(reserved.MS_CODE).style.cursor = "not-allowed";
      }
    }, 200);
  }

  return (
    <>
      <Container>
        {/* <h3>인원과 좌석을 선택해주세요.</h3> */}
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.subHeader}>
            인원 / 좌석
          </Grid>
          <Grid item xs={6} style={{ padding: 10 }}>
            <div>
              <span style={{ marginLeft: "10px", fontSize: 13 }}>일반</span>
              <span style={{ marginLeft: "33px" }}>
                <Button
                  id="Adult-0"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                    backgroundColor: "black",
                  }}
                >
                  0
                </Button>
                <Button
                  id="Adult-1"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  1
                </Button>
                <Button
                  id="Adult-2"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  2
                </Button>
                <Button
                  id="Adult-3"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  3
                </Button>
                <Button
                  id="Adult-4"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  4
                </Button>
                <Button
                  id="Adult-5"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  5
                </Button>
                <Button
                  id="Adult-6"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  6
                </Button>
                <Button
                  id="Adult-7"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  7
                </Button>
                <Button
                  id="Adult-8"
                  variant="outlined"
                  onClick={handleAdult}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  8
                </Button>
              </span>
            </div>
            <div>
              <span style={{ marginLeft: "10px", fontSize: 13 }}>청소년</span>
              <span style={{ marginLeft: "20px" }}>
                <Button
                  id="child-0"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                    backgroundColor: "black",
                  }}
                >
                  0
                </Button>
                <Button
                  id="child-1"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  1
                </Button>
                <Button
                  id="child-2"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  2
                </Button>
                <Button
                  id="child-3"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  3
                </Button>
                <Button
                  id="child-4"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  4
                </Button>
                <Button
                  id="child-5"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  5
                </Button>
                <Button
                  id="child-6"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  6
                </Button>
                <Button
                  id="child-7"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  7
                </Button>
                <Button
                  id="child-8"
                  variant="outlined"
                  onClick={handleChild}
                  style={{
                    borderRadius: 0,
                    margin: 3,
                    padding: 0,
                    maxWidth: "30px",
                    minWidth: "30px",
                  }}
                >
                  8
                </Button>
              </span>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <span>
                {props.data.branch.name}&nbsp;
                {props.data.movie.name}&nbsp;
                {props.data.date.name}&nbsp;
                {props.data.time.name}&nbsp;
              </span>
            </div>
          </Grid>
          <Grid item xs={12} style={{ border: "1px solid black" }}>
            <div>
              <div
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  width: "500px",
                  marginLeft: "30%",
                }}
              >
                Screen
              </div>
            </div>
            <div style={{ marginLeft: "30%", padding: "50px" }}>
              <span style={{ display: "inline-block", width: "30px" }}>A</span>
              {rowSeat}
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.navBar}>
        <Container>
          <Grid container>
            <Grid item xs={2}>
              <div
                style={{
                  height: "100px",
                  borderRight: "1px solid white",
                  marginLeft: "20%",
                }}
              >
                <div>예매정보</div>
                <div>제목 : {props.data.movie.name}</div>
                <div>나이 제한 : {props.data.movie.age}</div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  height: "100px",
                  borderRight: "1px solid white",
                  marginLeft: "20%",
                }}
              >
                <div>극장 : {props.data.branch.name}</div>
                <div>
                  일시 : {props.data.date.name}{" "}
                  {props.data.time.name.split(" ")[2]}
                </div>
                <div>
                  상영관 : {props.data.time.name.split(" ")[0]}{" "}
                  {props.data.time.name.split(" ")[1]}
                </div>
                <div>
                  인원 : 일반 {adultSeat}명, 청소년 {childSeat}명
                </div>
                <div>가격 : {price}</div>
              </div>
            </Grid>
            {seatNum ? (
              <Grid item xs={7}>
                <div style={{ paddingTop: "10px", marginLeft: "5%" }}>
                  좌석번호 : {selectSeat}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handlePay}
                    style={{
                      maxWidth: "100px",
                      minWidth: "100px",
                      marginLeft: "35%",
                      borderRadius: 0,
                      minHeight: "100px",
                      maxHeight: "100px",
                    }}
                  >
                    결제하기
                  </Button>
                </div>
              </Grid>
            ) : (
              <Grid item xs={7} style={{ color: "#808080" }}>
                <div style={{ paddingTop: "10px", marginLeft: "5%" }}>
                  <ArrowForwardIosIcon />
                  <span className={classes.select}>&nbsp;좌석 선택&nbsp;</span>
                  <ArrowForwardIosIcon />
                  <span className={classes.select}>&nbsp;결제&nbsp;</span>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handlePay}
                    style={{
                      maxWidth: "100px",
                      minWidth: "100px",
                      marginLeft: "35%",
                      borderRadius: 0,
                      minHeight: "100px",
                      maxHeight: "100px",
                    }}
                  >
                    결제하기
                  </Button>
                </div>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SelectSeat;
