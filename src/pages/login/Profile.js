import "../login/Profile.css";

import { FaRegEdit } from "react-icons/fa";
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 2rem;
`;

function Profile() {
  return (
    <Box>
      <Container>
        <div className="profile_container">
          <div className="profile-bg"></div>
          <div className="profile"></div>
        </div>
        <div className="user_container">
          <h2 className="userName">닉네임</h2>
          <FaRegEdit size="30" style={{ margin: "5" }} />
        </div>
        <div className="todays_info">
          <h1 className="todays_schedule">오늘은 n개의 일정이 있습니다.</h1>
          <h2 className="todays_quote">"명언명언"</h2>
        </div>
      </Container>
    </Box>
  );
}
export default Profile;
