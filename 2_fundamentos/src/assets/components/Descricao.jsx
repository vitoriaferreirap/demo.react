//aplicando arrow function
//props = propriedades do componente (chaves = valor)
//props.name = "Matheus" (exemplo de uso de props)
const Descricao = (props) => {
    return (
        <div>Descricao de props:
            <p>Seu nome é : {props.name}</p>
            <p> Sua idade é : {props.idade}</p>
        </div>
    )
}

export default Descricao