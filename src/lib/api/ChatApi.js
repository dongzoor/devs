import axios from "axios";
const HEADER = 'application/json';
const HEADER_IMG = 'multipart/form-data';
const DEVS_DOMAIN = "http://localhost:8211/";


const ChatApi = {
  chatRoomOpen: async function (name) {
    const chatObject = {
      "name": name
    }
    return await axios.post(DEVS_DOMAIN + "chat", chatObject, HEADER);
  },

};
export default ChatApi;