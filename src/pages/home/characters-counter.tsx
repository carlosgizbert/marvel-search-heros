import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Skeleton } from "@/ui/components/atoms/skeleton";

interface CharactersCounterProps {
  count: number;
  isLoading: boolean;
}

export function CharactersCounter({ count, isLoading }: Readonly<CharactersCounterProps>) {
  const hasMoreThanOneCharacter = count > 1;

  return (
    <Box>
      {isLoading ? (
        <Skeleton height={24} width={200} />
      ) : (
        <Typography $weight={600} color="text20">
          {count} herói{hasMoreThanOneCharacter ? "s" : ""} listado{hasMoreThanOneCharacter ? "s" : ""}
        </Typography>
      )}
    </Box>
  );
}
