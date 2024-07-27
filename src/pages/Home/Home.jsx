import { Main } from './Main.jsx';
import { CartOverlay } from '../../components/Cart/CartOverlay.jsx';

export function Home() {
	return (
		<>
			<CartOverlay />
			<Main />
		</>
	);
}
