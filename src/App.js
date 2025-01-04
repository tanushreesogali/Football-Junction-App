import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Home';
import PressCorner from './Components/PressCorner';
import PressCornerNews from './Components/PressCornerNews';
import InitiativesPage from './Components/initiatives/InitiativesPage';
import InitiativesTrainingPage from './Components/initiatives/InitiativesPage1';
import InitiativesMemorialPage from './Components/initiatives/InitiativesPage3';
import InitiativesCampPage from './Components/initiatives/InitiativesPage2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tournaments" element={<div>Tournaments Page</div>} />
        {/* PRESS CORNER */}
        <Route path="/press-corner" element={<PressCorner/>} />
        <Route path="/press-news" element={<PressCornerNews/>}/>
        {/* INITIATIVES */}
        <Route path="/initiatives" element={<InitiativesPage/>} />
        <Route path='/initiative-training' element={<InitiativesTrainingPage/>}/>
        <Route path='/initiative-memorial' element={<InitiativesMemorialPage/>}/>
        <Route path='/initiative-camp' element={<InitiativesCampPage/>}/>

        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
