// Do not add .gitignore or .env
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
components
*/
import NavBar from './components/NavBar';
import Home from './components/Home/Home.js';
import About from './components/About.js';

function App() {
  const [teamMembers] = useState("")
  return (
  <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About teamMembers={teamMembers}/>}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
