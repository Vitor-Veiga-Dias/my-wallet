export const formatCorrency = (current: number): string => {
    return current.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );
};