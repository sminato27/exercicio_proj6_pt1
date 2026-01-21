import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 8px;
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.textOnBrand};
`

export const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.textOnBrand};
  border: 1px solid ${props => props.theme.colors.textOnBrand};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  width: 100%;

  &:focus {
    border-color: ${props => props.theme.colors.brandDark};
  }

  &.error {
    border-color: #ff0000;
  }
`

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 12px;
`
