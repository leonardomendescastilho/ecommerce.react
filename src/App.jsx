import { Header } from './components/Header';
import { Home } from './pages/Home/Home.jsx';
import { Checkout } from './pages/Checkout/Checkout.jsx';
import { Purchase } from './pages/Purchase/Purchase.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/checkout'
					element={<Checkout />}
				/>
				<Route
					path='/history'
					element={<Purchase />}
				/>
			</Routes>
		</>
	);
}

export default App;
