import React from "react";
import ContentHeader from "../../components/ContantHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styled";

const Dashboard: React.FC = () => {
    const options = [
        { value: 'Vitor', label: 'Vitor' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Gab', label: 'Gab' }
    ]
    return (
        <Container>
            <ContentHeader lineColor="#F7931B" title="Dashboard">
                <SelectInput onChange={() => { }} options={options} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;