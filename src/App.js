import './App.css';
import Apod from './Components/Apod';
import Home from './Components/Home';
import Asteroids from './Components/Asteroids';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Apod/>} path='/apod' exact></Route>
          <Route element={<Asteroids/>} path='/asteroids' exact></Route>
          <Route element={<Home/>} path='/'></Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
