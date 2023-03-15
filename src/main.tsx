import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './context/CartProvider'
import LightboxProvider from './context/LightboxProvider'
import ProductProvider from './context/ProductProvider'
import './globalStyles/base.scss'

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<ProductProvider>
			<CartProvider>
				<LightboxProvider>
					<App />
				</LightboxProvider>
			</CartProvider>
		</ProductProvider>
	</React.StrictMode>
)
