import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import SocialApi from "../../api/SocialApi";

const SocialUpdate = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams().socialId;
  const getUserId = window.sessionStorage.getItem("userId");

  const [socialDetail, setSocialDetail] = useState(""); // 기존 데이터 가져옴

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const onChangeTitle = (title) => setTitleInput(title.target.value);
  const onChangeContent = (content) => setContentInput(content.target.value);
  const onChangeTag = (tag) => setTagInput(tag.target.value);

  // 수정 버튼 클릭 시
  const onClickEdit = async () => {
    const res = await SocialApi.socialUpdate(
      params,
      titleInput,
      contentInput,
      tagInput
    );
    console.log("수정 버튼 클릭");
    if (res.data === true) {
      console.log("수정 완료 !!");
      alert("Social 게시글 수정 완료 !");
    } else {
      console.log("수정 실패 ㅜㅜ");
      console.log(res.data);
    }
  };

  useEffect(() => {
    const socialData = async () => {
      setLoading(true);
      try {
        console.log(params);
        const response = await SocialApi.socialDetail(params);
        // 기존 데이터를 useState 값에 다 따로 받아주기 !
        setTitleInput(response.data.title);
        setContentInput(response.data.content);
        setTagInput(response.data.tag);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    socialData();
  }, []);
  if (loading) {
    return <WriteBox>조금만 기다려주세요...👩‍💻</WriteBox>;
  }
  return (
    <WriteBox>
      <div className="subtitle">Write anything you want 👩🏻‍💻✨</div>
      <div className="parentBox">
        <label>제목</label>
        <textarea
          className="title"
          value={titleInput}
          onChange={onChangeTitle}
        ></textarea>
        <hr />
        <label>내용</label>
        <textarea
          className="content"
          value={contentInput}
          onChange={onChangeContent}
        />
        <hr />
        <label>#해시태그</label>
        <textarea className="hashTag" value={tagInput} onChange={onChangeTag} />
        <input type="file" />
        <Link to="/social">
          <button className="editBt" onClick={onClickEdit}>
            수 정
          </button>
        </Link>
      </div>
    </WriteBox>
  );
};

const WriteBox = styled.div`
  & > * {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
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
  label {
    margin: 10px 20px;
  }
  textarea {
    padding: 10px;
    margin: 0px 20px;
    resize: none;
    box-sizing: border-box;
    box-shadow: 5px 5px 10px rgba(0, 0, 255, 0.2);
    border: none;
    border-radius: 10px;
    color: rgb(98, 98, 112);
    background-color: rgba(245, 245, 245, 255);
    &::placeholder {
      color: rgb(98, 98, 112);
    }
  }
  .title {
    height: 50px;
  }
  .content {
    height: 600px;
  }
  .hashTag {
    height: 50px;
  }
  hr {
    width: 98%;
    height: 1px;
    border: 0;
    background-color: rgba(209, 209, 209, 0.8);
  }
  .hashTag-input {
    margin: 5px 20px;
  }
  .editBt {
    width: 25rem;
    height: 40px;
    margin: 10px auto;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 255, 0.2);
    transition-duration: 0.3s;
    &:hover {
      color: white;
      background-color: rgba(190, 100, 255, 0.5);
      box-shadow: 5px 5px 10px rgba(190, 100, 255, 0.2);
      left: 5px;
      margin-top: 5px;
      box-shadow: none;
    }
  }
`;
export default SocialUpdate;
