import React from 'react'
import { Container, TitleContainer, Controllers } from './styled';

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h1>Titulo</h1>
            </TitleContainer>
            <Controllers>
                <button>Botão A</button>
                <button>Botão B</button>
            </Controllers>
        </Container>
    )
}

export default ContentHeader;