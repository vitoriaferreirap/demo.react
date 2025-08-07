import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { toast } from 'react-toastify'
import Card from './assets/components/Card'
import Catalogo from './assets/components/pages/Catalogo'
import ThankYouPage from './assets/components/ThankYouPage'
import './index.css'
//config de toast de confirmacao de adicao ao carrinho
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

    const [cardItem, setCardItem] = useState([]);

    const handleAddToCard = (product, quantity) => {
        //se nao existir add, se existir incrementa
        //find metodo para verificar se o item ja existe no carrinho (array)
        setCardItem((prevItems) => {

            const itemExists = prevItems.find((item) => item.id === product.id);
            if (itemExists) {
                toast.info(`Quantidade do ${product.name} atualizado com sucesso!`);
                //se existir, incrementa a quantidade
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                toast.success(`${product.name} adicionado ao carrinho!`);
                //se nao existir, adiciona o item ao carrinho
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const handleUpdateCard = (product, quality) => {
        setCardItem((prevItems) => {
            return prevItems.map((item) =>
                item.id === product.id ? { ...item, quantity: quality } : item
            );
        });
        toast.info(`Quantidade do ${product.name} atualizado com sucesso!`);
    }

    return (
        <BrowserRouter>
            {/* Header */}
            <nav>
                <Link to="/">Catalogo</Link>
                <Link to="/carrinho">Carrinho</Link>
            </nav>

            <div className="container">

                {/* rotas */}
                <Routes>
                    <Route path="/" element={<Catalogo onAddToCart={handleAddToCard} />} />
                    <Route path="/carrinho" element={<Card cartItems={cardItem} onUpdateCart={handleUpdateCard} />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hiderProgress={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
            />

        </BrowserRouter>
    )
}

export default App
