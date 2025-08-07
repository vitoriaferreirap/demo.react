
const CardItem = ({ item, onUpdateCart }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price.toFixed(2).replace('.', ',')}</p>

            <div className="card-buttons">
                <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, parseInt(e.target.value))} />
                <button>Remover</button>
            </div>
        </div>
    )
}

export default CardItem