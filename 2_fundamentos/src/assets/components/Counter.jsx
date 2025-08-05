import { useState } from 'react';

const Counter = () => {
    //[consultar,alterar]
    const [count, setCount] = useState(1);

    //let x = 10; //não re-renderiza o componente

    return (
        <div>
            <p>Você clicou {count} vezes. </p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
    );
};
export default Counter;