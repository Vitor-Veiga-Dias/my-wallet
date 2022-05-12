import React from "react";
import { 
    Container,
    ToogleLabel,
    ToogleSwitch
 } from "./styled";

const Toggle: React.FC = () => (
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSwitch
            checked={false}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log('mudou')}
        />
        <ToogleLabel>Dark</ToogleLabel>
    </Container>
)



export default Toggle;