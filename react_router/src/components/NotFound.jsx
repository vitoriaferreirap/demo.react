import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div><h1>404 - Página não encontrada</h1>
            <Link to="/">Voltar para a página inicial</Link></div>
    )
}

export default NotFound