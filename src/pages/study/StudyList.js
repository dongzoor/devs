import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudyApi from "../../lib/api/StudyApi";
import { useEffect, useState } from "react";

const Box = styled.div`
  margin: -50px;
  padding: 0;
  font-family: Raleway, Pretendard Std;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

const Hr = styled.div`
  width: 650px;
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8c8c inset;
  margin: 0 auto;
`
const CardContainer = styled.div`
  width: 50vw;
  margin: 0 auto;

  & + & {
    margin: 50px auto;
  }
`

const Study = () => {
  const [studyList, setStudyList] = useState("");
  useEffect(() => {
    const StudyData = async () => {
      try {
        const response = await StudyApi.studyList();
        setStudyList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    StudyData();
  }, []);

  return (
    <>
      <Box>
        <div className="input-group rounded" style={{ "width": "500px", "margin": "50px auto" }}>
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        {studyList &&
          studyList.map((list) =>
            // 이미지 url이 있으면 -> 이미지 Card, 없으면 노말 Card 로 뿌려주면 된다,
            <li key={list.id}>
              <CardContainer>
                <div className="card" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 24px #5c5696" }}>
                  <div className="card-body">
                    <h5 className="card-title">{`${list.title}`}</h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ "float": "right" }}>{`${list.writer}`}</h6>
                    <br />
                    <p className="card-text"> {`${list.content}`}</p>
                    <p style={{ "float": "right" }}><FontAwesomeIcon icon={faHeart} /></p>
                  </div>
                </div>
              </CardContainer>
            </li>
          )}
        <CardContainer>
          <div className="card mb-3" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 24px #5c5696" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">이미지 들어간 카드</h5>
                  <h6 className="card-subtitle mb-2 text-muted" style={{ "float": "right" }}>작성자</h6>
                  <br />
                  <p className="card-text"> 내용입니다~~</p>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
      </Box>
    </>
  );
}

export default Study;