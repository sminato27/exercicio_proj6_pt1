export const EFOOD_API_BASE = 'https://api-ebac.vercel.app/api/efood'

export type ApiDish = {
    id: number
    nome: string
    descricao: string
    porcao: string
    preco: number
    foto: string
}

export type ApiRestaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: ApiDish[]
}

export async function fetchRestaurants(): Promise<ApiRestaurant[]> {
    const res = await fetch(`${EFOOD_API_BASE}/restaurantes`)
    if (!res.ok) throw new Error(`Erro ao buscar restaurantes: ${res.status}`)
    return res.json()
}
