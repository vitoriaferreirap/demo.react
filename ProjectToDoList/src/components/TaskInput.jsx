import { useState } from 'react';

//recebemos a prop que é uma função para adicionar uma nova tarefa
const TaskInput = ({ onAddTask }) => {

    //precisa alterar o estado do input
    const [input, setInput] = useState('');

    //click que envia formulário
    const handleSubmit = (e) => {
        e.preventDefault(); //previne o comportamento padrão do formulário (recarregar a página)

        if (input.trim()) {//retorna apenas caracteres não vazios
            onAddTask(input); //chama a função onAddTask recebida como prop, passando o valor do input
            setInput(''); //limpa o campo de input após adicionar a tarefa - retorna o estado do input inicial
        }
    }

    return (
        //onSubmit - evento de envio do formulário
        <form onSubmit={handleSubmit}>
            {/* value={input}:propriedade controlada, valor mostrado no campo sempre será igual ao estado do input
                Isso torna o componente "controlado" pelo React, não pelo DOM 
                onChange: toda vez que o usuário digitar algo, atualiza o estado do input
                e.target.value: o valor atual do input
                setInput: função para atualizar o estado do input 
            */}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Adicione uma nova tarefa" />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TaskInput