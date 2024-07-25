import { ProductsContainer } from './ProductsContainer.jsx';
import { ProductsFilters } from './ProductsFilters.jsx';

export function Main() {
	return (
		<>
			<ProductsFilters />

			<ProductsContainer />
		</>
	);
}
