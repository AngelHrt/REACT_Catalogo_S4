const Producto = ({name,description,url, addToCart}) => {
	return (
		<div class="col-12 col-md-6 col-lg-4 mt-2 mb-2">
			<div class="card">
				<img src={url} class="card-img-top" alt={name} />
					<div class="card-body">
						<h5 class="card-title">{name}</h5>
						<p class="card-text">{description}</p>
						<button class="btn btn-primary" onClick={addToCart}>Comprar</button>
					</div>
			</div>
		</div>
	);
}
export default Producto;