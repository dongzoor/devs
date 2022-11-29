import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/containers/common/Nav'
import Login from './pages/Login';
import StudyList from './pages/StudyList';
import StudyWrite from './pages/StudyWrite'
import StudyDetail from './pages/StudyDetail';
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Profile from "./pages/login/Profile";
import Register from "./pages/login/Register";

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
        <Route path="/study" element={<StudyList />} />
        <Route path="/study/write" element={<StudyWrite />} />
        <Route path='/study/detail' element={<StudyDetail />} />
        {/* <Login/>   */}
        {/* <Admin /> */}
      </Routes>
    </Router>

  );
}

export default App;
