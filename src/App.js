import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/Main/NotFound';
import About from './components/Main/About';
import Contacts from './components/Main/Contacts';
import Catalog from './components/Main/Catalog';
import Home from './components/Main/Home';

function App() {
  return (
    <div className="App">
      <Router>
         <Header />
         <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/catalog" element={<Catalog withSearch/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
         </Main>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
