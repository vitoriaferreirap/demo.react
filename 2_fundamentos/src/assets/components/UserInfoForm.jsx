import { useState } from "react";
//rafce
const UserInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    /**
     * Envio de forms
     * HTML envio form convencional-clica enviar, recarrega a pg e envia req para o servidor 
     * React objetivo e trabalhar com APIs
     * Precisamos segurar as req, com fetch ou axios
     * */


    const handleSubmit = (event) => {
        event.preventDefault(); //previne o comportamento padrão do form, que é recarregar a página

        //faria o fetch - comunicao API
        console.log(name, email);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} //registra o valor do input
                placeholder="Digite seu nome" />
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //registra o valor do input
                placeholder="Digite seu email" />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default UserInfoForm