import CardItem from "./CardItem";
import CheckoutButton from "./CheckoutButton";
const Card = ({ cartItems, onUpdateCard, onRemoveFromCart, setCartItems }) => {

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="card-container">
            <h1>Carrinho</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div>
                    <h2>Itens no carrinho:</h2>
                    {cartItems.map((item) => (
                        <CardItem key={item.id} item={item} onUpdateCard={onUpdateCard} onRemoveFromCart={onRemoveFromCart} />
                    ))}
                    <div className="total">
                        <p>Total: ${totalPrice}</p>
                    </div>

                    <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />

                </div>

            )}
        </div>
    )
}

export default Card