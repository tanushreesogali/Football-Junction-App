import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Home';
import PressCorner from './Components/PressCorner';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tournaments" element={<div>Tournaments Page</div>} />
        <Route path="/press-corner" element={<PressCorner/>} />
        <Route path="/initiatives" element={<div>Initiatives Page</div>} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </div>
  );
}

export default App;

