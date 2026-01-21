import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.theme.colors.brand};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.textOnBrand};
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  flex: 1;
`
