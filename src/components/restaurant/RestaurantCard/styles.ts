import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.brand};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 217px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TagsWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.colors.brand};
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.brand};
`
