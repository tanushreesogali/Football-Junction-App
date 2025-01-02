import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Home';
import PressCorner from './Components/PressCorner';
import PressCornerNews from './Components/PressCornerNews';
// import InitiativesPage from './Components/initiatives/InitiativesPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tournaments" element={<div>Tournaments Page</div>} />
        <Route path="/press-corner" element={<PressCorner/>} />
        <Route path="/press-news" element={<PressCornerNews/>}/>
        {/* <Route path="/initiatives" element={<InitiativesPage/>} /> */}
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </div>
  );
}

export default App;


