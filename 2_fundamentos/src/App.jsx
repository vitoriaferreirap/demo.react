import './App.css';
import BomDia from './assets/components/BomDia.jsx'; //importando outro componente
import Pai from './assets/components/Pai.jsx';
import Welcome from './assets/components/Welcome.jsx'; //importanto o componente

function App() {
    return (
        <>
            {/* acessando componentes */}

            <Welcome />

            <BomDia />

            <Pai />

        </>
    );
}

export default App;