import "./Register.css";

import React, { useRef, useState } from "react";
import { ref, uploadString } from "@firebase/storage";

import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import UserApi from "../../api/UserApi";
import { storageService } from "../../lib/api/fbase";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Box = styled.div`
  margin: 0 auto;
  padding: 0;
  font-family: Raleway, GmarketSansMedium;
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
  width: 40vw;
  box-shadow: 0px 0px 24px #5c5696;
`;

function Register() {
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

  //프로필 이미지 firebase 저장 및 미리 보여주기
  const saveImgFile = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    console.log(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImgFile(result);
    };
    reader.readAsDataURL(theFile);
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

  // 휴대폰 번호 오토하이픈
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

  // 비밀번호 일치여부
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

  // 회원가입
  const onClickReg = async () => {
    console.log("Click 회원가입");

    if (true) {
      let profileImage = null;

      // 이미지가 존재하는 경우
      if (imgFile !== "") {
        //파일 랜덤 이름 생성(FireBase에 저장할 파일 이름)
        profileImage = uuidv4();

        // 업로드파일 참조
        const attachmentRef = ref(storageService, `/USER/${profileImage}`);
        //storage 참조 경로로 파일 업로드 하기
        await uploadString(attachmentRef, imgFile, "data_url");
      }

      // 회원가입
      const userReg = await UserApi.userReg(
        userEmail,
        password,
        userNickname,
        phone,
        profileImage
      );
      // 회원가입에 성공하는 경우
      if (userReg.statusText === "OK") {
        window.confirm("회원가입이 완료되었습니다.");
        window.location.replace("/");
      } else {
        window.confirm("회원가입에 실패했습니다.");
      }
    }
  };

  return (
    <Box>
      <Container>
        <Content>
          <Link to="/">
            <MdArrowBack size="24" style={{ margin: 10 }} />
          </Link>
          <h1 class="form-title">Register Here</h1>
          <div>
            <form className="register-form">
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
                value={userNickname}
                onChange={onChangeNickname}
              />
              <input
                type="password"
                placeholder="PASSWORD"
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
              <input
                type="text"
                placeholder="PHONE NUMBER"
                ref={phoneRef}
                value={phone}
                onChange={onChangePhone}
              />
              <div></div>
              {/* <input type="text" placeholder="CODE" /> */}
              <input type="checkbox" id="check" />
              <label id="check" htmlFor="check" />
              <span> Agree to terms & conditions</span>
              <button
                type="button"
                className="register_btn"
                onClick={onClickReg}
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

export default Register;
