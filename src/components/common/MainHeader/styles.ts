import styled from 'styled-components'

interface HeaderWrapProps {
  customColor?: boolean
  isDisabled?: boolean
}

export const HeaderWrap = styled.div<HeaderWrapProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  max-width: 1442px;
  height: 90px;
  background-image: url(${require('@assets/images/header_bg.svg').default});
`

export const HeaderAnchor = styled.a`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 45px;
  color: #ffffff;
`
