export const theme = {
  colors: {
    bg: '#FFF1E5',
    surface: '#FFFFFF',
    brand: '#E66767',
    brandDark: '#C85B5B',
    textOnBrand: '#FFEBD9',
    text: '#4B2C2C',
    muted: '#8E6B6B',
    overlay: 'rgba(0,0,0,0.75)',
    white: '#FFFFFF',
    yellow: '#FFB930'
  },
  font: {
    family: "Arial, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
  },
  breakpoints: {
    desktop: '1024px',
    tablet: '768px',
    mobile: '480px'
  }
}

export type ThemeType = typeof theme
