
const Card = ({ cartItems }) => {
    return (
        <div>
            <h1>Carrinho</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div>
                    <h2>Itens no carrinho:</h2>
                    {cartItems.map((item) => (
                        <p key={item.id}>{item.name} - {item.quantity} x R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Card