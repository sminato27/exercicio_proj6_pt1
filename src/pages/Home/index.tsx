import React from 'react'
import PageContainer from '../../components/layout/PageContainer'
import RestaurantCard from '../../components/restaurant/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import * as S from './styles'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <S.HomeContainer>
        <S.RestaurantsGrid>
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </S.RestaurantsGrid>
      </S.HomeContainer>
    </PageContainer>
  )
}

export default Home
