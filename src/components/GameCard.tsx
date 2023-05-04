import { Card, CardBody, HStack, Heading, Image, Skeleton } from "@chakra-ui/react"
import { Game } from "../hook/useGames"
import PlatformIconList from "./PlatformIconList";
import { Platform } from "../hook/useGames"
import CriticScore from "./CriticScore";
import GetOptimizeUrl from "../services/Image-Url";

interface Props {
    game : Game;
}
function GameCard( { game } : Props ) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={GetOptimizeUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
              <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard