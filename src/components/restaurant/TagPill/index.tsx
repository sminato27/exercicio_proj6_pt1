import React from 'react'
import * as S from './styles'

interface TagPillProps {
  children: React.ReactNode
}

const TagPill: React.FC<TagPillProps> = ({ children }) => {
  return <S.TagContainer>{children}</S.TagContainer>
}

export default TagPill
