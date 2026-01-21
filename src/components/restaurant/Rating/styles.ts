import styled from 'styled-components'

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.colors.brand};

  svg {
    color: ${props => props.theme.colors.yellow};
  }
`
