import React, { useState, useEffect } from "react";
import axios from "axios";
import Payment from "../../components/choi/iamport/Payment";

const PaymentPage = (props) => {
  console.log("PaymentPage props", props);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props);
  }, []);

  return (
    <>
      <Payment data={data} />
    </>
  );
};

export default PaymentPage;
