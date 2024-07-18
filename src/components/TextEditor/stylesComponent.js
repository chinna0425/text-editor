import styled from 'styled-components'

export const Btns = styled.button`
  padding: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: 10px;
  background-color: transparent;
  border-radius: 0px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  font-weight: none;
`

export const ButtonBold = styled(Btns)`
  color: ${props => props.props1.st1.color1};
`
export const ButtonItalic = styled(Btns)`
  color: ${props => props.props2.st2.color1};
`
export const ButtonUnderLine = styled(Btns)`
  color: ${props => props.props3.st3.color1};
`
export const TextBox = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: ${props => props.props4.fontWeight};
  font-style: ${props => props.props4.fontStyle};
  text-decoration: ${props => props.props4.fontDec};
`
