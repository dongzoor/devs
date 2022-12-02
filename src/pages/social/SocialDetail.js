import React from "react";
import styled from "styled-components";
import Photo from "./pic/짱난.gif";
import CommentList from "./components/CommentList";
import CommentWriter from "./components/CommentWriter";
import Nav from "../../containers/common/Nav";
import {
  IoEyeOutline,
  IoHeartOutline,
  IoChatboxOutline,
} from "react-icons/io5";

const SocialDetail = () => {
  return (
    <div>
           <Nav />
      <DetailBox>
        <div className="subtitle">Board Detail Page</div>
        <div className="parentBox">
          <div className="content-title">
            백엔드 신입으로 입사했는데, 프론트엔드 일을 시킵니다
          </div>
          <div className="post-info">
            <div className="publisher-info">
              <img className="photos" src={Photo} alt="프로필 사진"></img>
              <span className="nickName">곰돌이사육사</span>
              <span className="date">| 22.11.22</span>
            </div>
            <div className="icon-box">
              <IoEyeOutline />
              <span className="count">5</span>
              <IoHeartOutline />
              <span className="count">5</span>
              <IoChatboxOutline />
              <span className="count">5</span>
            </div>
          </div>
          <hr />
          <div className="content-text">
            백엔드 직무로 지원해 합격하였는데, 입사하고 나니 갑자기 프론트엔드
            일을 하라네요.... 저는 백엔드 개발자로 커리어를 쌓고 싶어요. 지금껏
            프론트가 잘 맞지도 않았구요.. 신입으로 다시 취업을
            준비할지(첫직장입니다), 프론트 업무와 토이프로젝트를 병행하며
            백엔드로 이직을 노려볼지... 고민이 많네요... 선배님들의 조언을
            부탁드립니다ㅠㅠ
          </div>
          <div className="hashtag-box">
            <span className="hashtag">#이직</span>
            <span className="hashtag">#신입</span>
            <span className="hashtag">#백앤드</span>
          </div>
          <hr />
          <CommentWriter />
          <CommentList />
        </div>
      </DetailBox>
    </div>
  );
};

const DetailBox = styled.div`
  & > * {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  margin: 0px auto;
  /* background-color: rgba(211, 188, 230, 0.25); */
  .subtitle {
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    font-size: 25px;
    padding: 10px;
    margin: 20px;
  }
  .parentBox {
    font-family: "Song Myung", serif;
    width: 1024px;
    margin: 0px auto;
    padding: 5px;
    /* border: 1px solid black; */
    background-color: rgba(211, 188, 230, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .content-title {
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    background-color: white;
    font-size: 25px;
  }
  hr {
    width: 98%;
    height: 1px;
    border: 0;
    background-color: rgba(209, 209, 209, 0.8);
  }
  .content-text {
    padding: 10px;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
  }
  .publisher-info {
    display: flex;
    align-items: center;
  }
  .icon-box {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  .photos {
    margin: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .date {
    color: grey;
    margin: 0 5px;
  }
  .count {
    padding: 5px;
  }
  .hashtag-box {
    margin: 10px;
  }
  .hashtag {
    margin: 0px 3px;
    padding: 8px;
    font-style: italic;
    background-color: rgba(219, 219, 219, 0.5);
    border-radius: 10px;
  }
`;
export default SocialDetail;
