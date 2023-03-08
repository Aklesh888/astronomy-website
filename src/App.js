import './App.css';
import Apod from './Components/Apod';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Apod/>} path='/apod' exact></Route>
          <Route element={<Home/>} path='/'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
