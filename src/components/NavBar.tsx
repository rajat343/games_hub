import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/games_hub.jpg'
import ColourModeSwitch from './ToggleColourModeSwitch'

const NavBar = () => {
    return (
        <HStack>
            <Image src = {logo} boxSize='60px'/>
            <ColourModeSwitch />
        </HStack>
    )
}

export default NavBar