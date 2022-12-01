import axios from "axios";

const DOMAIN = "http://localhost:8211/";
const HEADER = "application/json";

const SocialApi = {
  // social 메인 : 게시글 ALL 조회
  socialList: async function () {
    return await axios.get(DOMAIN + "social", HEADER);
  },
  // social detail page 조회
  socialDetail: async function (socialId) {
    const detailObj = {
      socialId: parseInt(socialId),
    };
    return await axios.get(DOMAIN + "social/", detailObj, HEADER);
  },

  // --------------------------------------댓글 수정 전--------------------------------------------------------
  // 댓글 조회 api
  commentList: async function (boardId) {
    const cmtObj = {
      cmd: "CommentList",
      id: boardId,
    };
    return await axios.post(DOMAIN + "comment", cmtObj, HEADER);
  },
  // 댓글 입력 api
  insertComment: async function (id, content, boardId) {
    console.log(
      "아이디 : " + id + "댓글 내용 : " + content + "게시판 번호 : " + boardId
    );
    const regObj = {
      id: id,
      content: content,
      boardId: boardId,
    };
    return await axios.post(DOMAIN + "regcomment", regObj, HEADER);
  },
  // 댓글 삭제 api
  deleteComment: async function (postId) {
    console.log("댓글 번호 : " + postId);
    const deleteObj = {
      postId: String(postId),
    };
    return await axios.post(DOMAIN + "deleteComment", deleteObj, HEADER);
  },
};

export default SocialApi;
