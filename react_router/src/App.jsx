import { Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
    return (
        <>
            {/* CONFIG DE ROTAS/PAGINAS */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </>
    );
}

export default App;


