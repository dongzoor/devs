import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditInfo from "./pages/editInfo/EditInfo";
import FindInfo from "./pages/findInfo/FindInfo";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Nav from "../src/containers/common/Nav";
import StudyList from "./pages/StudyList";
import StudyWrite from "./pages/StudyWrite";
import StudyDetail from "./pages/StudyDetail";
import Admin from "./pages/admin/Admin";
import AdminBoardList from "./pages/admin/AdminBoarList";
import AdminMemberList from "./pages/admin/AdminMemberLlist";
import SocialList from "./pages/social/SocialList";
import SocialDetail from "./pages/social/SocialDetail";
import SocialWrite from "./pages/social/SocialWrite";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        {/* <Route path="/Admin" element={<Admin />} /> */}
        <Route path="/AdminBoardList" element={<AdminBoardList />} />
        <Route path="/AdminMemberList" element={<AdminMemberList />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/FindInfo" element={<FindInfo />} />
        <Route path="/EditInfo" element={<EditInfo />} />
        <Route path="/study" element={<StudyList />} />
        <Route path="/study/write" element={<StudyWrite />} />
        <Route path="/study/detail" element={<StudyDetail />} />
        <Route path="/social" element={<SocialList />} />
        <Route exact path="/social/:socialId" element={<SocialDetail />} />
        <Route path="/social/write" element={<SocialWrite />} />
        {/* <Login/>   */}
      </Routes>
      {/* <Admin></Admin> */}
    </Router>
  );
}

export default App;
