import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import * as S from './styles'

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.MainContent>
        {children}
      </S.MainContent>
      <Footer />
    </S.Container>
  )
}

export default PageContainer
