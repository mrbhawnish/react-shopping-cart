import React, { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
const Item = props => {
	
  const { removeItem } = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			{console.log(props)}
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
