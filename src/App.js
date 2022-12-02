import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/containers/common/Nav'
import StudyList from './pages/study/StudyList';
import StudyWrite from './pages/study/StudyWrite'
import StudyDetail from './pages/study/StudyDetail';
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FindInfo from "./pages/findInfo/FindInfo";
import EditInfo from "./pages/editInfo/EditInfo";
import SocketTest from "./pages/chat/SocketTest";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path= "/AdminBoarList"  element={<AdminBoardList />} />
      <Route path= "/AdminMemberList"  element={<AdminMemberList/>} /> */}
        {/* 작업하느라 주석처리 했습니다... 죄송합니다... - J2 */}
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/FindInfo" element={<FindInfo />} />
        <Route path="/EditInfo" element={<EditInfo />} />
        <Route path="/studies" element={<StudyList />} />
        <Route path="/studies/Write" element={<StudyWrite />} />
        <Route exact path="/studies/:studyId" element={<StudyDetail />} />
        <Route path="/Socket" element={<SocketTest />} />
        {/* <Login/>   */}
        {/* <Admin /> */}
      </Routes>
    </Router>
  );
}

export default App;
