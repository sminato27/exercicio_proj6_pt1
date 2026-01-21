import styled from 'styled-components'
import { bgPattern, container } from '../../../styles/mixins'

export const HeaderContainer = styled.header<{ isHome?: boolean }>`
  ${bgPattern}
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => (props.isHome ? '64px' : '0')};
`

export const TopBar = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const NavLink = styled.a`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.colors.brand};
  cursor: pointer;
`

export const CartStatus = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.colors.brand};
  cursor: pointer;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${props => props.theme.colors.brand};
  max-width: 540px;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 125px;
`
