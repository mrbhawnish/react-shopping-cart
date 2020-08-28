import React, { useContext } from 'react';
import ProvideContext from '../contexts/ProductContexts';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContexts';

const Products = () => {
   const { products, addItem} = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
