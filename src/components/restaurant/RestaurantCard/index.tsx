import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import TagPill from '../TagPill'
import Rating from '../Rating'
import * as S from './styles'

interface RestaurantCardProps {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  rating: number
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  rating
}) => {
  const navigate = useNavigate()

  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={image} alt={title} />
        <S.TagsWrapper>
          {tags.map(tag => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </S.TagsWrapper>
      </S.ImageWrapper>
      <S.Content>
        <S.Header>
          <h3>{title}</h3>
          <Rating score={rating} />
        </S.Header>
        <S.Description>{description}</S.Description>
        <Button onClick={() => navigate(`/restaurantes/${id}`)} style={{ alignSelf: 'flex-start' }}>
          Saiba mais
        </Button>
      </S.Content>
    </S.Card>
  )
}

export default RestaurantCard
