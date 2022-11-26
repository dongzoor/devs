import axios from "axios";

const HEADER = { "Content-type": "application/json; charset=UTF-8" };

const UserApi = {
  //회원가입
  memberReg: async function (id, pwd, name, phone) {
    const memberObj = {
      userName: id,
      password: pwd,
      userNickname: name,
      phone: phone,
    };
    return await axios.post("register", memberObj, HEADER);
  },
};

export default UserApi;
