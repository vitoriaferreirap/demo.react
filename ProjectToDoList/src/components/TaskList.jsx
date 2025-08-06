import Task from "./Task"

//recebendo as funcoes do componente pai APP, como props
const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                // Itera sobre as tarefas e renderiza o componente Task para cada uma
                //key: é uma propriedade especial do React que ajuda a identificar quais itens mudaram
                //task.id: é o identificador único de cada tarefa, usado como chave
                //task: é a tarefa atual que está sendo iterada, passada como prop para o componente Task

                //executa as funcoes, e passa o evento de click ao Task
                <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
            ))}
        </ul>
    )
}

export default TaskList