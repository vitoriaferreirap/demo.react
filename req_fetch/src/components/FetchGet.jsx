import { useEffect, useState } from "react";

const FetchGet = () => {

    //usando API JSON placeholder
    //id, title, body

    const [posts, setPosts] = useState([]); //estado inicial é um array vazio
    const [error, setError] = useState(""); //estado para armazenar erros

    useEffect(() => {
        //função para buscar os posts
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) { //se a resposta não for ok, lança um erro
                    throw new Error("Erro ao buscar os posts");
                }

                const data = await response.json(); //converte a resposta para json
                setPosts(data); //atualiza o estado com os dados recebidos
            } catch (err) {
                setError(err.message); //atualiza o estado de erro com a mensagem do erro
            }
        };

        fetchPosts(); //chama a função para buscar os posts
    }

        , []); //array vazio como segundo argumento para rodar apenas uma vez ao montar o componente

    return (
        <div>
            <h1>Posts</h1>
            {error && <p>{error}</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.id}> {/*usando o id como key */}
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )


}
export default FetchGet