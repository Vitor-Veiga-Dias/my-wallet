import styled from 'styled-components';

interface ITagProps {
    color: string;
};

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiaty};
    list-style: none;
    border-radius: 8px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    &:hover{
        opacity: 0.7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 12px;
    }

    div span {
        font-weight: 500;
        font-size: 22px;
    }

    div small {
        font-weight: 200;
        color: #808e8e;
    }

`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 12px;
    height: 60%;
    background-color: ${props => props.color};
    position: absolute;
    left: 4px;
`;