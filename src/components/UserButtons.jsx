import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
				<Link
					to='/history'
					className='px-2'
				>
					<FontAwesomeIcon icon={faUser} />
				</Link>
			</div>
		</>
	);
}
