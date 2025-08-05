
import FilhoFunction from './FilhoFunction.jsx';

const PaiFunction = () => {

    const handleChildClick = () => {
        console.log("Cliquei no botão");
    }

    return (

        <div>
            <h1>Componente Pai</h1>
            <FilhoFunction onChildClick={handleChildClick} />
        </div>
    )
}

export default PaiFunction