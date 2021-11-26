import styled from "styled-components";

export const Button = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 49px;
    display: block;
    width: 50%;
    height: 49px;
    margin: 16px 0 7px;

    cursor: pointer;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 0;
    background-color: #03c75a;
    ${({ disabled }) =>
        disabled &&
        `
    `}
`;
