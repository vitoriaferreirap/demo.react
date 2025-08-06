import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //redirecionando o usuario de URL
    const [username, setUsername] = useState("");
    //iniciando objeto de navegação
    const navigate = useNavigate();
    //função de submit do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuário logado:", username);
        navigate("/"); //redireciona para a página inicial após o login
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username} //pega valor do username
                    onChange={(e) => setUsername(e.target.value)} //atualiza o estado do username conforme o usuário digita
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login