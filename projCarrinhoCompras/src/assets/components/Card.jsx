
const Card = ({ cartItems }) => {
    return (
        <div>
            <h1>Carrinho</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x R$ {item.price.toFixed(2).replace('.', ',')}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Card