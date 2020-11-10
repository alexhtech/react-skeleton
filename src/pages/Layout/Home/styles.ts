import styled from 'styled-components'

interface HeaderProps {
  customColor?: boolean
  isDisabled?: boolean
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  max-width: 1442px;
`
