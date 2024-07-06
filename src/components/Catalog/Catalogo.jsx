import { useState } from "react";
import Producto from "../Product/Producto";
import Carrito from "../Cart/Carrito";

const Catalogo = () => {
	
	const [cart , setCart] = useState([]);

	const products = [
		{
			name : 'producto1',
			description : 'esto es una descipcion del producto 1',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto2',
			description : 'esto es una descipcion del producto 2',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto3',
			description : 'esto es una descipcion del producto 3',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto4',
			description : 'esto es una descipcion del producto 4',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto5',
			description : 'esto es una descipcion del producto 5',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
		{
			name : 'producto6',
			description : 'esto es una descipcion del producto 6',
			url : 'https://guiadelempresario.com/wp-content/uploads/2020/09/Producto-scaled.jpg',
		},
	];

	const addToCart = (product) => {
		setCart( (prevCart) =>{
			const existingProduct = prevCart.find( (item) => item.name === product.name);

			if(existingProduct){
				return prevCart.map( (item) =>
					item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
				);
			} else {
				return [ ...prevCart, { ...product, quantity:1 }];
			}
		}

		)
	}

	return (
		<div class="container">
			<div class="row">
				<div class="col-8 row">
					
					
					{products.map((producto,index) => (
						<Producto
						key={index} 
						name={producto.name} 
						description={producto.description} 
						url={producto.url} 
						addToCart={()=> addToCart(producto)}
						/>
					))}
					
				</div>
				
				<Carrito cart={cart} />
				
			</div>
		</div>
	);
}

export default Catalogo;