
import { useState } from 'react';

const Product = ({ product, onAddToCart }) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span className="price">{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</span>
            <div className="card-buttons">
                <select onChange={(e) => setQuantity((e.target.value))}>
                    {/*select dinamico */}
                    {[...Array(10).keys()].map((x) => (
                        <option key={x} value={x + 1}>{x + 1}</option>
                    ))}
                </select>
                <button className="add-to-cart" onClick={() => onAddToCart(product, quantity)}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Product;