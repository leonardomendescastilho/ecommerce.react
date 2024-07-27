import { ProductCard } from './ProductCard.jsx';
import { catalog } from '../../utils/catalog.js';

export function ProductsContainer() {
	return (
		<section className=''>
			<div className='container flex flex-wrap mx-auto p-10 justify-center gap-10 '>
				{catalog.map((product) => {
					return (
						<ProductCard
							key={`product_${product.id}_key`}
							{...product}
						/>
					);
				})}
			</div>
		</section>
	);
}
