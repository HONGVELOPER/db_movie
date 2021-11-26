import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form } from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
axios.defaults.withCredentials = true;

function BoardWriteForm(props) {
	console.log(props, 'prop check')

	let content = ''
	if (props.location.query !== undefined) {
		content = props.location.query.Content
	}

	const [board, setBoard] = useState({
		boardID: '',
		boardWriter: '',
		boardTitle: '',
		boardContent: ''
	})

	useEffect(() => {
		const setContentData = () => {
			if (props.location.query !== undefined) {
				setBoard({
					...board,
					boardID: props.location.query.ID,
					boardWriter: props.location.query.Writer,
					boardTitle: props.location.query.Title,
					boardContent: props.location.query.Content,
				})
			}
		}
		setContentData();
	}, []);

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
	const handleContent = (e, editor) => {
		console.log(editor.getData())
		setBoard({
			...board,
			boardContent: editor.getData()
		})
	}


	const writeBoard = () => {
		console.log('write board 접근')
		let url;
		let send_param;

		if (board.boardTitle === undefined || board.boardTitle === "") {
			alert("글 제목을 입력 해주세요.");
			return;
		} else if (board.boardContent === undefined || board.boardContent === "") {
			alert("글 내용을 입력 해주세요.");
			return;
		}

		if (props.location.query !== undefined) {
			url = "/api/board/update";
			send_param = {
				"id": board.boardID,
				"title": board.boardTitle,
				"writer": board.boardWriter,
				"content": board.boardContent,
			};
		} else {
			console.log(props);
			console.log('진입');
			url = "/api/board/write";
			send_param = {
				"id": board.boardID,
				"title": board.boardTitle,
				"writer": board.boardWriter,
				"content": board.boardContent,
			};
		}

		axios.post(url, send_param)
			.then(returnData => {
				if (returnData.data.message) {
					alert(returnData.data.message);
					window.location.href = "/board";
				} else {
					alert("글쓰기 실패");
				}
			})
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
					editor={ClassicEditor}
					onReady={(editor) => {
						editor.setData(content)
					}}
					onChange={handleContent}
				/>
			</div>

			<Button style={buttonStyle} onClick={writeBoard}>
				저장하기
			</Button>
			<div>{board.boardWriter}</div>
			<div>{board.boardTitle}</div>
			<div>{board.boardContent}</div>
			<div>{content}</div>
		</div>
	);
}

export default BoardWriteForm;

