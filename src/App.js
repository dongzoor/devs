
import './App.css';
import Admin from './pages/admin/Admin';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminBoardList from './pages/admin/AdminBoarList';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminMemberList from './pages/admin/AdminMemberLlist';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path= "/AdminBoarList"  element={<AdminBoardList />} />
      <Route path= "/AdminMemberList"  element={<AdminMemberList/>} />
      </Routes>
    </Router>
    {/* <Login/>   */}
    {/* 화면에 제꺼 출력이안되서 잠시 막아놨어요 */}
      <Admin/>
    </>
  );
}

export default App;
