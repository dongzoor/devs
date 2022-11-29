
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/containers/common/Nav'
import Login from './pages/Login';
import StudyList from './pages/StudyList';
import StudyWrite from './pages/StudyWrite'
import StudyDetail from './pages/StudyDetail';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/study" element={<StudyList />} />
        <Route path="/study/write" element={<StudyWrite />} />
        <Route path='/study/detail' element={<StudyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
