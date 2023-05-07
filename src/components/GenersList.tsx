import { Box, Button, Card, CardBody, HStack, Heading, Image, List, ListItem, Skeleton, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import useGeners from "../hook/useGeners"
import SkeletonCard from "./SkeletonCard";
import { Genre } from '../hook/useGeners';

interface Props {
    updateGener : (genre : Genre) => void;
    SelectedGener : Genre | null;
}
function GenersList({ updateGener,SelectedGener } : Props) {
    const { data,isLoading,errors } = useGeners();
    if(errors) return null;
    if(isLoading){
        return(
        <List>
           {Array(20).fill(0).map((item,id) => 
           <ListItem key={id} paddingY={"5px"}>
                <HStack>
                    <Skeleton boxSize={"32px"} borderRadius={8}/>
                    <Skeleton height={"10px"} width={"70px"}/>
                </HStack>
           </ListItem>)}
        </List>
        )
    }
    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
            <List>
               {data.map(gener => <ListItem key={gener.id} paddingY={"5px"}>
                <HStack>
                    <Image src={gener.image_background} objectFit={"cover"} boxSize={"32px"} borderRadius={8}/> 
                    <Button whiteSpace={'normal'} textAlign={"left"} fontWeight={ gener.id === SelectedGener?.id ? "bold" : "normal"} onClick={() => updateGener(gener)} variant={"link"} fontSize={"lg"}>{gener.name}</Button>
                </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenersList