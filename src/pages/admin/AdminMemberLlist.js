
import Table from 'react-bootstrap/Table';
import './admin.css'
import styled from "styled-components";


import { useEffect, useState } from "react";
import Adminheader from './Adminheader';
import AdminApi from '../../api/AdminApi';

function AdminMemberList() {

  const [members, setMembers] = useState([]); // 멤버조회
  const [deleteadmem, setDeleteadmem] = useState(false); //멤버삭제

  useEffect(() => {
    const MemberData = async () => {
      try {
        const response = await AdminApi.admemberList()
        setMembers(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    MemberData();
  }, []);

  const clickDelMem = async () => {
    console.log("멤버 삭제 버튼 클릭");
    const response = await AdminApi.deleteAdmem();
    console.log(response.data.result);
    if (response.data.result === "OK") {
      setDeleteadmem(true);
    } else setDeleteadmem(false);
  };

  const Adcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(90deg, #ffe7e8, #8da4d0);
  `;



  return (
    <>
      <Adminheader></Adminheader>
      <Adcontainer>
        <Table striped bordered hover size="sm" className='table_admemberlist'>
          <thead>
            <tr>

              <th>이메일아이디</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>가입시간</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map((list) => (
                <tr key={list.id}>

                  <td>{list.companyId}</td>
                  <td>{list.name}</td>
                  <td>{list.address}</td>
                  <td>가입시간</td>
                  <td><button className='adbutton delete'onClick={clickDelMem}>삭제</button></td>
                </tr>
              ))}
            {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
          </tbody>
        </Table>


      </Adcontainer>

    </>

  );
}

export default AdminMemberList;