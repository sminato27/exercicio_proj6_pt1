import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 4px 12px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  transition: all 0.2s ease;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  ${props =>
    props.variant === 'primary' || !props.variant
      ? css`
          background-color: ${props.theme.colors.brand};
          color: ${props.theme.colors.textOnBrand};
          &:hover {
            background-color: ${props.theme.colors.brandDark};
          }
        `
      : css`
          background-color: ${props.theme.colors.textOnBrand};
          color: ${props.theme.colors.brand};
          &:hover {
            background-color: ${props.theme.colors.white};
            opacity: 0.9;
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
