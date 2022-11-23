import "../login/Login.css";

import { FaLock, FaUser } from "react-icons/fa";
import { SiGithub, SiGoogle, SiKakaotalk } from "react-icons/si";

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function Login() {
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
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <FaLock className="pwd__icon" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <Link to="/Profile">
                <button class="button login__submit">
                  <span class="button__text">Log In Now</span>
                </button>
              </Link>
              <Link to="/Register" style={{ margin: 10 }}>
                Register
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
