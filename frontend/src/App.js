import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import GenerateByPrompt from './pages/GenerateByPrompt';
import GenerateByImage from './pages/GenerateByImage';
import Login from './pages/Login';
import DetectionPage from './pages/DetectionPage';
import AboutUs from './pages/AboutUs';



function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/generate" element={<GenerateByPrompt/>} />
      <Route path="/generateByImage" element={<GenerateByImage/>} />
      <Route path="/detection" element={<DetectionPage/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
  </Router>
  );
}

export default App;
