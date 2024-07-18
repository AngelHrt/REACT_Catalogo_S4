import { useState } from "react";
import Producto from "../Product/Producto";
import Carrito from "../Cart/Carrito";
import '../../Styles/Productos.css';

const Catalogo = () => {
	
	const [cart , setCart] = useState([]);

	const products = [
		{
			name : 'Nike Structure 25',
			price : '569.90',
			url : 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwfe692135/images/marathon/197593995520_1-20240614120000-mrtChile.jpg?sw=800&sh=800',
		},
		{
			name : 'Nike Dunk Low',
			price : '569.90',
			url : 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwa4ac4b9d/images/hi-res/197593653475_1_20240430-mrtPeru.jpg?sw=800&sh=800',
		},

		{
			name : 'Nike Air Force 1',
			price : '579.90',
			url : 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwa0bb0c83/images/hi-res/194499062790_1_20240126120000-mrtPeru.jpg?sw=800&sh=800',
		},

		{
			name : 'Air Jordan 1 Zoom Comfort 2',
			price : '510.93',
			url : 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwef9637b9/images/hi-res/196608264378_1_20240207-mrtPeru.jpg?sw=800&sh=800',
		},
		{
			name : 'Vans Old Skool Black/True White',
			price : '299.00',
			url : 'https://vans.com.pe/cdn/shop/files/VN000D3HY28_HERO.png?v=1698698660&width=493',
		},

		{
			name : 'ULTRABOOST 5 W',
			price : '699.00',
			url : 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01c08954e81e412f98e70706272c579c_9366/ULTRABOOST_5_W_Blanco_ID8840_HM1.jpg',
		},
		{
			name : 'MOCHILA IN THE MIDI VERDE',
			price : '189.00',
			url : 'https://vans.com.pe/cdn/shop/files/VN000GFCCJL-1.jpg?v=1716694327&width=493',
		},
		{
			name : 'Energen Plus 2',
			price : '174.30',
			url : 'https://reebokpe.vtexassets.com/arquivos/ids/942951/100074810_1.jpg?v=638550173535500000',
		},
		{
			name : 'Flexagon Force 4',
			price : '160.30',
			url : 'https://reebokpe.vtexassets.com/arquivos/ids/913306/100074512_1.jpg?v=638433765254670000',
		},
		{
			name : 'Cl Fo Mochila',
			price : '111.30',
			url : 'https://reebokpe.vtexassets.com/arquivos/ids/880533/ACCB007_1.jpg?v=638375654340700000',
		},
		{
			name : 'Rbk Patch Trucker Cap',
			price : '79.00',
			url : 'https://reebokpe.vtexassets.com/arquivos/ids/940832/ACCC018_1-20--20Ecomm.jpg?v=638484979132870000',
		},
		{
			name : 'ZAPATILLAS GAZELLE',
			price : '379.00',
			url : 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f0c93feb98c401f8be3dec77ef247d2_9366/Zapatillas_Gazelle_Blanco_IF3817_01_standard.jpg',
		},
		{
			name : 'ZAPATILLAS CAMPUS 00S',
			price : '429.00',
			url : 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce738cbe5342421996feaf5001044964_9366/Zapatillas_Campus_00s_Plomo_HQ8707_01_standard.jpg',
		},
		{
			name : 'YEEZY BOOST 350 V2',
			price : '799.00',
			url : 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/49852affde7f49dcb970a9ae017c284e_9366/YEEZY_BOOST_350_V2_Blanco_EF2905_01_standard.jpg',
		},
		{
			name : 'SANDALIAS ADILETTE 22',
			price : '199.00',
			url : 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99ac2fdea36e4714bdbaaf4200bcc5ff_9366/Sandalias_Adilette_22_Marron_HQ4670_01_standard.jpg',
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
		<section class="productos">
        <h2>PRODUCTOS</h2>
		
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
		</section>
	);
}

export default Catalogo;