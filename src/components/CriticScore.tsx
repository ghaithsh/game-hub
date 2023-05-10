import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score < 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;