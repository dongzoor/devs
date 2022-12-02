import axios from "axios";
const HEADER = "application/json";
const HEADER_IMG = 'multipart/form-data';
const DEVS_DOMAIN = "http://localhost:8211";

const StudyApi = {

  studyDetail: async function (studyId) {
    // const studyObj = {
    //   studyId: studyID,
    // };
    return await axios.get(DEVS_DOMAIN + "/studies/" + studyId, HEADER);
  },

  studyList: async function () {
    return await axios.get(DEVS_DOMAIN + "/studies", HEADER);
  },
}

export default StudyApi;