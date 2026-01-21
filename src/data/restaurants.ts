import heroItaliana from '../assets/images/hero-italiana.png'
import heroSushi from '../assets/images/hero-sushi.png'
import pizza from '../assets/images/pizza.png'
import comidaMineira from '../assets/images/comida-mineira.jpg'
import hamburguer from '../assets/images/hamburguer.jpg'
import wok from '../assets/images/wok.jpg'

export interface Restaurant {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  rating: number
  category: string
  heroImage: string
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description: 'A autêntica experiência italiana, com massas artesanais e pizzas assadas no forno a lenha. Ingredientes frescos e receitas tradicionais.',
    image: heroItaliana,
    tags: ['Destaque da semana', 'Italiana'],
    rating: 4.9,
    category: 'Italiana',
    heroImage: heroItaliana
  },
  {
    id: 2,
    title: 'Sushi Zen',
    description: 'O melhor da culinária japonesa com peixes frescos selecionados diariamente e um toque de modernidade nas apresentações.',
    image: heroSushi,
    tags: ['Japonesa'],
    rating: 4.8,
    category: 'Japonesa',
    heroImage: heroSushi
  },
  {
    id: 3,
    title: 'Cantina do Mineiro',
    description: 'Comida caseira mineira com aquele tempero especial. Feijão tropeiro, frango com quiabo e muito mais.',
    image: comidaMineira,
    tags: ['Brasileira'],
    rating: 4.7,
    category: 'Brasileira',
    heroImage: comidaMineira
  },
  {
    id: 4,
    title: 'Burger House',
    description: 'Hambúrgueres artesanais grelhados no fogo, com molhos exclusivos e pães fresquinhos todos os dias.',
    image: hamburguer,
    tags: ['Lanches'],
    rating: 4.6,
    category: 'Lanches',
    heroImage: hamburguer
  },
  {
    id: 5,
    title: 'Pizzaria Verace',
    description: 'Pizzas seguindo a tradição napolitana, com fermentação natural e bordas aeradas. O sabor da Itália na sua casa.',
    image: pizza,
    tags: ['Italiana'],
    rating: 4.9,
    category: 'Italiana',
    heroImage: pizza
  },
  {
    id: 6,
    title: 'Wok Express',
    description: 'Culinária asiática rápida e saborosa. Pratos preparados na hora no wok com vegetais crocantes e carnes selecionadas.',
    image: wok,
    tags: ['Asiática'],
    rating: 4.5,
    category: 'Asiática',
    heroImage: wok
  }
]
