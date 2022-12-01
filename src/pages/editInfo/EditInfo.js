// 회원정보 수정페이지

import "./EditInfo.css";

import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import UserApi from "../../api/UserApi";
import styled from "styled-components";

// 원래 설정한 이미지를 세션 스토리지에서 가져옴
const originImgFile = sessionStorage.getItem("profileImage");

const Box = styled.div`
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Raleway, Pretendard Std;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

const Container = styled.div`
  height: auto;
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: white;
  width: 40vw;
  box-shadow: 0px 0px 24px #5c5696;
`;

function EditInfo() {
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [password, setPassword] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [phone, setPhone] = useState("");
  const phoneRef = useRef();

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const [isConId, setIsConId] = useState(false);
  const [ConIdMessage, setConIdMessage] = useState("");

  const [isConPw, setIsConPw] = useState(false);
  const [conPwMessage, setConPwMessage] = useState("");

  // 초기값 설정
  useEffect(() => {
    const originEmail = sessionStorage.getItem("userEmail");
    const originNickname = sessionStorage.getItem("userNickname");
    const originPhone = sessionStorage.getItem("phone");
    if (originEmail || originNickname || originPhone) {
      setUserEmail(originEmail);
      setUserNickname(originNickname);
      setPhone(originPhone);
    }
  }, []);

  //이미지 업로드 후 보여주기
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onChangeEmail = (e) => {
    const emailCheck = e.target.value;
    setUserEmail(emailCheck);

    const regExp =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(emailCheck) !== true) {
      setConIdMessage("이메일주소 형식이 올바르지 않습니다.");
      setIsConId(false);
    } else {
      setConIdMessage("");
      setIsConId(true);
    }
  };

  const onChangeNickname = (e) => {
    setUserNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 휴대폰 번호 오토하이픈 추가
  const onChangePhone = (e) => {
    const value = phoneRef.current.value.replace(/\D+/g, "");
    const numberLength = 11;

    var result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;

        case 7:
          result += "-";
          break;

        default:
          break;
      }
      result += value[i];
    }
    phoneRef.current.value = result;
    setPhone(e.target.value);
  };

  // 비밀번호 일치 여부 검사
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== password) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다.");
      setIsConPw(true);
    }
  };

  // 회원정보 수정
  const onClickEdit = async () => {
    console.log("Click 회원정보 수정");
    // 가입 여부 우선 확인
    // const memberCheck = await UserApi.memberRegCheck(userid);
    // console.log("가입 가능 여부 확인 : ", memberCheck.data);
    // 가입 여부 확인 후 가입 절차 진행

    if (true) {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      const memberReg = await UserApi.memberReg(
        userEmail,
        password,
        userNickname,
        phone
      );
      console.log(memberReg.statusText);
      if (memberReg.statusText === "OK") {
        const fd = new FormData();
        const file = imgRef.current.files[0];

        fd.append("file", file);
        fd.append("userEmail", userEmail);

        const uploadChk = await UserApi.imageUpload(fd);

        if (uploadChk.statusText === "OK") {
        } else {
          window.alert("이미지 업로드 실패했습니다.");
        }
        window.alert("회원 가입되었습니다.");
        window.location.replace("/");
      }
    } else {
      window.alert("이미 가입된 회원 입니다.");
    }
  };

  return (
    <Box>
      <Container>
        <Content>
          <Link to="/Profile">
            <MdArrowBack size="24" style={{ margin: 10 }} />
          </Link>
          <h1 class="form-title">Edit Account Information</h1>
          <div>
            <form className="edit-form">
              <img
                className="profile-img"
                src={imgFile ? imgFile : originImgFile}
                alt="프로필 이미지"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              />
              <label className="profileImg-label" htmlFor="profileImg">
                Add Image
              </label>
              <input
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={saveImgFile}
                ref={imgRef}
              />
              <input
                type="text"
                placeholder="ID(EMAIL)"
                value={userEmail}
                onChange={onChangeEmail}
              />
              <span
                className={`message ${isConId ? "success" : "error"}`}
                style={{ color: "#ff0000" }}
              >
                {ConIdMessage}
              </span>
              <input
                type="text"
                placeholder="NICKNAME"
                value={userNickname}
                onChange={onChangeNickname}
              />
              <input
                type="password"
                placeholder="NEW PASSWORD"
                value={password}
                onChange={onChangePassword}
              />
              <input
                type="password"
                placeholder="VERIFY PASSWORD"
                value={inputConPw}
                onChange={onChangeConPw}
              />
              <span
                className={`message ${isConPw ? "success" : "error"}`}
                style={{ color: "#ff0000" }}
              >
                {conPwMessage}
              </span>
              {/* <input type="text" placeholder="CODE" />  */}
              {/* 휴대폰이나 이메일 인증 기능 구현 시 사용 예정 */}

              <input
                type="text"
                placeholder="PHONE NUMBER"
                ref={phoneRef}
                value={phone}
                onChange={onChangePhone}
              />
              <div></div>
              <button
                type="button"
                className="submit_btn"
                onClick={onClickEdit}
              >
                Submit
              </button>
            </form>
          </div>
        </Content>
      </Container>
    </Box>
  );
}

export default EditInfo;
