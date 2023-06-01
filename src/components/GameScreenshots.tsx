import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} spacing={2}>
        {data?.results.map((screenshot) => (
          <Image src={screenshot.image} key={screenshot.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
