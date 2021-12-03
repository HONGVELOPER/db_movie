import React, { useState, useEffect } from "react";
import Payment from "../../components/choi/iamport/Payment/Payment";
import { useRecoilState } from "recoil";
import { reserveState as recoilReserveState } from "../../reserveState";

const PaymentPage = (props) => {
  console.log("PaymentPage props", props);
  // const reserveData = props.location.state;
  // console.log("reserveData", reserveData);

  const [reserveData, setReserveData] = useState({
    mpReserveNum: -1,
    mpEmail: "",
    mpPrice: -1,
  });

  const [reserveState, setReserveState] = useRecoilState(recoilReserveState);

  useEffect(() => {
    setReserveData(props.location.state);
    setReserveState(props.location.state);
  }, []);

  console.log("reserveData", reserveData);

  return (
    <>
      <Payment reserveData={reserveData} />
    </>
  );
};

export default PaymentPage;
