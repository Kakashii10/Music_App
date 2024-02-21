import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import PlaySong from "./Component/PlaySong";
import Contact from "./Component/RoutesPages/Contact";
import About from "./Component/RoutesPages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/song/:userId" element={<PlaySong/>}/>
        {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
