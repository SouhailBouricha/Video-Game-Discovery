import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
interface Props{
    updateOrder : (order : string) => void;
    selectedOrder : string | null;
}
function SortSelector({ updateOrder , selectedOrder} : Props) {
    const sortOrders = [
        {value  : "" , label : "Relevance"},
        {value  : "-added" , label : "Date added"},
        {value  : "name" , label : "Name"},
        {value  : "-released" , label : "Release date"},
        {value  : "-metacritic" , label : "Popularity"},
        {value  : "-rating" , label : "Avrege Rating"},
    ];
    const currentSelectedOrder = sortOrders.find(sort => sort.value === selectedOrder);
  return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by : {currentSelectedOrder?.label || 'Relevance' } </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem key={order.label} onClick={() =>updateOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
        )
}

export default SortSelector