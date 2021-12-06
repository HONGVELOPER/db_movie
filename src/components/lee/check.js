import React, { useState } from "react";
import "./Checkbox.css";
import { Link } from 'react-router-dom';
import { qrState } from "../../loginState"
import { useRecoilState } from "recoil";

const Checkbox = () => {

	const [qrCheck, setQrCheck] = useRecoilState(qrState);
	const q1 = "현재 확진 판정을 받고 치료 중에 있습니까?";
	const q2 =
		"현재 코로나19 관련 증상이 있습니까? (발열, 기침, 인후통, 오한, 후각·미각 소실 등)";
	const q3 = "최근 14일 이내에 확진 환자와 접촉한 적이 있습니까?";
	const q4 =
		"최근 14일 이내에 해외 국가를 방문 후 자가 격리 중 입니까? (예방접종 완료 후 방역 당국으로부터 자가 격리 면제인 경우 ‘아니오‘로 표시)";
	const q5 =
		"최근 14일 이내에 국내 집단 발생 지역 및 시설을 방문한 적이 있습니까?";
	const q6 =
		"본인 또는 동거인이 현재 자가 격리 중이거나 코로나 검사 후 결과를 기다리는 중입니까? (증빙을 위한 선제적검사인 경우는 ‘아니오‘로 표시)";
	const [checkedInputs, setCheckedInputs] = useState([]);

	const deleteHandler = (checked, id) => {
		if (checked) {
			if (checkedInputs.includes(id)) {
				setCheckedInputs(checkedInputs.filter((el) => el !== id));
				console.log(checkedInputs);
			}
		}
	};

	const changeHandler = (checked, id) => {
		if (checked) {
			if (!checkedInputs.includes(id)) {
				setCheckedInputs([...checkedInputs, id]);
				console.log("체크 반영 완료");
				console.log(checkedInputs);
			}
		} else {
			setCheckedInputs(checkedInputs.filter((el) => el !== id));
			console.log("체크 해제 반영 완료");
			console.log(checkedInputs);
		}
	};
	
	const isAllChecked = checkedInputs.length === 6;
	const qrSuccess = () => {
		if (isAllChecked) {
			setQrCheck({
				check: true,
				safe: true
			})
		} else {
			setQrCheck({
				check: true,
				safe: false
			})
		}
		console.log(qrCheck)
	}


	return (
		<>
			<h3 style={{fontFamily: 'Thysen', fontWeight: 400, fontSize: '24px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}>모두 "아니요" 가 아니면 예매가 불가능합니다.</h3>
			{q1}
			<br />
			<input
				type="radio"
				name="check1"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check1");
				}}
			/>
			<label htmlFor="radio">예</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check1"
				id="check1"
				value={q1}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check1");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			{q2}
			<br />
			<input
				type="radio"
				name="check2"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check2");
				}}
			/>
			<label name="c37" htmlFor="c37_a">
				예
			</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check2"
				id="check2"
				value={q2}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check2");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			{q3}
			<br />
			<input
				type="radio"
				name="check3"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check3");
				}}
			/>
			<label htmlFor="radio">예</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check3"
				id="check3"
				value={q3}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check3");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			{q4}
			<br />
			<input
				type="radio"
				name="check4"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check4");
				}}
			/>
			<label htmlFor="radio">예</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check4"
				id="check4"
				value={q4}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check4");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			{q5}
			<br />
			<input
				type="radio"
				name="check5"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check5");
				}}
			/>
			<label htmlFor="radio">예</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check5"
				id="check5"
				value={q5}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check5");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			{q6}
			<br />
			<input
				type="radio"
				name="check6"
				onChange={(e) => {
					deleteHandler(e.currentTarget.checked, "check6");
				}}
			/>
			<label htmlFor="radio">예</label>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input
				type="radio"
				name="check6"
				id="check6"
				value={q6}
				onChange={(e) => {
					changeHandler(e.currentTarget.checked, "check6");
				}}
			/>
			<label htmlFor="radio">아니요</label>
			<br />
			<li
				type="button"
				id="passBtn"
				style={{display: 'inline-block', fontFamily: 'Thysen', fontWeight: 400, fontSize: '18px', color: '#7b533f', textTransform: 'uppercase', lineHeight: '20px', padding: '8px 20px', letterSpacing: '1px'}}
			>
				<Link
					onClick={qrSuccess}
					to={"/"} 
					style={{textDecoration: "none", color: '#7b533f'}}
				>
					다음
				</Link>
			</li>
		</>
	);
};
export default Checkbox;
