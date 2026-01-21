import React from 'react'
import { FaStar } from 'react-icons/fa'
import * as S from './styles'

interface RatingProps {
  score: number
}

const Rating: React.FC<RatingProps> = ({ score }) => {
  return (
    <S.RatingContainer>
      {score} <FaStar />
    </S.RatingContainer>
  )
}

export default Rating
