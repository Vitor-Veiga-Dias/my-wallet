import React, { useMemo } from "react";
import emojis from '../../utils/emojis';
import Toggle from "../Toggle";
import { 
    Container,
    Profile, 
    Welcome, 
    UserName 
} from "./styled";

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length )
        console.log(indice)
        return emojis[indice]
    }, [])
    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Vitor Dias</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;