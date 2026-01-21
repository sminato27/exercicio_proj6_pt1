import styled from 'styled-components'
import { container } from '../../styles/mixins'

export const HomeContainer = styled.div`
  ${container}
  padding-top: 80px;
`

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
