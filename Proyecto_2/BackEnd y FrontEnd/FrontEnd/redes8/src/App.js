import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Administrador from './components/Administrador'
import Desarrollador from './components/Desarrolladores'
import Publica from './components/Publica'
import Economia from './components/Economia'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/Cerbero/FrontEnd/Administrador' exact='' element={<Administrador />}></Route>
          <Route path='/Cerbero/FrontEnd/Desarrollador' exact='' element={<Desarrollador />}></Route>
          <Route path='/Cerbero/FrontEnd/Publica' exact='true' element={<Publica />}></Route>
          <Route path='/Cerbero/FrontEnd/Economia' exact='' element={<Economia />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
