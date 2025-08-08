import React, { useState } from 'react';
const TextInput = () => {
    //input que gerencia um estado  
    const [text, setText] = useState<string>(''); //hook useState com tipo string

    //tipando o evento de mudança de estado -- onChange
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    //tipando o evento de envio de formulário -- onSubmit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("formulario enviado com suceso");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit">Enviar</button>
            </form>
            <p>{text}</p>
        </div>
    )
}

export default TextInput