
import Table from 'react-bootstrap/Table';
import './admin.css'
import styled from "styled-components";



  import axios from "axios";
import { useEffect, useState } from "react";

function AdminMemberList() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const MemberData = async () => {
          try {
            const response = await axios.get("http://localhost:8211/employee/list")
            setMembers(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }


    };

        MemberData();
    }, []);

    const Adcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(90deg, #ffe7e8, #8da4d0);
  `;
  
  

    return (

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
       <td><button className='adbutton delete'>삭제</button></td>
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
   

   
  );
}

export default AdminMemberList;