import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.overlay};
  z-index: 2000;
`

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: ${props => props.theme.colors.brand};
  z-index: 2001;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`
