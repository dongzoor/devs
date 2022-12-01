import React from "react";
import styled from "styled-components";
import Photo from "./pic/짱난.gif";
import CommentList from "./components/CommentList";
import CommentWriter from "./components/CommentWriter";
import Nav from "../../containers/common/Nav";
import { useState, useEffect } from "react";
import SocialApi from "../../api/SocialApi";
import { useParams } from "react-router-dom";
import {
  IoEyeOutline,
  IoHeartOutline,
  IoChatboxOutline,
} from "react-icons/io5";

const SocialDetail = () => {
  let { socialId } = useParams();
  const [socialDetail, setSocialDetail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const socialData = async () => {
      setLoading(true);
      try {
        console.log(socialId);
        console.log(typeof(socialId));
        const response = await SocialApi.socialDetail(socialId);
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
      <Nav />
      <p>현재 페이지의 파라미터는 {socialId} 입니다.</p>
      <DetailBox>
        <div className="subtitle">Board Detail Page</div>
        <div className="parentBox">
          {socialDetail &&
            socialDetail.map((social) => (
              <div key={social.socialId}>
                <div className="content-title">{social.title}</div>
                <div className="post-info">
                  <div className="publisher-info">
                    <img className="photos" src={Photo} alt="프로필 사진"></img>
                    <span className="nickName">{social.user}</span>
                    <span className="date">| {social.postDate}</span>
                  </div>
                  <div className="icon-box">
                    <IoEyeOutline />
                    <span className="count">{social.view}</span>
                    <IoHeartOutline />
                    <span className="count">{social.like}</span>
                    <IoChatboxOutline />
                    <span className="count">{social.comment}</span>
                  </div>
                </div>
                <hr />
                <div className="content-text">{social.content}</div>
                <div className="hashtag-box">
                  <span className="hashtag">{social.tag}</span>
                </div>
                <hr />
                {/* <CommentWriter />
                <CommentList /> */}
              </div>
            ))}
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
