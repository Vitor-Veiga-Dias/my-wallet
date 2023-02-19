import React from "react";
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';
import {
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title
} from './styled';
import LogoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={LogoImg} alt={"Logo my Wallet"} />
                <Title>My Wallet</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='/Dashboard'>
                    <MdDashboard />
                    Deshboard
                </MenuItemLink>
                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href=''>
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;