
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/containers/common/Nav'
import Login from './pages/Login';
import Study from './pages/Study';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Study" element={<Study />} />
      </Routes>
    </Router>
  );
}

export default App;
