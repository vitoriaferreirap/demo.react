//propr é um objeto que contém as propriedades passadas para o componente
const Cachorro = ({ nome, idade, raca }) => {
    //props.name => nome do cachorro
    return (
        <div>
            <p>O cachorro se chama {nome}, tem {idade} anos e é da raça {raca}.</p>
        </div>
    );
}

export default Cachorro;