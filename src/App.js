import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Contacto from './views/contacto'
import Home from './views/home'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
