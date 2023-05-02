import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hook/useGames"
import { FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props{
    platforms : Platform[];
}

function PlatformIconList({ platforms } : Props) {
  const iconMap : { [key : string] : IconType } = {
    pc : FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox,
    mac : FaApple,
    linux : FaLinux,
    android : FaAndroid,
    ios : MdPhoneIphone,
    web : BsGlobe,
  }
  return (
    <HStack marginY={1}>
      {platforms.map(platform => <Icon key={platform.id} color="gray.500" as={iconMap[platform.slug]} />)}
    </HStack>
  )
}

export default PlatformIconList