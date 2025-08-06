import { Link, NavLink, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';

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

            {/*useNavigate - redirecionamento de paginas */}
            <li>
                <Link to="/login">Login</Link>
            </li>

            {/*rotas aninhasdas */}
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>


            {/* CONFIG DE ROTAS/PAGINAS */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/*useNavigate */}
                <Route path="/login" element={<Login />} />

                {/*rotas aninhasdas */}
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>

        </>
    );
}

export default App;


