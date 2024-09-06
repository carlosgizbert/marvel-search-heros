import { Link, Outlet } from 'react-router-dom';
import { Footer } from '@/ui/components/molecules/footer';

import * as S from './styles';
import { Typography } from '../typography';

export function Layout() {
	return (
		<>
			<S.Wrapper>
				<Outlet />
			</S.Wrapper>
			<Footer>
				<Typography color="white">
					Desenvolvido por{' '}
					<Link
						to="https://www.linkedin.com/in/gizbert/"
						style={{ color: '#fff' }}
						target="_blank"
					>
						Carlos Gizbert
					</Link>
					🤘🤘🤘
				</Typography>
			</Footer>
		</>
	);
}
