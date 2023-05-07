import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    updateSearchText : (SearchText : string) => void;
}

function SearchInput({ updateSearchText }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form style={{width : "100%"}} onSubmit={(event) =>{
        event.preventDefault();
        if(inputRef.current) updateSearchText(inputRef.current?.value);
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />}/>
            <Input ref={inputRef} borderRadius={20} placeholder="Search games..." variant={"filled"}/>
        </InputGroup>
    </form>
  )
}

export default SearchInput