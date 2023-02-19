import React, { useMemo, useState, useEffect } from "react";
import { HistoryFinanceCard } from "../../components";
import ContentHeader from "../../components/ContantHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styled";
import gains from '../../repositories/gains';
import expanses from '../../repositories/expenses';
import { DataProps, RouteParams } from "./types";
import { formatCorrency } from "../../utils/formatCorrency";
import { formatDate } from "../../utils/formatDate";

const List: React.FC<RouteParams> = ({ match }) => {
    const [data, setData] = useState<DataProps>([])

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

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expanses;
    }, [type])

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormated: formatCorrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })
        setData(response);
        console.log(data)
    }, [type])
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
                {
                    data.map((item) => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dateFormated}
                            amount={item.amountFormated}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;