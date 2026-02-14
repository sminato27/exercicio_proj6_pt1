import type { ApiDish } from '../services/efoodApi'
import type { Product } from '../data/products'

export function dishToProduct(dish: ApiDish, restaurantId: number): Product {
  return {
    id: dish.id,
    restaurantId,
    title: dish.nome,
    descriptionShort: dish.descricao.length > 110 ? dish.descricao.slice(0, 110) + '...' : dish.descricao,
    descriptionLong: dish.descricao,
    serveInfo: dish.porcao,
    price: dish.preco,
    image: dish.foto
  }
}
