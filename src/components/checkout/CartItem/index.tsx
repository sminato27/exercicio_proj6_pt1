import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { CartItemType } from '../../../context/CartContext'
import { useCart } from '../../../hooks/useCart'
import * as S from './styles'

interface CartItemProps {
  item: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem } = useCart()

  return (
    <S.Container>
      <S.Image src={item.image} alt={item.title} />
      <S.Info>
        <h3>{item.title}</h3>
        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.price)}
        </span>
      </S.Info>
      <S.RemoveButton onClick={() => removeItem(item.id)}>
        <FaTrash />
      </S.RemoveButton>
    </S.Container>
  )
}

export default CartItem
