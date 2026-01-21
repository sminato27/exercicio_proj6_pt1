import React from 'react'
import { Product } from '../../../data/products'
import { useCart } from '../../../hooks/useCart'
import Button from '../../ui/Button'
import * as S from './styles'

interface ProductCardProps {
  product: Product
  onOpenModal: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const { addItem } = useCart()

  return (
    <S.Card onClick={() => onOpenModal(product)} style={{ cursor: 'pointer' }}>
      <S.Image src={product.image} alt={product.title} />
      <S.Title>{product.title}</S.Title>
      <S.Description>
        {product.descriptionShort}
      </S.Description>
      <Button
        variant="secondary"
        fullWidth
        onClick={(e) => {
          e.stopPropagation()
          addItem(product)
        }}
      >
        Adicionar ao carrinho
      </Button>
    </S.Card>
  )
}

export default ProductCard
