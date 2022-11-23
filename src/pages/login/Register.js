import "../login/Register.css";

import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
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

function Register() {
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
              <input type="text" placeholder="ID(EMAIL)" />
              <input type="text" placeholder="PASSWORD" />
              <input type="text" placeholder="VERIFY PASSWORD" />
              <input type="text" placeholder="PHONE NUMBER" />
              <input type="text" placeholder="CODE" />
              <input type="email" placeholder="EMAIL ADDRESS" />
              <input type="checkbox" id="check" />
              <label id="check" htmlFor="check" />
              <span> Agree to terms & conditions</span>
              <button type="button" className="register_btn">
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
