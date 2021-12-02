import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon, Button } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { useRecoilState } from "recoil";
import { reserveState as recoilReserveState } from "../../../../../src/reserveState";

function PaymentResult({ history }) {
  // console.log("props (PaymentResult.js)", props);
  // ! reserveData props 로 전달이 어려움..
  // ! 아톰으로 불러와야 할듯...

  const [reserveState, setReserveState] = useRecoilState(recoilReserveState);

  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  // console.log("query쿼리", query);
  // console.log("reserveState", reserveState);

  const { merchant_uid, error_msg, imp_uid, pg_provider } = query;
  // console.log("주문번호 (PaymentResult.js)", merchant_uid);

  const min_Number = merchant_uid.split("_");
  const numberOnly = Number(min_Number[1]);
  // console.log("numberOnly (PaymentResult.js)", numberOnly);
  // if (merchant_uid !== undefined) {
  // } else {
  //   numberOnly = -9999;
  // }

  useEffect(() => {
    sendPaymentData(
      numberOnly,
      reserveState.mpEmail,
      reserveState.mpPrice,
      reserveState.mpReserveNum
    );
    console.log("sendPaymentData", "하ㅏ하핳하");
  }, []);

  const sendPaymentData = (numberOnly, mpEmail, mpPrice, mpReserveNum) => {
    axios
      .post("/api/pay/savePaymentInfo", {
        //id: id,
        paymentCode: numberOnly,
        paymentType: pg_provider,
        email: mpEmail,
        price: mpPrice,
        reserveNumber: mpReserveNum,
      })
      .then(function (res) {
        // response
        alert("결제내역 저장 완료!");
      })
      .catch(function (error) {
        // error
        alert(error.response.data.message);
      });
  };

  const isSuccessed = getIsSuccessed();
  function getIsSuccessed() {
    const { success, imp_success } = query;
    if (typeof imp_success === "string") return imp_success === "true";
    if (typeof imp_success === "boolean") return imp_success === true;
    if (typeof success === "string") return success === "true";
    if (typeof success === "boolean") return success === true;
  }

  const iconType = isSuccessed ? "check-circle" : "exclamation-circle";
  const resultType = isSuccessed ? "성공" : "실패";
  const colorType = isSuccessed ? "#52c41a" : "#f5222d";
  return (
    <Wrapper>
      <Container colorType={colorType}>
        <Icon type={iconType} theme="filled" />
        <p>{`결제에 ${resultType}하였습니다`}</p>
        <ul>
          <li>
            <span>주문번호</span>
            <span>{merchant_uid}</span>
          </li>
          {isSuccessed ? (
            <li>
              <span>아임포트 번호</span>
              <span>{imp_uid}</span>
            </li>
          ) : (
            <li>
              <span>에러 메시지</span>
              <span>{error_msg}</span>
            </li>
          )}
        </ul>
        <Button size="large" onClick={() => history.push("/")}>
          <Icon type="arrow-left" />
          돌아가기
        </Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  padding: 2rem;

  > .anticon {
    font-size: 10rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${(props) => props.colorType};
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;

    li {
      display: flex;
      line-height: 2;
      span:first-child {
        width: 8rem;
        color: #888;
      }
      span:last-child {
        width: calc(100% - 8rem);
        color: #333;
      }
    }
  }

  button,
  button:hover {
    border-color: ${(props) => props.colorType};
    color: ${(props) => props.colorType};
  }
  button:hover {
    opacity: 0.7;
  }
`;

export default withRouter(PaymentResult);
