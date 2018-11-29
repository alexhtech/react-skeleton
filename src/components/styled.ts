import styled from 'styled-components'

export interface IStyledButton {
    red?: boolean
}

const StyledButton = styled.button<IStyledButton>`
    background-color: blue;
    padding: 10px;
    color: white;
    font-size: 14px;
    ${({ red }: IStyledButton) =>
        red &&
        `
    background-color: red;
    `};
`

export { StyledButton }
