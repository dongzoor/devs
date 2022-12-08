import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminBoardList from "./pages/admin/AdminBoardList";
import AdminMemberList from "./pages/admin/AdminMemberList";
import CheckPwd from "./pages/editInfo/CheckPwd";
import EditInfo from "./pages/editInfo/EditInfo";
import FindInfo from "./pages/findInfo/FindInfo";
import Nav from '../src/containers/common/Nav'
// import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import SocketTest from "./pages/chat/SocketTest";
import AdminScBoardList from "./pages/admin/AdminScBoardList";
import SocialDetail from "./pages/social/SocialDetail";
import SocialList from "./pages/social/SocialList";
import SocialWrite from "./pages/social/SocialWrite";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";
import StudyWrite from "./pages/study/StudyWrite";
import SocialUpdate from "./pages/social/SocialUpdate";
import AdminEditUser from "./pages/admin/AdminEditUser";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="/Admin" element={<Admin />} /> */}
        <Route path="/AdminScBoarList" element={<AdminScBoardList />} />
        <Route path="/AdminBoarList" element={<AdminBoardList />} />
        <Route path="/AdminMemberList" element={<AdminMemberList />} />
        <Route exact path="/AdminMember/:userId" element={<AdminEditUser />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/FindInfo" element={<FindInfo />} />
        <Route path="/EditInfo" element={<EditInfo />} />
        <Route path="/CheckPwd" element={<CheckPwd />} />
        <Route path="/studies" element={<StudyList />} />
        <Route path="/study/write" element={<StudyWrite />} />
        <Route exact path="/study/:studyId" element={<StudyDetail />} />
        <Route path="/Socket" element={<SocketTest />} />
        <Route path="/social" element={<SocialList />} />
        <Route exact path="/social/:socialId" element={<SocialDetail />} />
        <Route exact path="/social/:socialId/update" element={<SocialUpdate />} />
        <Route path="/social/write" element={<SocialWrite />} />
      </Routes>
      {/* <Admin></Admin> */}
    </Router>
  );
}

export default App;
