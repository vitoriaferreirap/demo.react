
const CardItem = ({ item, onUpdateCard, onRemoveFromCart }) => {
    return (
        <div className="card-item">
            <h3>{item.name}</h3>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: R$ {item.price.toFixed(2).replace('.', ',')}</p>

            <div className="card-buttons">
                <input type="text" value={item.quantity} onChange={(e) => onUpdateCard(item, parseInt(e.target.value))} />
                <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CardItem