import "../login/Login.css";

import { FaLock, FaUser } from "react-icons/fa";
import React, { useState } from "react";
import { SiGithub, SiGoogle, SiKakaotalk } from "react-icons/si";
import { getDownloadURL, ref } from "@firebase/storage";

import { Link } from "react-router-dom";
import UserApi from "../../api/UserApi";
import { storageService } from "../../lib/api/fbase";
import styled from "styled-components";

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

function Login() {
  // 세션이 존재하는 경우 프로필 화면으로
  if (sessionStorage.getItem("userEmail") !== null) {
    window.location.replace("/Profile");
  }

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };

  const onChangePw = (e) => {
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
  };

  const onClickLogin = async () => {
    // 로그인을 위한 axios 호출
    const res = await UserApi.userLogin(inputId, inputPw);

    // 로그인을 성공하는 경우
    if (res.data !== false) {
      // 사람정보에 이미지가 존재하는 경우
      if (res.data.profileImage !== null) {
        //FireBase에서 이미지를 불러올 경로 참고 생성
        let attachmentUrl = ref(
          storageService,
          `/USER/${res.data.profileImage}`
        );

        // 경로 참고를 가지고 이미지 경로를 불러온다.
        let profileImagePath = await getDownloadURL(attachmentUrl);

        sessionStorage.setItem("profileImage", res.data.profileImage);
        sessionStorage.setItem("profileImagePath", profileImagePath);
      }

      sessionStorage.setItem("userEmail", res.data.userEmail);
      sessionStorage.setItem("userNickname", res.data.userNickname);
      sessionStorage.setItem("phone", res.data.phone);
      window.location.replace("/Profile");
    } else if (res.data === false) {
      window.alert("이메일이나 비밀번호를 확인해주세요.");
    }
  };

  return (
    <Box>
      <Container>
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <FaUser className="login__icon" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  value={inputId}
                  onChange={onChangeId}
                />
              </div>
              <div class="login__field">
                <FaLock className="pwd__icon" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={inputPw}
                  onChange={onChangePw}
                />
              </div>

              <button
                type="button"
                className="login_btn"
                onClick={onClickLogin}
              >
                Log in now
              </button>

              <Link
                to="/Register"
                style={{ textDecoration: "none", margin: "10px" }}
              >
                Register
              </Link>
              <Link
                to="/FindInfo"
                style={{ textDecoration: "none", margin: "10px" }}
              >
                Find Id/Pw
              </Link>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="kakaoIcon">
                  <SiKakaotalk />
                </a>
                <a href="#" className="googleIcon">
                  <SiGoogle />
                </a>
                <a href="#" className="githubIcon">
                  <SiGithub />
                </a>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Login;
