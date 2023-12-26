import { Link } from "react-router-dom";
import ProductDetail from "../../pages/Products/ProductDetail";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCard.css"
function ProductCard(props) {
	console.log(props);
	const handleDeleteClick = (id) => {
		
		axios.delete('https://dummyjson.com/products/'+id)
			.then(response => console.log(response.data))
			.catch(error => console.error(error));

	}

	return (
		<div class="card">
			<img
				src={props.product.thumbnail}
				class="card-img-top img-fluid"
				alt="..."
			/>
			<div class="card-body text">
			<h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">
          {props.product.description.length > 10
            ? props.product.description.substring(0, 50) + "..."
            : props.product.description}
        </p>
				<p class="card-text">Stok Miktarı: {props.product.stock}</p>
				<Link to={"/products/" + props.product.id} class="btn btn-primary">
					Detail
				</Link>

				<button className="btn btn-danger" onClick={() => handleDeleteClick(props.product.id)}>Sil</button>
			</div>
		</div>
	);
}

export default ProductCard;