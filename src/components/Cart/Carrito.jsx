

const Carrito = ({cart}) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div id="carrito" className="col-4 bg-secondary mt-2 mb-2">
			<h3>Carrito de Compras</h3>
			<ul id="cont-cart">
                {cart.map((item,index) =>(
                    <li key={index}>
                        {item.name} - Precio: {item.price}- Cantidad: {item.quantity}
                    </li>
                )
                )}
			</ul>
			<p>TOTAL: <span id="total-cart">S/ {total}</span></p>
			<button class="btn btn-primary">PAGAR</button>
		</div>
    );
};

export default Carrito;

