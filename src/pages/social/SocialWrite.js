import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialApi from "../../api/SocialApi";
import { storageService } from "../../lib/api/fbase";
import { v4 as uuidv4 } from "uuid";
import {
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";

const SocialWrite = () => {
  const getUserId = "3";
  // const userNickname = sessionStorage.getItem("userNickname");
  // const getUserId = window.sessionStorage.getItem("userId");
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const { attachment, setAttachment } = useState();

  let attachmentUrl = null;

  const onChangeTitle = (title) => setTitleInput(title.target.value);
  const onChangeContent = (content) => setContentInput(content.target.value);
  const onChangeTag = (tag) => setTagInput(tag.target.value);
  
  // 프로필 이미지 firebase 저장 및 미리 보여주기
  const onFileChange = (e) => {
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
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();

    if (attachment !== "") {
      const attachmentRef = ref(storageService, `/SOCIAL/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
    }

    const res = await SocialApi.socialWrite(
      getUserId,
      titleInput,
      contentInput,
      tagInput,
      attachmentUrl
    );
    console.log("제출 버튼 클릭");
    if (res.data === true) {
      window.alert("Social 게시글 작성 완료 !");
    } else {
      window.alert("Social 게시글 작성 실패 ㅜ");
      console.log(res.data);
    }
  };

  return (
    <WriteBox>
      <div className="subtitle">Write anything you want 👩🏻‍💻✨</div>
      <div className="parentBox">
        <label>제목</label>
        <textarea
          className="title"
          placeholder="게시글의 제목을 입력해주세요."
          value={titleInput}
          onChange={onChangeTitle}
        ></textarea>
        <hr />
        <label>내용</label>
        <textarea
          className="content"
          placeholder="개발, 비개발 무엇이든 작성해주세요 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧^"
          value={contentInput}
          onChange={onChangeContent}
        />
        <hr />
        <label>#해시태그</label>
        <textarea
          className="hashTag"
          placeholder="#이직 #프리랜서"
          value={tagInput}
          onChange={onChangeTag}
        />
        <input type="file" accept="image/*" onChange={onFileChange}/>
        {attachment && (
          <div>
            <img
              src={attachment}
              width="50px"
              height="50px"
            ></img>
          </div>
        )}
        <Link to="/social">
          <button className="submitBt" onClick={onClickSubmit}>
            제 출
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
  .submitBt {
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
export default SocialWrite;
