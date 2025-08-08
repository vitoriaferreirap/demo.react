import { useEffect, useState } from 'react';
const Counter = () => {

    //manter valor de um numero - tipando estado
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`contador esta com o valor de : ${count}`);
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default Counter