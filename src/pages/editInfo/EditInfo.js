// 회원정보 수정페이지

import "./EditInfo.css";

import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import UserApi from "../../api/UserApi";
import styled from "styled-components";

const Box = styled.div`
  margin: 0;
  padding: 0;
  font-family: Raleway, Pretendard Std;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Content = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 50vw;
  box-shadow: 0px 0px 24px #5c5696;
`;

function EditInfo() {
  const [userEmail, setUserEmail] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [password, setPassword] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [phone, setPhone] = useState("");
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const [isConId, setIsConId] = useState(false);
  const [ConIdMessage, setConIdMessage] = useState("");

  const [isConPw, setIsConPw] = useState(false);
  const [conPwMessage, setConPwMessage] = useState("");

  const [isConPhone, setIsConPhone] = useState(false);
  const [ConPhoneMessage, setConPhoneMessage] = useState("");

  //이미지 보여주기
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onChangeId = (e) => {
    const idCheck = e.target.value;
    setUserEmail(idCheck);

    const regExp =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (regExp.test(idCheck) !== true) {
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

  const onChangePhone = (e) => {
    const phoneCheck = e.target.value;
    setPhone(phoneCheck);

    const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;

    if (regExp.test(phoneCheck) !== true) {
      setConPhoneMessage(
        "전화번호가 올바르지 않습니다. 하이픈(-)을 포함한 숫자만 입력하세요."
      );
      setIsConPhone(false);
    } else {
      setConPhoneMessage("");
      setIsConPhone(true);
    }
  };

  // 유효성 검사
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== password) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다. )");
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
          <Link to="/">
            <MdArrowBack size="24" style={{ margin: 10 }} />
          </Link>
          <h1 class="form-title">Edit Account Information</h1>
          <div>
            <form className="edit-form">
              <img
                className="profile-img"
                src={
                  imgFile
                    ? imgFile
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
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
                onChange={onChangeId}
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
                value={sessionStorage.getItem("userNickname")}
                onChange={onChangeNickname}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={onChangePassword}
              />
              <span
                className={`message ${isConPw ? "success" : "error"}`}
                style={{ color: "#ff0000" }}
              >
                {conPwMessage}
              </span>
              <input
                type="text"
                placeholder="PHONE NUMBER"
                value={phone}
                onChange={onChangePhone}
              />
              <div>
                <span
                  className={`message ${isConPhone ? "success" : "error"}`}
                  style={{ color: "#ff0000" }}
                >
                  {ConPhoneMessage}
                </span>
              </div>
              {/* <input type="text" placeholder="CODE" />  */}
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
