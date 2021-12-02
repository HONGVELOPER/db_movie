import React, { useState, useEffect } from "react";
import Payment from "../../components/choi/iamport/Payment/Payment";

const PaymentPage = (props) => {
  console.log("PaymentPage props", props);
  const reserveData = props.location.state;
  console.log("reserveData", reserveData);

  const [data, setData] = useState({});

  useEffect(() => {
    setData(reserveData);
  }, []);

  console.log("data", data);

  return (
    <>
      <Payment data={data} />
    </>
  );
};

export default PaymentPage;
