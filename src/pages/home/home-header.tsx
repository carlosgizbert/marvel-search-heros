import { Box } from '@/ui/components/atoms/box';
import { Typography } from '@/ui/components/atoms/typography';
import logo from '@/assets/logo.svg';

export function Header() {
	return (
		<Box
			id="home-header"
			$justify="center"
			$align="center"
			$maxWidth="720px"
			$gap={1.5}
		>
			<Box $direction="row" $align="baseline" $justify="center">
				<img src={logo} alt="Marvel Logo" />
			</Box>
			<Box $align="center" $gap={1} $maxWidth="620px">
				<Typography $size={26} $weight={700}>
					EXPLORE O UNIVERSO
				</Typography>
				<Typography color="text20" $align="center">
					Mergulhe no domínio deslumbrante de todos os personagens clássicos que
					você ama, e aqueles que você descobrirá em breve!
				</Typography>
			</Box>
		</Box>
	);
}
