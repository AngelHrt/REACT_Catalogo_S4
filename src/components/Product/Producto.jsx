const Producto = ({name,price,url, addToCart}) => {
	return (
		<div class="col col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
			<div class="card">
				<img src={url} class="card-img-top" alt={name} />
					<div class="card-body">
						<h5 class="card-title text-center">{name}</h5>
						<p class="card-text text-center">PEN {price}</p>
						<button class="btn btn-primary btn-block" onClick={addToCart}>Comprar</button>
					</div>
			</div>
		</div>
	);
}
export default Producto;
