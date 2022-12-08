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
// 어드민이 소셜게시판 별개 조회
  socialDetail: async function (social_Id) {
    return await axios.get(WN_DOMAIN + "social/" + social_Id, HEADER);
  },

// 어드민이 소셜게시판 삭제
  socialAdDelete: async function (socialId) {
    console.log("소셜아이디 : " + socialId);
    return await axios.delete(WN_DOMAIN + "adSocialList/" + socialId, HEADER);  
  },
  // socialAdDelete: async function (socialId) {
  //   console.log("소셜아이디 : " + socialId);
  //   return await axios.delete(WN_DOMAIN + "SocialList/" + socialId, HEADER);  
  // },


  socialUpdate: async function (socialId, title, content, tag, image) {
    const updateObj = {
      title: title,
      content: content,
      tag: tag,
      // image: image, // firebase 성공하면
    };
    return await axios.put(
      WN_DOMAIN + "adSocialList/" + socialId + "/update",
      updateObj,
      HEADER
    );
  },


  // 어드민이 멤버삭제
  deleteAdmem: async function () {
    return await axios.delete(
      WN_DOMAIN + "Delete", HEADER);
  },

  //스터디 게시판 삭제
  deleteBoard: async function (study_id) {  
    return await axios.delete(
      WN_DOMAIN + "deleteAdStudy/" + study_id , HEADER);
  }



};
export default AdminApi;