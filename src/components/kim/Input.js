import styled from "styled-components";

// export const Input = styled.input.attrs(({ type }) => ({
//     type: type,
// }))`
export const Input = styled.input`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 40px;
    margin: 10px 0 8px;
    padding: 5px 39px 5px 11px;
    border: solid 1px #dadada;
    background: #fff;

    justify-content: center;
`;

export const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
`;
