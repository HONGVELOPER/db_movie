
// import React, { useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// axios.defaults.withCredentials = true;
// const headers = { withCredentials: true };

// function BoardDetail(props){

//   const [board, setBoard] = useState();

//   useEffect( () => {
//     setBoardDetail();
//   },[]);

//   // useEffect(function() {
//   //   if(props.location.query !== undefined) {
//   //     getDetail();
//   //   } else {
//   //     window.location.href = "/board"
//   //   }
//   // },[]);

//   const setBoardDetail= () =>{
//     if(props.location.query !== undefined) {
//       getDetail();
//     } else {
//       window.location.href = "/board"
//     }
//   };

//   const deleteBoard = ID => {
//     const send_param = {
//       ID
//     };
//     if(window.confirm("정말로 삭제하시겠습니까?")){
//       axios
//         .post("/api/board/delete", send_param)
//         .then(returnData => {
//           alert("게시글이 삭제되었습니다");
//           window.location.href = "/board";
//         })
//         .catch(err => {
//           console.log(err);
//           alert("글 삭제 실패");
//         });
//     }
//   };

//   const getDetail = () => {
//     const send_param = {
//       ID: props.location.query.ID
//     };
//     const marginBottom = {
//       margin: "0px 5px 0px 10px",
//       marginBottom: 5
//     };
//     axios.post("/api/board/detail", send_param)
//       //정상 수행
//       .then(returnData => {   
//         if (returnData.data.list[0]) {
//           const board = (
//             <div>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>{returnData.data.list[0].Title}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td
//                       dangerouslySetInnerHTML={{
//                         __html: returnData.data.list[0].Content
//                       }}
//                     ></td>
//                   </tr>
//                 </tbody>
//               </Table>
//               <div>
//                 <NavLink
//                   to={{
//                     pathname: "/boardWrite",
//                     query: {
//                       Title: returnData.data.list[0].Title,
//                       Content: returnData.data.list[0].Content,
//                       ID: props.location.query.ID
//                     }
//                   }}
//                 >
//                   <Button block style={marginBottom}>
//                     글 수정
//                   </Button>
//                 </NavLink>
//                 <Button block style={marginBottom}
//                   block
//                   onClick={deleteBoard.bind(
//                     null,
//                     props.location.query.ID
//                   )}
//                 >
//                   글 삭제
//                 </Button>
//               </div>
//             </div>
//           );
//           setBoard(board);
//         } else {
//           alert("글 상세 조회 실패");
//         }
//       })
//       //에러
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const divStyle ={
//     margin: 50
//   }
//   return (
//     <>
//     <div style={divStyle}>{board}</div>
//     </>
//   );
// }
    

// export default BoardDetail;

import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function BoardDetail(props){

  const [board, setBoard] = useState();

  useEffect( () => {
    setBoardDetail();
  },[]);

  // useEffect(function() {
  //   if(props.location.query !== undefined) {
  //     getDetail();
  //   } else {
  //     window.location.href = "/board"
  //   }
  // },[]);

  const setBoardDetail= () =>{
    if(props.location.query !== undefined) {
      getDetail();
    } else {
      window.location.href = "/board"
    }
  };

  const deleteBoard = ID => {
    const send_param = {
      ID
    };
    if(window.confirm("정말로 삭제하시겠습니까?")){
      axios
        .post("/api/board/delete", send_param)
        .then(returnData => {
          alert("게시글이 삭제되었습니다");
          window.location.href = "/board";
        })
        .catch(err => {
          console.log(err);
          alert("글 삭제 실패");
        });
    }
  };

  const getDetail = () => {
    const send_param = {
      ID: props.location.query.ID
    };
    const marginBottom = {
      margin: "0px 5px 0px 10px",
      marginBottom: 5
    };
    axios.post("/api/board/detail", send_param)
      //정상 수행
      .then(returnData => {   
        if (returnData.data.list[0]) {
          const board = (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>{returnData.data.list[0].Title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: returnData.data.list[0].Content
                      }}
                    ></td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <NavLink
                  to={{
                    pathname: "/boardWrite",
                    query: {
                      Title: returnData.data.list[0].Title,
                      Content: returnData.data.list[0].Content,
                      ID: props.location.query.ID,
                      Writer: returnData.data.list[0].Writer
                    }
                  }}
                >
                  <Button style={marginBottom}>
                    글 수정
                  </Button>
                </NavLink>
                <Button style={marginBottom}
                  onClick={deleteBoard.bind(
                    null,
                    props.location.query.ID
                  )}
                >
                  글 삭제
                </Button>
              </div>
            </div>
          );
          setBoard(board);
        } else {
          alert("글 상세 조회 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  const divStyle ={
    margin: 50
  }
  return (
    <>
    <div style={divStyle}>{board}</div>
    </>
  );
}
    

export default BoardDetail;