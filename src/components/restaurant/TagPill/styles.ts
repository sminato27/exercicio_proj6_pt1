import styled from 'styled-components'

export const TagContainer = styled.div`
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.textOnBrand};
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
`
