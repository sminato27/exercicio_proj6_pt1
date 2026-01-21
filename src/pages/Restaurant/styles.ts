import styled from 'styled-components'
import { container } from '../../styles/mixins'

export const Hero = styled.div<{ image: string }>`
  height: 280px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`

export const HeroContent = styled.div`
  ${container}
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px;

  span {
    font-weight: 100;
    font-size: 32px;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
  }
`

export const ProductsSection = styled.section`
  background-color: ${props => props.theme.colors.bg};
`

export const ProductsGrid = styled.div`
  ${container}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    font-size: 14px;
  }
`

export const CartDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${props => props.theme.colors.textOnBrand};

  h2 {
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 14px;
`

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .row {
    display: flex;
    gap: 32px;
  }
`

export const OrderConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${props => props.theme.colors.textOnBrand};

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
