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

export type CheckoutPayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type CheckoutResponse = {
  orderId: string | number
  [key: string]: unknown
}

export async function fetchRestaurants(): Promise<ApiRestaurant[]> {
    const res = await fetch(`${EFOOD_API_BASE}/restaurantes`)
    if (!res.ok) throw new Error(`Erro ao buscar restaurantes: ${res.status}`)
    return res.json()
}

export async function postCheckout(payload: CheckoutPayload): Promise<CheckoutResponse> {
  const res = await fetch(`${EFOOD_API_BASE}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    throw new Error(`Erro ao finalizar pedido: ${res.status}`)
  }

  return res.json()
}
