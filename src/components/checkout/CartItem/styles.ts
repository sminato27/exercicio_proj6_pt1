import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.textOnBrand};
  padding: 8px;
  display: flex;
  gap: 8px;
  position: relative;
  margin-bottom: 16px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-weight: 900;
    font-size: 18px;
    color: ${props => props.theme.colors.brand};
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.8;
    }
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.brand};
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: ${props => props.theme.colors.brand};
  font-size: 16px;
`
