import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import PaymentResult from "../../components/choi/iamport/PaymentResult/PaymentResult";
const PaymentResultPage = (props) => {
  console.log("props (PaymentResultPage.js)", props);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      open={isOpen}
      onClose={setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PaymentResult data={data} />
    </Modal>
  );
};

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

export default PaymentResultPage;
