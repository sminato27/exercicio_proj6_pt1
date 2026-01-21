import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: ${props => props.theme.colors.brand};
  padding: 32px;
  position: relative;
  max-width: 1024px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
`
