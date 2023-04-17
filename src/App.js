import { Routes, Route } from 'react-router-dom';
import Mission from './components/mission';
import Rockets from './components/rockets';
import Profile from './components/profile';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
