import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import MainLayout from './layouts/MainLayout';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
