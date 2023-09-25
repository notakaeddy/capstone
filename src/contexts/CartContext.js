import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
	const [cart,setCart] = useState([]);

	return <CartContext.Provider value = {"cart in here"}> 
	{children}
	</CartContext.Provider>
}

export default CartProvider;