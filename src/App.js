import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FindInfo from "./pages/findInfo/FindInfo";
import EditInfo from "./pages/editInfo/EditInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path= "/AdminBoarList"  element={<AdminBoardList />} />
      <Route path= "/AdminMemberList"  element={<AdminMemberList/>} /> */}
          {/* 작업하느라 주석처리 했습니다... 죄송합니다... - J2 */}
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/FindInfo" element={<FindInfo />} />
          <Route path="/EditInfo" element={<EditInfo />} />
        </Routes>
      </Router>
      {/* <Login/>   */}
      <Admin />
    </>
  );
}

export default App;
