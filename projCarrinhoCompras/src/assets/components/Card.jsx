import CardItem from "./CardItem"
const Card = ({ cartItems, onUpdateCart }) => {
    return (
        <div>
            <h1>Carrinho</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div>
                    <h2>Itens no carrinho:</h2>
                    {cartItems.map((item) => (
                        <CardItem key={item.id} item={item} onUpdateCart={onUpdateCart} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Card