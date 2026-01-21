import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'
import logo from '../../../assets/logo.svg'
import * as S from './styles'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { totalItems, openCart } = useCart()

  const isHome = pathname === '/'

  if (isHome) {
    return (
      <S.HeaderContainer isHome>
        <S.Logo src={logo} alt="efood" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        <S.Title>
          Viva experiências gastronômicas<br />no conforto da sua casa
        </S.Title>
      </S.HeaderContainer>
    )
  }

  return (
    <S.HeaderContainer>
      <S.TopBar>
        <S.NavLink onClick={() => navigate('/')}>Restaurantes</S.NavLink>
        <S.Logo src={logo} alt="efood" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        <S.CartStatus onClick={openCart}>
          {totalItems} produto(s) no carrinho
        </S.CartStatus>
      </S.TopBar>
    </S.HeaderContainer>
  )
}

export default Header
