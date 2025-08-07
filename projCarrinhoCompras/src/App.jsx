import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Card from './assets/components/Card'
import Catalogo from './assets/components/pages/Catalogo'
import ThankYouPage from './assets/components/ThankYouPage'
import './index.css'

function App() {

    const [cartItem, setCartItem] = useState();

    const handleAddToCart = (product, quantity) => {

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
                    <Route path="/carrinho" element={<Card />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
