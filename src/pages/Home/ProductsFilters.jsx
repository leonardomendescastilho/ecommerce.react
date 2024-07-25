export function ProductsFilters() {
	return (
		<>
			<section className='flex justify-center items-center py-8'>
				<input
					className='hidden'
					type='radio'
					name='filter-selection'
					id='filter-0'
				/>
				<label
					className='rounded-s-lg bg-slate-950  hover:bg-indigo-800  p-2 text-sm font-medium text-slate-100 cursor-pointer transition-all duration-200'
					htmlFor='filter-0'
				>
					Todos
				</label>
				<input
					className='hidden'
					type='radio'
					name='filter-selection'
					id='filter-1'
				/>
				<label
					className=' bg-slate-950  hover:bg-indigo-800  p-2 text-sm font-medium text-slate-100 cursor-pointer transition-all duration-200'
					htmlFor='filter-1'
				>
					Masculinos
				</label>
				<input
					className='hidden'
					type='radio'
					name='filter-selection'
					id='filter-2'
				/>
				<label
					className='rounded-e-lg bg-slate-950  hover:bg-indigo-800  p-2 text-sm font-medium text-slate-100 cursor-pointer transition-all duration-200'
					htmlFor='filter-2'
				>
					Femininos
				</label>
			</section>
		</>
	);
}
