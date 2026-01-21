import { css } from 'styled-components'

export const bgPattern = css`
  background-color: ${props => props.theme.colors.bg};
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(230, 103, 103, 0.05) 10px,
    rgba(230, 103, 103, 0.05) 20px
  );
`

export const container = css`
  max-width: ${props => props.theme.breakpoints.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`
