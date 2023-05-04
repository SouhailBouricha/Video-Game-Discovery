import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeners from "../hook/useGeners"

function GenersList() {
    const { data,isLoading,errors } = useGeners();
    return (
        <List>
           {data.map(gener => <ListItem key={gener.id} paddingY={"5px"}><HStack><Image src={gener.image_background} boxSize={"32px"} borderRadius={8}/> <Text fontSize={"lg"}>{gener.name}</Text></HStack></ListItem>)}
        </List>
    )
}

export default GenersList