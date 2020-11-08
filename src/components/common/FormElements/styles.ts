import styled from 'styled-components'

interface ILabel {
  error?: boolean
}
export const Label = styled.label<ILabel>`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  padding-bottom: 8px;
  color: ${({ error }) => (error ? `#EE0000` : `#343434`)};
`
export const Error = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #ff0c3e;
  padding-top: 4px;
`
interface IInfoText {
  isError?: string | boolean
}
export const InfoText = styled.p<IInfoText>`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${({ isError }) => (isError ? `#ff0c3e` : '#343434')};
  padding-top: 4px;
`
