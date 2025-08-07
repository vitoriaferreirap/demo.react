
import productsData from '../../../data/products_mock.json';
import '../../../index.css';
import Product from '../Product';

const Catalogo = ({ onAddToCart }) => {
    return (
        <div>
            <h1>Catalogo</h1>
            <div className="products-container">
                {productsData.map((product) => ( //recupera o array de produtos
                    <div key={product.id} className="product-card">
                        {/* componente do produto exibira os detalhes */}
                        {/*passando props para o componente Product */}
                        <Product product={product} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalogo