import './App.css';
import BomDia from './assets/components/BomDia.jsx'; //importando outro componente
import Welcome from './assets/components/Welcome.jsx'; //importanto o componente

function App() {
    return (
        <>
            {/* acessando componentes */}

            <Welcome />

            <BomDia />

        </>
    );
}

export default App;