export type RouteParams = {
    match: {
        params: {
            type: string;
        };
    }
}

export type DataProps = Array<{
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
}>