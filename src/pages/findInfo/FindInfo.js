import "../findInfo/FindInfo.css";

import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import styled from "styled-components";

const Box = styled.div`
  margin: 0;
  padding: 0;
  font-family: Raleway, Pretendard Std Variable;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

const Container = styled.div`
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
  box-shadow: 0px 0px 24px #5c5696;
`;

function FindInfo() {
  const [password, setPassword] = useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box>
      <Container>
        <Content>
          <Link to="/">
            <MdArrowBack size="24" style={{ margin: 10 }} />
          </Link>
          <h1 class="form-title">Find Account Information</h1>
          <div>
            <form className="findInfo-form">
              <Tabs
                defaultActiveKey="FindId"
                //   transition={false}
                id="noanim-tab-example"
                className="findInfo-tab"
              >
                <Tab eventKey="FindId" title="Find Id" className="findId-tab">
                  <input
                    type="text"
                    placeholder="PHONE NUMBER"
                    style={{
                      border: "none",
                      borderBottom: "1px solid black",
                      margin: "10px",
                    }}
                  />
                  <button className="submit_btn">submit</button>
                </Tab>

                <Tab
                  eventKey="FindPassword"
                  title="Find Password"
                  className="findPwd-tab"
                >
                  <div style={{ verticalAlign: "center" }}>
                    <input
                      type="text"
                      placeholder="ID(EMAIL)"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        margin: "10px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="PHONE NUMBER"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        margin: "10px",
                      }}
                    />
                  </div>
                  <button className="submit_btn">submit</button>
                </Tab>
              </Tabs>
            </form>
          </div>
        </Content>
      </Container>
    </Box>
  );
}

export default FindInfo;
