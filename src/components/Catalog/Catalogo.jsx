import { useState } from "react";
import Producto from "../Product/Producto";
import Carrito from "../Cart/Carrito";

const Catalogo = () => {
	
	const [cart , setCart] = useState([]);

	const products = [
		{
			name : 'Xiaomi Redmi note 13 Pro',
			price : '1900',
			url : 'https://xiaomiperu.com/media/catalog/product/cache/deaf12c726c019462dcd02884cec40ac/a/f/afafadf.jpg',
		},
		{
			name : 'Samsung S23',
			price : '3000',
			url : 'https://latienda.pe/22496-large_default/samsung-galaxy-s23.jpg',
		},
		{
			name : 'Honor 90 Lite',
			price : '3000',
			url : 'https://m.media-amazon.com/images/I/71SWs3TBwfL._AC_UF894,1000_QL80_.jpg',
		},
		{
			name : 'Motorola Moto G54',
			price : '700',
			url : 'https://m.media-amazon.com/images/I/71hK54VMakL._AC_SL1500_.jpg',
		},
		{
			name : 'Oppo A57',
			price : '700',
			url : 'https://home.ripley.com.pe/Attachment/WOP_5/2065309788040/2065309788040-4.jpg',
		},
		{
			name : 'ZTE Blade V50',
			price : '500',
			url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_M43dJoQiswXy3FjsfX22c2DRgkAP5eJfMA&s',
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
						price={producto.price} 
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