//import for Components
import './App.css';
import './Components/GridFooter.css';
import './Components/GridNavbar.css';
import Header from './Components/Header/Header.jsx';
import StringManuf from './Components/Header/StringManuf.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Hookahs from './Components/Navbar/Hookahs/Hookahs.jsx';
import Tobacco from './Components/Navbar/Tobacco/Tobacco.jsx';
import Vape from './Components/Navbar/Vape/Vape.jsx';
import Hoses from './Components/Navbar/Hoses/Hoses.jsx';
import Flasks from './Components/Navbar/Flasks/Flasks.jsx';
import Bowls from './Components/Navbar/Bowls/Bowls.jsx';
import Accessories from './Components/Navbar/Accessories/Accessories.jsx';
import Coal from './Components/Navbar/Coal/Coal.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//markup JSX
function App() {
  return (
    <BrowserRouter>
      <div className="create-website-montecristo">
        <Header />
        <StringManuf />
        <div className='navigation-menu-first'>
          <Navbar />
          <div className='create-website-montecristo-content'>
            <Routes>
              <Route path='/hookahs/*' Component={Hookahs}></Route>
              <Route path='/tobacco/*' Component={Tobacco}></Route>
              <Route path='/vape/*' Component={Vape}></Route>
              <Route path='/hoses/*' Component={Hoses}></Route>
              <Route path='/flasks/*' Component={Flasks}></Route>
              <Route path='/bowls/*' Component={Bowls}></Route>
              <Route path='/accessories/*' Component={Accessories}></Route>
              <Route path='/coal/*' Component={Coal}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;