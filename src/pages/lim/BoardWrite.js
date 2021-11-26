// import React, { useState, useEffect } from "react";
// import CKEditor from "ckeditor4-react";
// import { Button, Form } from "react-bootstrap";
// import axios from "axios";
// axios.defaults.withCredentials = true;

// function BoardWriteForm(props) {
//   const [board, setBoard] = useState({
//     boardID: '',
//     boardTitle: '',
//     boardContent: '',
//   });

//   useEffect(() => {
//     setContentData();
//   }, []);

//   const setContentData = () => {
//     if (props.location.query !== undefined) {
//       setBoard({
//         ...board,
//         boardID: props.location.query.ID,
//         boardTitle: props.location.query.Title,
//         boardCotent: props.location.query.Content,
//       })
//     }
//   }

//   const writeBoard = () => {
//     console.log('write board 접근')
//     let url;
//     let send_param;

//     if (board.boardTitle === undefined || board.boardTitle === "") {
//       alert("글 제목을 입력 해주세요.");
//       // boardTitle.focus();
//       return;
//     } else if (board.boardContent === undefined || board.boardContent === "") {
//       alert("글 내용을 입력 해주세요.");
//       // boardContent.focus();
//     }

//     if (props.location.query !== undefined) {
//       url = "/api/board/update";
//       send_param = {
//         "id": board.boardID,
//         "title": board.boardTitle,
//         "content": board.boardContent
//       };
//     } else {
//       console.log(props);
//       console.log('진입');
//       url = "/api/board/write";
//       send_param = {
//         "id": board.boardID,
//         "title": board.boardTitle,
//         "content": board.boardContent
//       };

//     }

//     axios.post(url, send_param)
//       //정상 수행
//       .then(returnData => {
//         console.log(returnData, 'return ce')
//         if (returnData.data.message) {
//           alert(returnData.data.message);
//           window.location.href = "/board";
//         } else {
//           alert("글쓰기 실패");
//         }
//       })
//       //에러
//       .catch(err => {
//         console.log(err);
//       });
//   };
//   const divStyle = {
//     margin: 50
//   };
//   const titleStyle = {
//     marginBottom: 5
//   };
//   const buttonStyle = {
//     marginTop: 5
//   };

//   const handleId = e => {
//     setBoard({
//       ...board,
//       boardID: e.target.value
//     })
//   }
//   const handleTitle = e => {
//     setBoard({
//       ...board,
//       boardTitle: e.target.value
//     })
//   }

//   const handleContent = e => {
//     setBoard({
//       ...board,
//       boardContent: e.editor.getData()
//     })
//   }

  

//   return (
//     <div style={divStyle}>
//       <h2>공지사항</h2>
//       <Form.Control
//         type="text"
//         style={titleStyle}
//         placeholder="작성자"
//         onChange={handleId}
//       />
//       <Form.Control
//         type="text"
//         style={titleStyle}
//         placeholder="글 제목"
//         onChange={handleTitle}
//       />
//       <CKEditor
//         data={board.boardContent}
//         onChange={handleContent}
//       />
//       <Button style={buttonStyle} onClick={writeBoard}>
//         저장하기
//       </Button>
//       <div>{board.boardID}</div>
//       <div>{board.boardTitle}</div>
//       <div>{board.boardContent}</div>
//     </div>
//   );
// }

// export default BoardWriteForm;

import React, { useState, useEffect } from "react";
import CKEditor from "ckeditor4-react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;



function BoardWriteForm(props) {
  const [board, setBoard] = useState({
    boardID: '',
    boardWriter: '',
    boardTitle: '',
    boardContent: '',
  });

  useEffect(() => {
    setContentData();
  }, []);

  const setContentData = () => {
    if (props.location.query !== undefined) {
      setBoard({
        ...board,
        boardID: props.location.query.ID,
        boardWriter: props.location.query.Writer,
        boardTitle: props.location.query.Title,
        boardCotent: props.location.query.Content,
      })
    }
  }


  const writeBoard = () => {
    console.log('write board 접근')
    let url;
    let send_param;

    if (board.boardTitle === undefined || board.boardTitle === "") {
      alert("글 제목을 입력 해주세요.");
      // boardTitle.focus();
      return;
    } else if (board.boardContent === undefined || board.boardContent === "") {
      alert("글 내용을 입력 해주세요.");
      // boardContent.focus();
    }


    if (props.location.query !== undefined) {
      url = "/api/board/update";
      send_param = {
        "id": board.boardID,
        "title": board.boardTitle,
        "content": board.boardContent,
        "writer": board.boardWriter
      };
    } else {
      console.log(props);
      console.log('진입');
      url = "/api/board/write";
      send_param = {
        "id": board.boardID,
        "title": board.boardTitle,
        "content": board.boardContent,
        "writer": board.boardWriter
      };

    }

    axios.post(url, send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "/board";
        } else {
          alert("글쓰기 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  const divStyle = {
    margin: 50
  };
  const titleStyle = {
    marginBottom: 5
  };
  const buttonStyle = {
    marginTop: 5
  };

  const handleWriter = e => {
    setBoard({
      ...board,
      boardWriter: e.target.value
    })
  }
  const handleTitle = e => {
    setBoard({
      ...board,
      boardTitle: e.target.value
    })
  }

  const handleContent = e => {
    setBoard({
      ...board,
      boardContent: e.editor.getData()
    })
  }
  

  

  return (
    <div style={divStyle}>
      <h2>공지사항</h2>
      <Form.Control
        type="text"
        style={titleStyle}
        placeholder="작성자"
        onChange={handleWriter}
        defaultValue={board.boardWriter}
      />
      <Form.Control
        type="text"
        style={titleStyle}
        placeholder="글 제목"
        onChange={handleTitle}
        defaultValue={board.boardTitle}
      />
      <div>
      <CKEditor
        data={(board.boardContent)}
        onChange={handleContent}
      />
      </div>

      <Button style={buttonStyle} onClick={writeBoard}>
        저장하기
      </Button>
      <div>{board.boardWriter}</div>
      <div>{board.boardTitle}</div>
      <div>{board.boardContent}</div>
    </div>
  );
}

export default BoardWriteForm;

