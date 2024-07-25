import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

export function UserButtons() {
	return (
		<>
			<div>
				<button className='px-2 relative'>
					<FontAwesomeIcon icon={faBagShopping} />
					<span
						id='cart-amount'
						className='absolute inline-flex items-center justify-center bg-green-700 w-6 h-6 font-medium text-slate-100 text-lg border-2 rounded-full -top-2 -right-2 p-1'
					>
						5
					</span>
				</button>
				<a className='px-2'>
					<FontAwesomeIcon icon={faUser} />
				</a>
			</div>
		</>
	);
}
