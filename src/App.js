import './App.css';
import { Route, Routes} from "react-router-dom";


import Home from './Components/homepage/Home';
import InitiativesPage from './Components/initiatives/InitiativesPage';
import InitiativesTrainingPage from './Components/initiatives/InitiativesPage1';
import InitiativesMemorialPage from './Components/initiatives/InitiativesPage3';
import InitiativesCampPage from './Components/initiatives/InitiativesPage2';
import AboutUs from "./Components/aboutus/AboutUs";
import TournamentMain from './Components/Tournaments/TournamentMain';
import MatchCenter from './Components/matchcenter/MatchCenter';
import PressCorner from './Components/presscorner/PressCorner';
import PressCornerNews1 from './Components/presscorner/ARTICLES/PressCornerNews1';
import PressCornerNews2 from './Components/presscorner/ARTICLES/PressCornerNews2';
import PressCornerNews3 from './Components/presscorner/ARTICLES/PressCornerNews3';
import PressCornerNews4 from './Components/presscorner/ARTICLES/PressCornerNews4';
import PressCornerNews5 from './Components/presscorner/ARTICLES/PressCornerNews5';
import PressCornerNews6 from './Components/presscorner/ARTICLES/PressCornerNews6';
import PressCornerNews7 from './Components/presscorner/ARTICLES/PressCornerNews7';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Tournaments */}
        <Route path="/tournaments" element={<TournamentMain/>} />
        {/* PRESS CORNER */}
        <Route path="/press-corner" element={<PressCorner/>} />
        <Route path="/press-news1" element={<PressCornerNews1/>}/>
        <Route path="/press-news2" element={<PressCornerNews2/>}/>
        <Route path="/press-news3" element={<PressCornerNews3/>}/>
        <Route path="/press-news4" element={<PressCornerNews4/>}/>
        <Route path="/press-news5" element={<PressCornerNews5/>}/>
        <Route path="/press-news6" element={<PressCornerNews6/>}/>
        <Route path="/press-news7" element={<PressCornerNews7/>}/>
        {/* INITIATIVES */}
        <Route path="/initiatives" element={<InitiativesPage/>} />
        <Route path='/initiative-training' element={<InitiativesTrainingPage/>}/>
        <Route path='/initiative-memorial' element={<InitiativesMemorialPage/>}/>
        <Route path='/initiative-camp' element={<InitiativesCampPage/>}/>

        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/match-center" element={<MatchCenter/>} />

        
      </Routes>
    </div>
  );
}

export default App;
