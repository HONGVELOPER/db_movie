import React, { useState, useEffect } from "react";
import PaymentResult from "../../components/choi/iamport/PaymentResult/PaymentResult";

const PaymentResultPage = (props) => {
  console.log("props (PaymentResultPage.js)", props);
  const [data, setData] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      <PaymentResult data={data} />
    </>
  );
};

export default PaymentResultPage;
