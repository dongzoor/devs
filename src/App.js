import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/login/Profile";
import Register from "./pages/register/Register";

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
        </Routes>
      </Router>
      {/* <Login/>   */}
      <Admin />
    </>
  );
}

export default App;
