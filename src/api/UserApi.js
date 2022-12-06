import axios from "axios";

// const DOMAIN = "http://localhost:8211/";
const HEADER = { "Content-type": "application/json; charset=UTF-8" };

const UserApi = {
  //회원가입
  userReg: async function (id, pwd, nickname, phone, profileImage) {
    const userObj = {
      userEmail: id,
      password: pwd,
      userNickname: nickname,
      phone: phone,
      profileImage: profileImage,
    };
    return await axios.post("register", userObj, HEADER);
  },

  //로그인
  userLogin: async function (id, pwd) {
    const loginObj = {
      userEmail: id,
      password: pwd,
    };
    return await axios.post("login", loginObj, HEADER);
  },

  //회원정보 수정
  userUpdate: async function (
    id,
    pwd,
    inputPwNow,
    nickname,
    phone,
    profileImage
  ) {
    const UpdateObj = {
      userEmail: id,
      password: pwd,
      inputPwNow: inputPwNow,
      userNickname: nickname,
      phone: phone,
      profileImage: profileImage,
    };
    return await axios.put("update", UpdateObj, HEADER);
  },
};

export default UserApi;
