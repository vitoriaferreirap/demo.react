import { useParams } from 'react-router-dom';
const TaskDetails = () => {
    //DEIXA COMPONENRTE COMO UNICO  
    const { taskId } = useParams();
    return (
        <div>
            <h1>Detalhe da Tarefa</h1>
            <p>vendo a tarefa: {taskId}</p>
        </div>
    )
}

export default TaskDetails