
import { useState } from 'react';

const Form = () => {
    // gerenciar o estado do input 
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {

        /**
         * manipulacao de dados
         * validacao
         * ENVIO de forms ao servidor pela api
         * loading
         * faz chamada da funcao de mensagens de erro/bem sucedido
         */

        e.preventDefault();
        console.log("Formulário enviado", value);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* onChange -> dispara uma função toda vez que o valor do input mudar */}
            <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Digite seu nome" />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form