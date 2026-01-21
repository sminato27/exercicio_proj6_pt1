import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <>
      <S.Overlay onClick={onClose} />
      <S.DrawerContainer onClick={e => e.stopPropagation()}>
        {children}
      </S.DrawerContainer>
    </>,
    document.body
  )
}

export default Drawer
