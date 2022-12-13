import axios from "axios";
const HEADER = "application/json";
const HEADER_IMG = 'multipart/form-data';
const DEVS_DOMAIN = "http://localhost:8211";

const StudyApi = {

  studyDetail: async function (studyId) {
    return await axios.get(DEVS_DOMAIN + "/study/" + studyId, HEADER);
  },

  studyList: async function () {
    return await axios.get(DEVS_DOMAIN + "/studies", HEADER);
  },

  studyWrite: async function (userNickname, title, content, imgUrl) {
    const studyObj = {
      title: title,
      content: content,
      imgUrl: imgUrl,
      writer: userNickname
    }
    return await axios.post(DEVS_DOMAIN + "/study/write", studyObj, HEADER)
  },

  studyUpdate: async function (studyId, title, content, imgUrl) {
    const studyObj = {
      title: title,
      content: content,
      imgUrl: imgUrl,
    }
    return await axios.put(DEVS_DOMAIN + "/study/edit/" + studyId, studyObj, HEADER)
  },

  studyUpdateDetail: async function (studyId) {
    return await axios.get(DEVS_DOMAIN + "/study/edit/" + studyId, HEADER);
  },
}

export default StudyApi;