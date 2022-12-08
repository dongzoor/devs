import axios from "axios";

const HEADER = "application/json";
const WN_DOMAIN = "http://localhost:8211/";

const AdminApi = {
  // 어드민이 멤버 조회 api
  admemberList: async function () {
    //   const admemCmd = {
    //     cmd: "admemlist"

    //   };
    return await axios.get(WN_DOMAIN + "adUserList", HEADER);
  },


  // 어드민이 스터디게시판 전체 조회
  adstudyboardList: async function () {
    return await axios.get(WN_DOMAIN + "adStudies", HEADER);
  },

  // 어드민이 소셜게시판 전체 조회
  adSocialboardList: async function () {
    return await axios.get(WN_DOMAIN + "adSocialList", HEADER);
  },

  socialDetail: async function (socialId) {
    return await axios.get(WN_DOMAIN + "social/" + socialId, HEADER);
  },


  // 어드민이 멤버삭제
  deleteAdmem: async function () {
    return await axios.delete(
      WN_DOMAIN + "Delete", HEADER);
  },

  deleteBoard: async function (study_id) {
    const deletStudyId = {
      study_id : study_id,
    };
    return await axios.delete(
      WN_DOMAIN + "deleteAdStudy/{studyId}",deletStudyId , HEADER);
  }



};
export default AdminApi;