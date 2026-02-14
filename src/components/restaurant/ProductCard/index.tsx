import React from 'react'
import { Product } from '../../../data/products'
import Button from '../../ui/Button'
import * as S from './styles'

interface ProductCardProps {
  product: Product
  onOpenModal: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  return (
    <S.Card style={{ cursor: 'default' }}>
      <S.Image src={product.image} alt={product.title} />
      <S.Title>{product.title}</S.Title>
      <S.Description>{product.descriptionShort}</S.Description>

      <Button
        variant="secondary"
        fullWidth
        onClick={() => onOpenModal(product)}
      >
        Comprar
      </Button>
    </S.Card>
  )
}

export default ProductCard
