import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from '../src/containers/common/Nav'
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FindInfo from "./pages/findInfo/FindInfo";
import EditInfo from "./pages/editInfo/EditInfo";
import SocketTest from "./pages/chat/SocketTest";
import AdminBoardList from "./pages/admin/AdminBoardList";
import AdminMemberList from "./pages/admin/AdminMemberList";
import AdminScBoardList from "./pages/admin/AdminScBoardList";
import SocialDetail from "./pages/social/SocialDetail";
import SocialList from "./pages/social/SocialList";
import SocialWrite from "./pages/social/SocialWrite";
import StudyDetail from "./pages/StudyDetail";
import StudyList from "./pages/StudyList";
import StudyWrite from "./pages/StudyWrite";


function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        {/* <Route path="/Admin" element={<Admin />} /> */}
        <Route path="/AdminScBoarList" element={<AdminScBoardList />} />
        <Route path="/AdminBoarList" element={<AdminBoardList />} />
        <Route path="/AdminMemberList" element={<AdminMemberList />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/FindInfo" element={<FindInfo />} />
        <Route path="/EditInfo" element={<EditInfo />} />
        <Route path="/studies" element={<StudyList />} />
        <Route path="/studies/Write" element={<StudyWrite />} />
        <Route exact path="/studies/:studyId" element={<StudyDetail />} />
        <Route path="/Socket" element={<SocketTest />} />
        <Route path="/social" element={<SocialList />} />
        <Route path="/social/detail" element={<SocialDetail />} />
        <Route path="/social/write" element={<SocialWrite />} />
        {/* <Login/>   */}
      </Routes >
      {/* <Admin></Admin> */}
    </Router >
  );
}

export default App;
