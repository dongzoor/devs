import Table from 'react-bootstrap/Table';
import './admin.css'

function AdminBoardList() {
    return (
      <div className='table_adboardlist'>
      <Table striped bordered hover>
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
          <td><button class="admbutton button--winona button--border-thin button--round-s button--size-s" data-text="삭제"><span>삭제</span></button>
        </td>
        </tr>
       
      </tbody>
    </Table>
      </div>
    );
  }
  
  export default AdminBoardList;
 