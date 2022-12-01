import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EditInfo from "./pages/editInfo/EditInfo";
import FindInfo from "./pages/findInfo/FindInfo";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        {/* <Route path="/Admin" element={<Admin />} /> */}
        <Route path="/AdminBoarList" element={<AdminBoardList />} />
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
        <Route path="/social/detail" element={<SocialDetail />} />
        <Route path="/social/write" element={<SocialWrite />} />
        {/* <Login/>   */}
      </Routes>
      {/* <Admin></Admin> */}
    </Router>
  );
}

export default App;
