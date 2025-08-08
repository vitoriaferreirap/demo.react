import React from 'react';
import useInterval from '../hooks/userInterval';


//hook userInrterval vai ser usado aqui para fazer um setInterval
const ContadorIntervalo = () => {

    const [contador, setContador] = React.useState(0)

    useInterval(() => {
        setContador(contador + 1);
    }, 1000);

    return (
        <div>ContadorIntervalo: {contador}</div>
    )
}

export default ContadorIntervalo