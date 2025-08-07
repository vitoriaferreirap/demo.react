import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const CheckoutButton = ({ cartItems, setCartItems }) => {

    const navigate = useNavigate();


    const handleCheckout = () => {
        if (cartItems.length > 0) {
            toast.success("Compra realizada com sucesso!");
            setCartItems([]); // Limpa o carrinho após a compra
            navigate("/thank-you", { state: { cartItems } }); // Redireciona para a página de agradecimento e e via item pelo clicks
        } else {
            toast.error("Seu carrinho está vazio!");
        }
    };

    return (
        <div className="checkout-container">
            <button onClick={handleCheckout}>Finalizar Compra</button>{/* aqui executa o click */}
        </div>
    )
}

export default CheckoutButton