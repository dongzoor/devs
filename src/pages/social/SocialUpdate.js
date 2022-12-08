import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { storageService } from "../../lib/api/fbase";
import { v4 as uuidv4 } from "uuid";
import SocialApi from "../../api/SocialApi";
import {
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";

const SocialUpdate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const params = useParams().socialId;
  const getUserId = window.sessionStorage.getItem("userId");

  const [socialDetail, setSocialDetail] = useState(""); // 기존 데이터 가져옴

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [attachment, setAttachment] = useState("");

  // 사진을 안올릴 경우 들어갈 수 있도록 빈 값 지정
  let attachmentUrl = " ";

  const onChangeTitle = (title) => setTitleInput(title.target.value);
  const onChangeContent = (content) => setContentInput(content.target.value);
  const onChangeTag = (tag) => setTagInput(tag.target.value);

  // 첨부이미지 firebase 저장&미리보기
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

  // 수정 버튼 클릭 시
  const onClickEdit = async () => {
    if (attachment !== "") {
      // 파일 저장 경로 지정
      const attachmentRef = ref(storageService, `/SOCIAL/${uuidv4()}`);
      // 파일 storage에 저장
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log("이미지 주소 : " + attachmentUrl);
    }

    const res = await SocialApi.socialUpdate(
      params,
      titleInput,
      contentInput,
      tagInput,
      attachmentUrl
    );
    console.log("수정 버튼 클릭");
    if (res.data === true) {
      navigate(`/social/${params}/update`);
      alert("Social 게시글 수정 완료 !");
    } else {
      alert("Social 게시글 수정 실패 ");
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
        setAttachment(response.data.image);
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
        <input type="file" accept="image/*" onChange={onFileChange} />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt=""></img>
          </div>
        )}
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
