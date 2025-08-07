import { useLocation, useNavigate } from 'react-router-dom';
const ThankYouPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Primeiro obter os dados do location.state
    const items = location.state?.cartItems || [];

    // Depois calcular o total usando os items
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="thank-you-container">
            <h1>Obrigado pela sua compra!</h1>
            <h2>Itens comprados:</h2>
            <div className="thank-you-items">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} x R$ {item.price.toFixed(2).replace('.', ',')}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="thank-you-total">
                Total: R$ {totalPrice.replace('.', ',')}
            </div>
            <button className="thank-you-button" onClick={() => navigate("/")}>
                Voltar para o catálogo
            </button>
        </div>
    )
}

export default ThankYouPage