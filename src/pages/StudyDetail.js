import styled from "styled-components";


const DetailContainer = styled.div`
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  padding: 15px;
  background-color: #FFF;
  border-radius: 25px;
`
const StudyDetail = () => {


  return (
    <>
      <div className="card" style={{ "width": "40vw", "margin": "0 auto", "marginTop": "5vh", "boxShadow": "0px 0px 10px -2px #FFF" }}>
        <img src="https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  )
}

export default StudyDetail;