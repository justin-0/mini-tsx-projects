import React, { useState } from 'react';

interface CustomerCart {
	id: number;
	productName: string;
	price: number;
}

const Cart = () => {
	const [cart, setCart] = useState<CustomerCart[]>();

	const handleAddToCart = () => {
		const pId = 1;

		if (cart === undefined) {
			setCart((prevCart: CustomerCart[] | undefined) => [
				...(prevCart || []),
				{
					id: 1,
					productName: 'tshirt',
					price: 50,
				},
			]);
		} else {
			const updatedCart = cart.map((p) => {
				if (p.id === pId) {
					const newPrice = p.price + 50;
					return {
						...p,
						price: newPrice,
					};
				}
				return p;
			});
			setCart(updatedCart);
		}
	};

	return (
		<div className='cart'>
			<h1>Shopping Cart</h1>
			<button onClick={handleAddToCart}>Add Product</button>
			<div></div>
		</div>
	);
};

export default Cart;
