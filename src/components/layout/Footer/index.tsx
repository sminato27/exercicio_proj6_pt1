import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import logo from '../../../assets/logo.svg'
import * as S from './styles'

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.Logo src={logo} alt="efood" />
      <S.SocialLinks>
        <S.SocialIcon href="#"><FaInstagram /></S.SocialIcon>
        <S.SocialIcon href="#"><FaFacebook /></S.SocialIcon>
        <S.SocialIcon href="#"><FaTwitter /></S.SocialIcon>
      </S.SocialLinks>
      <S.Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pelo itinerário, entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </S.Disclaimer>
    </S.FooterContainer>
  )
}

export default Footer
