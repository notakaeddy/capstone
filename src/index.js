import React from 'react'
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client'
import './style/index.css';
import App from './App.js'
import ProductProvider from './contexts/ProductContext.js';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

// place css in the src/style directory, and import them like this:
//import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SidebarProvider> 	
	<CartProvider>
		<ProductProvider>
			<React.StrictMode>
				<App/>
			</React.StrictMode>
		</ProductProvider>
	</CartProvider> 
</SidebarProvider>
);

