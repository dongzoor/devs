
import './App.css';
import Admin from './pages/admin/Admin';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminBoardList from './pages/admin/AdminBoarList';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminMemberList from './pages/admin/AdminMemberLlist';
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path= "/AdminBoarList"  element={<AdminBoardList />} />
      <Route path= "/AdminMemberList"  element={<AdminMemberList/>} />
      {/* <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </Router>
    
      {/* <Admin/> */}
    </>
  );
}

export default App;
