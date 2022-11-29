import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Box = styled.div`

`
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

  return (
    <>
      <Box>
        <div className="input-group rounded" style={{ "width": "500px", "margin": "50px auto" }}>
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span className="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <CardContainer>
          <div className="card" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 10px -2px #FFF" }}>
            <div className="card-body">
              <h5 className="card-title">제목</h5>
              <h6 className="card-subtitle mb-2 text-muted">작성자</h6>
              <p className="card-text"> 내용입니다</p>
              <p style={{ "float": "right" }}><FontAwesomeIcon icon={faHeart} /></p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="card mb-3" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 10px -2px #FFF" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">이미지 들어간 카드</h5>
                  <h6 className="card-subtitle mb-2 text-muted">작성자</h6>
                  <p className="card-text"> 내용입니다~~</p>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="card" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 10px -2px #FFF" }}>
            <div className="card-body">
              <h5 className="card-title">제목</h5>
              <h6 className="card-subtitle mb-2 text-muted"> 작성자 </h6>
              <p className="card-text"> 내용입니다~~</p>
              <p style={{ "float": "right" }}><FontAwesomeIcon icon={faHeart} /></p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="card mb-3" style={{ "width": "40vw", "margin": "0 auto", "boxShadow": "0px 0px 10px -2px #FFF" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">이미지 들어간 카드</h5>
                  <h6 className="card-subtitle mb-2 text-muted">작성자</h6>
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