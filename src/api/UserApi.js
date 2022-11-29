import axios from "axios";

const HEADER = { "Content-type": "application/json; charset=UTF-8" };
const HEADERFILE = { "Content-type": "multipart/form-data" };

const UserApi = {
  //회원가입
  memberReg: async function (id, pwd, nickname, phone) {
    const userObj = {
      userEmail: id,
      password: pwd,
      userNickname: nickname,
      phone: phone,
    };
    return await axios.post("register", userObj, HEADER);
  },

  //이미지 업로드
  imageUpload: async function (fd) {
    return await axios.post("imageUpload", fd, HEADERFILE);
  },

  //로그인
  userLogin: async function (id, pwd) {
    const loginObj = {
      userEmail: id,
      password: pwd,
    };
    return await axios.post("login", loginObj, HEADER);
  },
};

export default UserApi;
