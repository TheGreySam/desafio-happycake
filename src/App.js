import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Contacto from './views/contacto'
import Home from './views/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
