import React, { useMemo } from "react";
import { HistoryFinanceCard } from "../../components";
import ContentHeader from "../../components/ContantHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styled";

type RouteParams = {
    match: {
        params: {
            type: string;
        };
    }
}

const List: React.FC<RouteParams> = ({ match }) => {
    const { type } = match.params
    const title = useMemo(() => {
        return type === 'entry-balance' ?
            {
                text: 'Entradas',
                lineColor: '#4E41F0'
            }
            :
            {
                text: 'Saídas',
                lineColor: '#E44C4E'
            }
    }, [type])

    const months = [
        { value: 7, label: 'julho' },
        { value: 8, label: 'junho' },
        { value: 9, label: 'agosto' }
    ]
    const years = [
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
    ]
    return (
        <Container>
            <ContentHeader lineColor={title.lineColor} title={title.text}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recorrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta De Luz"
                    subTitle="03/07/2022"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;