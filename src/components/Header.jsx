import logo from '.././assets/logo/hashtag.svg';
import { UserButtons } from './UserButtons';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
	const { pathname } = useLocation();

	const completeHeader = (
		<header
			className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950
 text-slate-200 px-8 py-4 justify-between items-end text-xl z-10'
		>
			<Link to='/'>
				<img
					className='h-16 px-2'
					src={logo}
					alt='Logo da Hashtag Programação'
				/>
			</Link>
			<UserButtons />
		</header>
	);

	const simpleHeader = (
		<header
			className='flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950
 text-slate-200 px-8 py-4 justify-between items-end text-xl z-10'
		>
			<Link to='/'>
				<img
					className='h-12 px-2'
					src={logo}
					alt='Logo da Hashtag Programação'
				/>
			</Link>
		</header>
	);
	return <>{pathname === '/' ? completeHeader : simpleHeader}</>;
}
