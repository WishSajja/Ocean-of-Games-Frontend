import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardcontainer";
import type { Gamequery } from "@/App";

interface GameGridProps {
  GameQuery: Gamequery;
}

const GameGrid = ({ GameQuery }: GameGridProps) => {
  const { error, data, isLoading } = useGame(GameQuery);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 199, 13, 22,
  ];

  if (error) return <Text className="text-danger">{error}</Text>;
  return (
    <>
      {!data && <Text>Oops no Games</Text>}
      {/* gap="row-gap column-gap"
       ↓       ↓
      50px    30px */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="10px"
      >
        {/* loading skeletons */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.length === 0 && (
          <Text
            textWrap="nowrap"
            fontSize="5xl"
            fontWeight="bolder"
            textAlign="center"
            animation="fade-in 500ms ease-in"
            // css={{
            //   "@keyframes fadeIn": {
            //     from: { opacity: 0 },
            //     to: { opacity: 1 },
            //   },
            // }}
          >
            Oops no Games
          </Text>
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard games={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
