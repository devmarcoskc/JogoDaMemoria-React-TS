import styled from "styled-components";

type ContainerProps = {
    showBackGround: boolean;
}
type imgProps = {
    opacity?: number;
}

export const GridContainer = styled.div<ContainerProps>`
    background-color: ${props => props.showBackGround ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer
`
export const Icon = styled.img<imgProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ? props.opacity : 1};
`