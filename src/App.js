
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/Home/Home';
import Carrinho from '../src/components/Card/CarrinhoCompras';
import { CartProvider } from 'react-use-cart';


function App() {
	return (
		<div>
			
				<CartProvider>
				<Home />
				<Carrinho />
			</CartProvider>
		</div>
	);
}

export default App;
