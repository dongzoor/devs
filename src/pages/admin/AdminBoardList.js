import Table from 'react-bootstrap/Table';
import './admin.css'
import styled from "styled-components";
import Adminheader from './Adminheader';

const Adcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(90deg, #ffe7e8, #8da4d0);
`;

function AdminBoardList() {
  return (
    <>
      <Adminheader></Adminheader>
      <Adcontainer>
        <Table striped bordered hover size="sm" className='table_adboardlist'>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>생성시간</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>인원모집합니다</td>
              <td>작성자1</td>
              <td>2022-11-30 08:34 </td>
              <td><button className='adbutton delete'><span>삭제</span></button>
              </td>
            </tr>

          </tbody>
        </Table>
      </Adcontainer>
    </>
  );
}

export default AdminBoardList;
