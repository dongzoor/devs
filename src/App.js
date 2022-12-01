import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EditInfo from "./pages/editInfo/EditInfo";
import FindInfo from "./pages/findInfo/FindInfo";
import Login from "./pages/login/Login";
import Nav from "../src/containers/common/Nav";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import StudyDetail from "./pages/StudyDetail";
import StudyList from "./pages/StudyList";
import StudyWrite from "./pages/StudyWrite";

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
        <Route path="/FindInfo" element={<FindInfo />} />
        <Route path="/EditInfo" element={<EditInfo />} />
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
