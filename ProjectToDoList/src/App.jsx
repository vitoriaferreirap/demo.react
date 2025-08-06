import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
    //[recupera, atualiza] 
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []) //envia o estado para o componente TaskList


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)) //salva as tarefas no localStorage
    }, [tasks]) //sempre que tasks for alterado, atualiza o localStorage


    //add novas tarefas 
    const addTask = (task) => {

        //MEU OBJ = id,texto, done
        //add novas sem perder as antigas
        //...tasks (pega as tarefas antigas)
        //task (adiciona a nova tarefa (obj))
        setTasks([...tasks, { id: Date.now(), texto: task, done: false }])

        //salvar tarefa no localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    //excluir tarefas
    //filtrar as tarefas pelo id
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    //mudar tarefa para COMPLETO ou INCOMPLETO
    //MAP: percorre o array de tarefas e retorna um novo array com as tarefas atualizadas
    const toggleTask = (taskId) => {
        // 1-Arrow function ve se o id corresponde 2-Se sim (cria novo obj), modifica o estado 3-SE nao, retorna a tarefa original
        setTasks(tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task))
    }

    return (
        <>
            <div>
                <h1>Lista de Tarefas</h1>
                <TaskInput onAddTask={addTask} /> {/* Passa a função addTask para o componente TaskInput */}
                <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} /> {/* Passando as funções para o TaskList */}
            </div>
        </>
    )
}

export default App
