import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Card from './assets/components/Card'
import Catalogo from './assets/components/pages/Catalogo'
import ThankYouPage from './assets/components/ThankYouPage'
import './index.css'

function App() {

    const [cardItem, setCardItem] = useState([]);

    const handleAddToCart = (product, quantity) => {
        //se nao existir add, se existir incrementa
        //find metodo para verificar se o item ja existe no carrinho (array)
        setCardItem((prevItems) => {

            const itemExists = prevItems.find((item) => item.id === product.id);

            if (itemExists) {
                //se existir, incrementa a quantidade
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                //se nao existir, adiciona o item ao carrinho
                return [...prevItems, { ...product, quantity }];
            }

        })
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
                    <Route path="/" element={<Catalogo onAddToCart={handleAddToCart} />} />
                    <Route path="/carrinho" element={<Card cartItems={cardItem} />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
