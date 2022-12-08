import Table from 'react-bootstrap/Table';
import './admin.css'
import styled from "styled-components";
import Adminheader from './Adminheader';
import { useEffect, useState } from 'react';
import AdminApi from '../../api/AdminApi';
import Loading from '../../utill/Loading';
import { Link, useParams } from 'react-router-dom';
import SocialApi from "../../api/SocialApi";

const Adcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
background: linear-gradient(90deg, #ffe7e8, #8da4d0);
font-family: 'Gowun Dodum', sans-serif;
`;



function AdminScBoardList() {

    const params = useParams().socialId;
    const [adSocialboard, setAdSocialboard] = useState([]); // 스터디게시판 조회
    const [loading, setLoading] = useState(false);

    // 게시판 아이디별 조회
    const onClickBoardList = (val) => {
        console.log("게시판 이동 : " + val);
        window.localStorage.setItem("Detail", val);
        window.location.replace("/study/detail");
    };

    const onClickDelete = async () => {
        const res = await SocialApi.socialDelete(params);
        console.log("삭제 버튼 클릭");
        if (res.data.result === "SUCCESS") {
          console.log("삭제 완료 !");
          alert("삭제 완료");
        } else {
          console.log("삭제 실패 ㅜ");
          console.log(res.data.result);
        }
      };


    useEffect(() => {
        const BoardData = async () => {
            setLoading(true);
            try {
                const response = await AdminApi.adSocialboardList()
                setAdSocialboard(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };

        BoardData();
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }




    return (
        <>
            <Adminheader></Adminheader>
            <Adcontainer>
                <div>
                    <h1 className='adTitle'> 자유 게시판  리스트</h1>
                    <Table striped bordered hover size="sm" className='table_adboardlist'>
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>내용</th>
                                <th>작성자</th>
                                <th>조회수</th>
                                <th>생성시간</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adSocialboard &&
                                adSocialboard.map((list) => (
                                    <tr key={list.social_id}>

                                        <td>{list.social_title}</td>
                                        <td>{list.social_content.substr(0, 7)}...</td>
                                        <td>{list.user_id}</td>
                                        <td>{list.social_view}</td>
                                        <td>{list.social_update}</td>
                                        <td>
                                            <button className='adbutton delete' onClick={onClickDelete}>삭제</button>
                                            <Link to={`/social/${list.social_id}`} style={{ textDecoration: "none" , color : "inherit"}}><button className='adbutton serch' >조회</button></Link>
                                            <button className='adbutton edit'>수정</button>
                                            <button className='adbutton warning'>미정</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </Adcontainer>
        </>
    );
}

export default AdminScBoardList;
