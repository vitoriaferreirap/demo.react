import { Link, NavLink, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    return (
        <>
            {/*Setup e config inicial */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>

            {/*NavLink */}
            <li>
                {/*permite checar se a pg está ativa */}
                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/contact">Contato</NavLink>
            </li>

            {/*useNavigate */}
            <li>
                <Link to="/login">Login</Link>
            </li>


            {/* CONFIG DE ROTAS/PAGINAS */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/*useNavigate */}
                <Route path="/login" element={<Login />} />
            </Routes>

        </>
    );
}

export default App;


