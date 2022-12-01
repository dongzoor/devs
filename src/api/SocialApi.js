import axios from "axios";

const HEADER = "application/json";
const NGB_DOMAIN = "http://localhost:8090/";

const SocialApi = {
  // 댓글 조회 api
  commentList: async function(boardId) {
    const regCmd = {
      cmd: "CommentList",
      id: boardId,
    };
    return await axios.post(NGB_DOMAIN + "CommentListServlet", regCmd, HEADER);
  },
  // 댓글 입력 api
  insertComment: async function(id, content, boardId) {
    console.log(
      "아이디 : " + id + "댓글 내용 : " + content + "게시판 번호 : " + boardId
    );
    const regCmd = {
      id: id,
      content: content,
      boardId: boardId,
    };
    return await axios.post(NGB_DOMAIN + "InsertCommentServlet",regCmd,HEADER);
  },
  // 댓글 삭제 api
  deleteComment: async function(postId) {
    console.log("댓글 번호 : " + postId);
    const regCmd = {
      postId: String(postId),
    };
    return await axios.post(
      NGB_DOMAIN + "DeleteCommentServlet",
      regCmd,
      HEADER
    );
  },
};

export default SocialApi;