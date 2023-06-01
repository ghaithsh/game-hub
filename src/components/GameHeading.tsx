import { Heading } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find((p) => p.id === platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
