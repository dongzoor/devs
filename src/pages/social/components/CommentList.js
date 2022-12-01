import styled from "styled-components";
import SocialApi from "../../../api/SocialApi";
import Photo from "../pic/짱난.gif";
import React from "react";
import { useState, useEffect } from "react";

const CommentList = () => {
  const getBoardId = window.localStorage.getItem("fb_id");
  const getUserId = window.localStorage.getItem("userId"); // 삭제시 현 유저아이디 대조용

  console.log("자유게시판 게시물 ID : " + getBoardId);
  const [commentDetail, setCommentDetail] = useState("");
  const [inputContent, setInputContent] = useState(""); // 댓글 내용 입력 받을 객체
  const [deleteComplete, setDeleteComplete] = useState(false);

  // 댓글 조회
  useEffect(() => {
    const CommentData = async () => {
      try {
        const response = await SocialApi.commentList(getBoardId);
        setCommentDetail(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    CommentData();
  }, [deleteComplete, inputContent]);

  // 삭제 버튼 클릭 시
  const onClickButton = async (postId) => {
    console.log("댓글 삭제 버튼 클릭");
    console.log("postid: " + postId);
    const res = await SocialApi.deleteComment(postId);
    console.log(res.data.result);
    // 댓글수 업데이트 기능(HN추가)
    // const res2 = await Api.fBoardComment(getBoardId);
    // console.log(res2.data.result);
    if (res.data.result === "OK") {
      setDeleteComplete(true);
    } else setDeleteComplete(false);
  };

  return (
    <BOX>
      {/* <button
        className="deleteBt"
        onClick={() => onClickButton(comment.postId)}
      >
        삭제
      </button> */}
      <div className="comment-box">
        <div className="child-box">
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="comment-writer">아이스킹</span>
          <span className="comment-date">| 22.11.28</span>
        </div>
        <p className="comment-text">
          이건 회사 생각도 궁금하네요. 회사에 면담 해보시는게 좋아보여요. 이야기
          해보고 아니다 싶으면 이직이죠.
        </p>
      </div>
      <div className="comment-box">
        <div className="child-box">
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="comment-writer">손흥민</span>
          <span className="comment-date">| 22.11.29</span>
        </div>
        <p className="comment-text">
          아 아무리 신입이래도 프론트만 시킨다면... 이직 준비 시작하시는게 좋을
          것 같네요 ㅜ,,
        </p>
      </div>
    </BOX>
  );
};
const BOX = styled.div`
  margin: 5px 20px;
  * {
    font-family: "Song Myung", serif;
  }
  .comment-box {
    display: flex;
    flex-direction: column;
  }
  .child-box {
    display: flex;
    align-items: center;
  }
  .comment-writer {
    padding: 5px;
  }
  .comment-date {
    color: grey;
    padding: 5px;
    font-size: 0.9em;
  }
  .comment-text {
    padding: 0px 5px 20px;
    border-bottom: 1px dashed rgba(209, 209, 209, 0.8);
  }
`;

export default CommentList;
