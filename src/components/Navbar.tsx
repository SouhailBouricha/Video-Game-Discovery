import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  updateSearchText : (SearchText : string) => void;
}

function Navbar({ updateSearchText } : Props) {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput updateSearchText={updateSearchText}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar