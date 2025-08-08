        
import { useEffect, useRef } from "react";
//callback = funcao que queremos executar/delay e o tempo em ms

//tipagem necessaria
export default function useInterval(callback: () => void, delay: number | null) { 

    //definir o tipo do callback e do delay
    const savedCallback = useRef<(() => void) | undefined>(undefined);
        
    //logica do hook para executar o callback a cada delay
    useEffect(() => { 
        savedCallback.current = callback;//qual funcao sera executada
    }, [callback])

    //para o delay
    useEffect(() => {
        function tick() { //funcao que executa o callback
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) { //se o delay for diferente de null, executa o setInterval
            const id = setInterval(tick, delay);
            return () => clearInterval(id); //limpar o intervalo quando o componente for desmontado ou o delay mudar
        }
    }, [delay]); //se o delay mudar, o useEffect sera executado novamente
    
}