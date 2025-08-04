import './App.css';
import BomDia from './assets/components/BomDia.jsx'; //importando outro componente
import Cachorro from './assets/components/Cachorro.jsx';
import Descricao from './assets/components/Descricao.jsx';
import Pai from './assets/components/Pai.jsx';
import Welcome from './assets/components/Welcome.jsx';

function App() {
    return (
        <>
            {/* acessando componentes */}

            <Welcome />

            <BomDia />

            <Pai />

            {/* PROPS = é necessário passar as propriedades para o componente filho */}
            <Descricao name="Matheus" idade={30} />

            {/*desestruturar props no componente*/}
            <Cachorro nome="Rex" idade={5} raca="Labrador" />

        </>
    );
}

export default App;