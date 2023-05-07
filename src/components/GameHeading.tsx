import { Heading } from "@chakra-ui/react"
import { Genre } from "../hook/useGeners";
import { Platfrom } from "../hook/usePlatforms";

interface Props{
    selectedGenres : Genre | null;
    selectedPlatform : Platfrom | null;
}
function GameHeading({selectedGenres,selectedPlatform} : Props) {
    const heading = `${selectedPlatform?.name || ""} ${selectedGenres?.name || ""} Games`;
  return (
    <Heading marginY={5} as="h1" fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading