import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/containers/common/Nav";
import StudyList from "./pages/StudyList";
import StudyWrite from "./pages/StudyWrite";
import StudyDetail from "./pages/StudyDetail";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FindInfo from "./pages/findInfo/FindInfo";
import EditInfo from "./pages/editInfo/EditInfo";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path= "/AdminBoarList"  element={<AdminBoardList />} />
      <Route path= "/AdminMemberList"  element={<AdminMemberList/>} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account/find" element={<FindInfo />} />
        <Route path="/account/edit" element={<EditInfo />} />
        <Route path="/study" element={<StudyList />} />
        <Route path="/study/write" element={<StudyWrite />} />
        <Route path="/study/detail" element={<StudyDetail />} />
        {/* <Login/>   */}
        {/* <Admin /> */}
      </Routes>
    </Router>
  );
}

export default App;
