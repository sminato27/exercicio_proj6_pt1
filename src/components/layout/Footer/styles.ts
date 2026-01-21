import styled from 'styled-components'
import { bgPattern } from '../../../styles/mixins'

export const FooterContainer = styled.footer`
  ${bgPattern}
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 80px;
`

export const Logo = styled.img`
  width: 125px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
`

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.textOnBrand};
  border-radius: 50%;
  font-size: 14px;
`

export const Disclaimer = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.brand};
  max-width: 480px;
  margin: 0 auto;
`
