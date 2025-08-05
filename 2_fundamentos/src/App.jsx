import './App.css';
import BomDia from './assets/components/BomDia.jsx'; //importando outro componente
import Cachorro from './assets/components/Cachorro.jsx';
import Counter from './assets/components/Counter.jsx';
import Descricao from './assets/components/Descricao.jsx';
import Pai from './assets/components/Pai.jsx';
import UserInfoForm from './assets/components/UserInfoForm.jsx';
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

            {/*useState -> hook (usado junto com componentes funcionais) */}
            {/*gerenciador de estado */}
            <Counter />

            {/*usando varios hooks - forms*/}
            <UserInfoForm />

        </>
    );
}

export default App;