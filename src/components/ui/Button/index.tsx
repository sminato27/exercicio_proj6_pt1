import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: S.ButtonVariant
  fullWidth?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
