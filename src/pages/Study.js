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
        <div class="input-group rounded" style={{ "width": "500px", "margin": "50px auto" }}>
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <CardContainer>
          <div class="card" style={{ "width": "40vw", "margin": "0 auto", "box-shadow": "0px 0px 10px -2px #FFF" }}>
            <div class="card-body">
              <h5 class="card-title">제목</h5>
              <h6 class="card-subtitle mb-2 text-muted">작성자</h6>
              <p class="card-text"> 내용입니다</p>
              <p style={{ "float": "right" }}><FontAwesomeIcon icon={faHeart} /></p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div class="card mb-3" style={{ "width": "40vw", "margin": "0 auto", "box-shadow": "0px 0px 10px -2px #FFF" }}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <h5 class="card-title">이미지 들어간 카드</h5>
                  <h6 class="card-subtitle mb-2 text-muted">작성자</h6>
                  <p class="card-text"> 내용입니다~~</p>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div class="card" style={{ "width": "40vw", "margin": "0 auto", "box-shadow": "0px 0px 10px -2px #FFF" }}>
            <div class="card-body">
              <h5 class="card-title">제목</h5>
              <h6 class="card-subtitle mb-2 text-muted"> 작성자 </h6>
              <p class="card-text"> 내용입니다~~</p>
              <p style={{ "float": "right" }}><FontAwesomeIcon icon={faHeart} /></p>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div class="card mb-3" style={{ "width": "40vw", "margin": "0 auto", "box-shadow": "0px 0px 10px -2px #FFF" }}>
            <div class="row g-0">
              <div class="col-md-6">
                <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <h5 class="card-title">이미지 들어간 카드</h5>
                  <h6 class="card-subtitle mb-2 text-muted">작성자</h6>
                  <p class="card-text"> 내용입니다~~</p>
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