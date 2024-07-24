export function ProductCard({
	id,
	brand,
	name,
	price,
	image,
	feminine = false,
}) {
	return (
		<article className='card-produto group flex flex-col justify-around w-60 border-2 border-slate-200 bg-white shadow-xl shadow-slate-200 rounded-lg hover:shadow-2xl hover:shadow-slate-400 hover:drop-shadow-md transition-all duration-300'>
			<img
				className='rounded-md overflow-hidden mx-5 my-5 group-hover:scale-105 transition-all duration-500'
				src={image}
				alt={name}
			/>
			<p className='mx-4 text-sm text-slate-400 leading-5'>{brand}</p>
			<p className='mx-4 text-sm text-black font-medium '>{name}</p>
			<p className='mx-4 text-sm text-green-700 font-bold mt-3 group-hover:underline underline-offset-1'>
				R$ {price.toFixed(2)}
			</p>
			<p className='mx-4 text-sm text-gray-500 text-right '>
				{feminine ? 'Feminino' : 'Masculino'}
			</p>
		</article>
	);
}
