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
import mounths from "../../utils/mounths";
import { v4 as uuidv4 } from 'uuid';
const List: React.FC<RouteParams> = ({ match }) => {
    const [data, setData] = useState<DataProps>([])
    const [mounthSelected, setMounthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

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


    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expanses;
    }, [type])

    const year = useMemo(() => {
        let uniqueYears: number[] = [];
        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    }, [listData])

    const mounth = useMemo(() => {
        return mounths.map((mounth, index) => {
            return {
                value: index + 1,
                label: mounth
            }
        })
    }, [])
    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date);
            const mounth = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return mounth === mounthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        })
        const formattedDate = filteredDate.map((item) => {
            return {
                id: uuidv4(),
                description: item.description,
                amountFormated: formatCorrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        });
        setData(formattedDate);
    }, [listData, mounthSelected, yearSelected, selectedFrequency])

    const handleFrequencyClick = (frequency: string) => {
        const alredySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alredySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency)
            setSelectedFrequency(filtered)
        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }
    return (
        <Container>
            <ContentHeader lineColor={title.lineColor} title={title.text}>
                <SelectInput defaultValue={mounthSelected} onChange={(e) => { setMounthSelected(e.target.value) }} options={mounth} />
                <SelectInput defaultValue={yearSelected} onChange={(e) => { setYearSelected(e.target.value) }} options={year} />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className={
                        `tag-filter tag-filter-recorrent 
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`
                    }
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={
                        `tag-filter tag-filter-eventual 
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`
                    }
                    onClick={() => handleFrequencyClick('eventual')}

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