import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Photo from "./pic/짱난.gif";
import CommentList from "./components/CommentList";
import CommentWriter from "./components/CommentWriter";
import { useState, useEffect } from "react";
import SocialApi from "../../api/SocialApi";
import { Link, useParams } from "react-router-dom";
import {
  IoEyeOutline,
  IoHeartOutline,
  IoChatboxOutline,
} from "react-icons/io5";

const SocialDetail = () => {
  const navigate = useNavigate();
  const params = useParams().socialId; // router에서 지정한 :social 을 붙여줘야함!!

  const [socialDetail, setSocialDetail] = useState("");
  const [loading, setLoading] = useState(false);
  // web storage get/set
  const getUserId = window.sessionStorage.getItem("userId");
  const setSocialId = window.sessionStorage.setItem(
    "social_id",
    socialDetail.socialId
  );

  const onClickUpdate = async () => {
    navigate(`/social/${params}/update`);
  };

  const onClickDelete = async () => {
    const res = await SocialApi.socialDelete(params);
    console.log("삭제 버튼 클릭");
    if (res.data.result === "SUCCESS") {
      console.log("삭제 완료 !");
      alert("삭제 완료");
    } else {
      console.log("삭제 실패 ㅜ");
      console.log(res.data.result);
    }
  };
  useEffect(() => {
    const socialData = async () => {
      setLoading(true);
      try {
        console.log(params);
        const response = await SocialApi.socialDetail(params);
        setSocialDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    socialData();
  }, []);
  
  if (loading) {
    return <DetailBox>조금만 기다려주세요...👩‍💻</DetailBox>;
  }
  return (
    <div>
      <DetailBox>
        <div className="subtitle">Board Detail Page</div>
        <div className="parentBox">
          <div key={socialDetail.socialId}>
            <div className="content-title">{socialDetail.title}</div>
            <div className="post-info">
              <div className="publisher-info">
                <img className="photos" src={Photo} alt="프로필 사진"></img>
                <span className="nickName">{socialDetail.user}</span>
                <span className="date">| {socialDetail.postDate}</span>
              </div>
              <div className="icon-box">
                <IoEyeOutline />
                <span className="count">{socialDetail.view}</span>
                <IoHeartOutline />
                <span className="count">{socialDetail.like}</span>
                <IoChatboxOutline />
                <span className="count">{socialDetail.comment}</span>
              </div>
            </div>
            <hr />
            <div className="content-text">{socialDetail.content}</div>
            <div className="hashtag-box">
              <span className="hashtag">{socialDetail.tag}</span>
              <Link to="/social">
                <button className="deleteBt" onClick={onClickDelete}>
                  삭제
                </button>
              </Link>
              <button className="updateBt" onClick={onClickUpdate}>
                수정
              </button>
            </div>
            <hr />
            <CommentWriter />
            <CommentList />
          </div>
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
