import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { IoClose } from 'react-icons/io5'
import * as S from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={e => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <IoClose />
        </S.CloseButton>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  )
}

export default Modal
