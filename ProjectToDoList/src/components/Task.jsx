//recebo as funções e o estado do componente pai atual
const Task = ({ task, onDeleteTask, onToggleTask }) => {
    return (
        <li>
            {/*recebe evento de click*/}
            <span onClick={() => onToggleTask(task.id)} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.texto}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
        </li>
    )
}

export default Task