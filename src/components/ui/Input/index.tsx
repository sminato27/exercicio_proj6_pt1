import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <S.Container>
      <S.Label htmlFor={props.id}>{label}</S.Label>
      <S.StyledInput className={error ? 'error' : ''} {...props} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}

export default Input
