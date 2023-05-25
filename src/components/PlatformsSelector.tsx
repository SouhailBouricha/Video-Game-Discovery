import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platfrom } from "../hook/usePlatforms"


interface Props{
  updatePlatforms : (platform : Platfrom) => void;
}
function PlatformsSelector({updatePlatforms} : Props) {
  const { data } = usePlatforms();
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => updatePlatforms(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformsSelector