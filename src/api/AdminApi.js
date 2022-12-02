import axios from "axios";

const HEADER = "application/json";
const WN_DOMAIN = "http://localhost:8211/";

const AdminApi = {
  // 어드민이 멤버 조회 api
  admemberList: async function () {
    //   const admemCmd = {
    //     cmd: "admemlist"

    //   };
    return await axios.get(WN_DOMAIN + "employee/list", HEADER);
  },


  // 어드민이 스터디게시판 조회
  adstudyboardList: async function () {
    return await axios.get(WN_DOMAIN + "studies", HEADER);
  },

  // 어드민이 멤버삭제
  deleteAdmem: async function () {
    return await axios.delete(
      WN_DOMAIN + "Delete", HEADER);
  }



};
export default AdminApi;