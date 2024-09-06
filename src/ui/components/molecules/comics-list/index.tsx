import { Box } from '@/ui/components/atoms/box';
import { Typography } from '@/ui/components/atoms/typography';
import { CharacterSkeleton } from './character-skeleton/caracter';
import { Comic as ComicDTO } from '@/services/characters/dto/comics';
import { Comic } from './comic/comic';

import * as S from './styles';

interface ComicsSkeletonsProps {
	id: string;
	data: ComicDTO[];
	isLoading: boolean;
}

function ComicsSkeletons() {
	return (
		<>
			<CharacterSkeleton />
			<CharacterSkeleton />
			<CharacterSkeleton />
			<CharacterSkeleton />
			<CharacterSkeleton />
			<CharacterSkeleton />
		</>
	);
}

export function ComicsList({
	id,
	data,
	isLoading,
}: Readonly<ComicsSkeletonsProps>) {
	const showList = !isLoading && data;
	const showSkeletons = isLoading;
	const hasMoreThanOne = !isLoading && data.length > 1;
	const showNotFound = !isLoading && data.length === 0;

	return (
		<Box id={id} $gap={3} $justify="center" $align="center">
			<S.List>
				{showSkeletons && <ComicsSkeletons />}
				{showList &&
					data.map((character) => {
						return <Comic key={character.id} data={character} />;
					})}
			</S.List>
			{hasMoreThanOne && <Typography color="text20">Final da lista</Typography>}
			{showNotFound && (
				<Typography color="text20">Nenhum lançamento</Typography>
			)}
		</Box>
	);
}
