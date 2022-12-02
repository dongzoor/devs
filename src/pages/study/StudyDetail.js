import styled from "styled-components";
import StudyApi from "../../lib/api/StudyApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailContainer = styled.div`
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  padding: 15px;
  background-color: #FFF;
  border-radius: 25px;
`
const StudyDetail = () => {
  const params = useParams().studyId;
  const [studyDetail, setStudyDetail] = useState("");

  useEffect(() => {
    const StudyData = async () => {
      try {
        const response = await StudyApi.studyDetail(parseInt(params));
        setStudyDetail(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    StudyData();
  }, []);

  const chatTest = async () => {
    try {
      const res = await StudyApi.chatRoomOpen("테스트 채팅방");
      console.log(res.data);
      window.localStorage.setItem("chatRoomId", res.data);
      window.location.replace("/Socket");
    } catch {
      console.log("error");
    }
  }

  return (
    <>
      {studyDetail &&
        <div className="card" style={{ "width": "40vw", "margin": "0 auto", "marginTop": "5vh", "boxShadow": "0px 0px 10px -2px #FFF" }}>
          <img src={`${studyDetail.imgUrl}`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{`${studyDetail.title}`}</h5>
            <h6 className="card-subtitle mb2 text-muted" style={{ "float": "right" }}>{`${studyDetail.writer}`}</h6>
            <br />
            <p className="card-text">{`${studyDetail.content}`}</p>
          </div>
          <button onClick={chatTest}>채팅</button>
        </div>
      }
    </>
  )
}

export default StudyDetail;