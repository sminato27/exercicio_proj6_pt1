import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/layout/PageContainer'
import RestaurantCard from '../../components/restaurant/RestaurantCard'
import * as S from './styles'
import { fetchRestaurants, ApiRestaurant } from '../../services/efoodApi'

const Home: React.FC = () => {
    const [restaurants, setRestaurants] = useState<ApiRestaurant[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        ;(async () => {
            try {
                setLoading(true)
                const data = await fetchRestaurants()
                setRestaurants(data)
            } catch (e) {
                setError(e instanceof Error ? e.message : 'Erro desconhecido')
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return (
        <PageContainer>
            <S.HomeContainer>
                {loading && <p>Carregando restaurantes...</p>}
                {error && <p>{error}</p>}

                {!loading && !error && (
                    <S.RestaurantsGrid>
                        {restaurants.map(r => (
                            <RestaurantCard
                                key={r.id}
                                id={r.id}
                                title={r.titulo}
                                description={r.descricao}
                                image={r.capa}
                                tags={[
                                    r.destacado ? 'Destaque da semana' : '',
                                    r.tipo
                                ].filter(Boolean)}
                                rating={r.avaliacao}
                            />
                        ))}
                    </S.RestaurantsGrid>
                )}
            </S.HomeContainer>
        </PageContainer>
    )
}

export default Home
