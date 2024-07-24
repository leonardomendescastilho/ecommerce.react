import logo from '.././assets/logo/hashtag.svg';
import { UserButtons } from './UserButtons';

export function Header() {
	return (
		<>
			<header className='flex sticky top-0 shadow-xl shadow-slate-40 bg-slate-950 text-slate-200 px-8 py-4 justify-between items-end text-base'>
				<a href='/'>
					<img
						className='h-16 px-2'
						src={logo}
						alt='Logo da Hashtag Programação'
					/>
				</a>
				<UserButtons />
			</header>
		</>
	);
}
