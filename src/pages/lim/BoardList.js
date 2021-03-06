import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../loginState";
import axios from "axios";
axios.defaults.withCredentials = true;

function BoardRow(props) {
  return (
    <tr>
      <td>
        <NavLink to={{ pathname: "/boarddetail", query: { ID: props.ID } }}>
        {props.Title}
        </NavLink>
      </td>
      <td>
        <NavLink to={{ pathname: "/boarddetail", query: { ID: props.ID } }}>
          {props.Writer}
        </NavLink>
      </td>
      <td>
        <NavLink to={{ pathname: "/boarddetail", query: { ID: props.ID } }}>
        {props.CreatedAt.substring(0, 10)}
        </NavLink>
      </td>
    </tr>
  );
}

function BoardList() {
  const [boardList, setboardList] = useState();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  console.log(isLogin, "is login");

  useEffect(() => {
    getBoardList();
  }, []);

  const getBoardList = () => {
    axios
      .post("/api/board/list")
      .then((returnData) => {
        if (returnData.data.list.length > 0) {
          const boards = returnData.data.list;
          const boardContents = boards.map((item) => (
            <BoardRow
              key={Date.now() + Math.random() * 500}
              Title={item.Title}
              Writer={item.Writer}
              CreatedAt={item.CreatedAt}
              ID={item.ID}
            ></BoardRow>
          ));
          // console.log(boardList);
          setboardList(boardContents);
        } else {
          const boardList = (
            <tr>
              <td colSpan="2">작성한 게시글이 존재하지 않습니다.</td>
            </tr>
          );
          setboardList(boardList);
          // window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const divStyle = {
    margin: 50,
  };

  const buttonStyle = {
    margin: "0px 5px 0px 10px",
  };

  return (
    <>
      <div style={divStyle}>
        <h1> 공지사항 게시판 </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>글 제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>{boardList}</tbody>
        </Table>
        {/* <NavLink to="/board">
          <Button style={buttonStyle} onClick={getBoardList} variant="primary">
            글목록
          </Button>
        </NavLink> */}
        {isLogin.admin ? (
          <dix>
            <NavLink to="/boardWrite">
              <Button style={buttonStyle} variant="primary">
                글쓰기
              </Button>
            </NavLink>
          </dix>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default BoardList;
