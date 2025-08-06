import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';

function App() {
    return (
        <>
            {/* CONFIG DE ROTAS/PAGINAS */}

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </>
    );
}

export default App;


