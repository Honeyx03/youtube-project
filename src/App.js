// Do not add .gitignore or .env
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
