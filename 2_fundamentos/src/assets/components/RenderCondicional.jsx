
const RenderCondicional = ({ user }) => {
    //se houver user, exibir boas vindas
    return (
        <div>
            {/*expressao logica*/}
            {user && <h1>Seja bem vindo(a), {user}!</h1>}
        </div>
    )
}

export default RenderCondicional