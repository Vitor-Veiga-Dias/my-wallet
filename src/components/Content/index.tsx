import React from "react";
import { Container } from "./styled";
import { Props } from "./types";


const Content = ({ children }: Props) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;