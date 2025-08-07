
import '../../../index.css';
import productsData from '../../data/products_mock.json';
import Product from './Product';

const Catalogo = ({ onAddToCart }) => {
    return (
        <div>
            <h1>Catalogo</h1>
            <div className="products-container">
                {productsData.map((product) => ( //recupera o array de produtos
                    <Product
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    )
}

export default Catalogo