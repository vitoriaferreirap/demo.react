import Filho from "./Filho";

function Pai() {
    return (
        <div>
            <p>Componente Pai, chamando componente filho: </p>
            <Filho />
        </div>
    );
}

export default Pai;