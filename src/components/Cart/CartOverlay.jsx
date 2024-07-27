import { useState } from 'react';
export function CartOverlay() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div
				className={`h-screen w-screen fixed top-0 left-0 flex z-20  duration-200 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
			>
				<section
					onClick={() => setIsOpen(false)}
					className='w-3/4 bg-slate-950 opacity-50'
				></section>
				<section
					className='w-1/4 bg-slate-950 min-w-80 border-l
         border-slate-400 p-5 flex flex-col justify-between text-white'
				></section>
			</div>
		</>
	);
}
