import React, { useState, useEffect } from "react";
import Payment from "../../components/choi/iamport/Payment/Payment";

const PaymentPage = (props) => {
  console.log("PaymentPage props", props);
  // const reserveData = props.location.state;
  // console.log("reserveData", reserveData);

  const [reserveData, setReserveData] = useState({
    mpReserveNum: -1,
    mpEmail: "",
    mpPrice: -1,
  });

  useEffect(() => {
    setReserveData(props.location.state);
  }, []);

  console.log("reserveData", reserveData);

  return (
    <>
      <Payment reserveData={reserveData} />
    </>
  );
};

export default PaymentPage;
