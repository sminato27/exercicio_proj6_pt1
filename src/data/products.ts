import pizzaMarguerita from '../assets/images/pizza-marguerita.jpg'
import lasanhaBolonhesa from '../assets/images/lasanha-bolonhesa.jpg'
import gnocchiDeBatata from '../assets/images/gnocchi-de-batata.jpg'
import espagueteCarbonara from '../assets/images/espaguete-a-carbonara.jpg'
import calzoneClassico from '../assets/images/calzone.jpg'
import tiramisu from '../assets/images/tiramisu.jpg'
import sushiZen from '../assets/images/combinado-sushi.jpg'
import temakiSalmao from '../assets/images/temaki-salmao.jpg'
import yakisobaMisto from '../assets/images/yakisoba-misto.jpg'
import hotRoll from '../assets/images/hot-roll.jpg'
import sunomono from '../assets/images/sunomono.jpg'
import guiozaSuino from '../assets/images/guioza.jpg'
import feijaoTropeiro from '../assets/images/feijao-tropeiro.jpeg'
import frangoQuiabo from '../assets/images/frango-quiabo.jpg'
import costelinhaSuina from '../assets/images/costela-suina.jpg'
import paoDeQueijo from '../assets/images/pao-de-queijo.jpg'
import tutuFeijao from '../assets/images/tutu.jpg'
import doceDeLeite from '../assets/images/doce-de-leite-queijo.jpg'
import burguerClassico from '../assets/images/hamburguer-classico.jpg'
import baconBlast from '../assets/images/bacon-blast.jpg'
import veggieBurger from '../assets/images/veggie-burguer.jpg'
import milkshakeChocolate from '../assets/images/milkshake.jpg'
import batataFrita from '../assets/images/batata-frita.jpg'
import onionRings from '../assets/images/onion-rings.jpg'
import pizzaPortuguesa from '../assets/images/pizza-portuguesa.jpg'
import pizzaCalabresa from '../assets/images/calabresa.jpg'
import pizzaQuatroQueijos from '../assets/images/pizza-quatro-queijos.jpg'
import focacciaRomana from '../assets/images/focaccia-romana.jpg'
import bruschettaTradicional from '../assets/images/bruschetta.jpg'
import petitGateau from '../assets/images/petit-gateau.jpg'
import frangoXadrez from '../assets/images/frango-xadrez.jpg'
import padThai from '../assets/images/pad-thai.jpg'
import rolinhoPrimavera from '../assets/images/rolinho-primavera.jpg'
import arrozColorido from '../assets/images/arroz-colorido.jpg'
import bananaCaramelizada from '../assets/images/banana-caramelizada.jpg'
import carneBrocolis from '../assets/images/carne-brocolis.jpg'

export interface Product {
  id: number
  restaurantId: number
  title: string
  descriptionShort: string
  descriptionLong: string
  serveInfo: string
  price: number
  image: string
}

export const products: Product[] = [
  // Restaurante 1 - Italiana
  {
    id: 1,
    restaurantId: 1,
    title: 'Pizza Marguerita',
    descriptionShort: 'A clássica pizza italiana com molho de tomate natural, mozzarella de búfala fresca e manjericão.',
    descriptionLong: 'A clássica pizza italiana com molho de tomate natural, mozzarella de búfala fresca, manjericão colhido na hora e um fio de azeite extra virgem. Nossa massa passa por um processo de fermentação lenta de 48 horas, resultando em uma textura leve e sabor inigualável.',
    serveInfo: 'de 2 a 3 pessoas',
    price: 60.90,
    image: pizzaMarguerita
  },
  {
    id: 2,
    restaurantId: 1,
    title: 'Lasanha à Bolonhesa',
    descriptionShort: 'Camadas generosas de massa artesanal com ragu de carne e molho bechamel.',
    descriptionLong: 'Camadas generosas de massa artesanal intercaladas com ragu de carne bovina cozido lentamente por 6 horas, molho bechamel cremoso e muito queijo parmesão gratinado.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 52.00,
    image: lasanhaBolonhesa
  },
  {
    id: 3,
    restaurantId: 1,
    title: 'Gnocchi de Batata',
    descriptionShort: 'Gnocchi feito em casa servido com molho de tomates frescos.',
    descriptionLong: 'Gnocchi feito em casa com batatas selecionadas, servido com molho de tomates frescos e manjericão.',
    serveInfo: '1 pessoa',
    price: 45.00,
    image: gnocchiDeBatata
  },
  {
    id: 4,
    restaurantId: 1,
    title: 'Spaghetti Carbonara',
    descriptionShort: 'O verdadeiro carbonara com guanciale e queijo pecorino.',
    descriptionLong: 'O verdadeiro carbonara: guanciale crocante, gemas de ovos, queijo pecorino romano e pimenta do reino moída na hora.',
    serveInfo: '1 pessoa',
    price: 48.00,
    image: espagueteCarbonara
  },
  {
    id: 5,
    restaurantId: 1,
    title: 'Calzone Clássico',
    descriptionShort: 'Pizza fechada recheada com ricota e mozzarella.',
    descriptionLong: 'Pizza fechada recheada com ricota temperada, mozzarella, presunto cozido e um toque de molho de tomate por cima.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 55.00,
    image: calzoneClassico
  },
  {
    id: 6,
    restaurantId: 1,
    title: 'Tiramisù',
    descriptionShort: 'Sobremesa clássica italiana com café e mascarpone.',
    descriptionLong: 'Sobremesa clássica italiana com biscoitos champanhe embebidos em café espresso, creme de mascarpone aveludado e cacau em pó.',
    serveInfo: '1 pessoa',
    price: 25.00,
    image: tiramisu
  },
  // Restaurante 2 - Japonesa
  {
    id: 7,
    restaurantId: 2,
    title: 'Combinado Sushi Zen',
    descriptionShort: 'Seleção especial do chef com 20 peças variadas.',
    descriptionLong: 'Uma seleção premium preparada pelo nosso sushiman, incluindo sashimis de salmão e atum, niguiris variados, uramakis e hossomakis frescos.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 85.00,
    image: sushiZen
  },
  {
    id: 8,
    restaurantId: 2,
    title: 'Temaki de Salmão',
    descriptionShort: 'Cone de alga com arroz, salmão fresco e cebolinha.',
    descriptionLong: 'Temaki tradicional recheado com cubos de salmão fresco, arroz temperado, cebolinha e um toque opcional de cream cheese.',
    serveInfo: '1 pessoa',
    price: 32.00,
    image: temakiSalmao
  },
  {
    id: 9,
    restaurantId: 2,
    title: 'Yakisoba Misto',
    descriptionShort: 'Macarrão oriental com carne, frango e legumes.',
    descriptionLong: 'Delicioso macarrão oriental preparado no wok com tiras de carne bovina, peito de frango, legumes frescos selecionados e molho shoyu especial.',
    serveInfo: '1 pessoa',
    price: 45.00,
    image: yakisobaMisto
  },
  {
    id: 10,
    restaurantId: 2,
    title: 'Hot Roll',
    descriptionShort: 'Sushi empanado e frito com recheio de salmão.',
    descriptionLong: 'Dez unidades de sushi empanado em farinha panko e frito, recheado com salmão e cream cheese, finalizado com molho tarê.',
    serveInfo: '1 pessoa',
    price: 38.00,
    image: hotRoll
  },
  {
    id: 11,
    restaurantId: 2,
    title: 'Sunomono',
    descriptionShort: 'Salada de pepino agridoce com gergelim.',
    descriptionLong: 'Fatias finas de pepino japonês marinadas em molho agridoce de vinagre de arroz, finalizadas com sementes de gergelim preto e branco.',
    serveInfo: '1 pessoa',
    price: 18.00,
    image: sunomono
  },
  {
    id: 12,
    restaurantId: 2,
    title: 'Guioza Suíno',
    descriptionShort: 'Pastéis japoneses grelhados recheados com carne suína.',
    descriptionLong: 'Seis unidades de pastéis japoneses finos, recheados com carne suína temperada e legumes, grelhados na chapa e servidos com molho ponzu.',
    serveInfo: '1 pessoa',
    price: 28.00,
    image: guiozaSuino
  },
  // Restaurante 3 - Brasileira
  {
    id: 13,
    restaurantId: 3,
    title: 'Feijão Tropeiro',
    descriptionShort: 'Tradicional prato mineiro com feijão, bacon e couve.',
    descriptionLong: 'Nosso famoso feijão tropeiro preparado com feijão roxinho, farinha de mandioca, ovos, bacon, linguiça calabresa, couve fresquinha e torresmo crocante.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 42.00,
    image: feijaoTropeiro
  },
  {
    id: 14,
    restaurantId: 3,
    title: 'Frango com Quiabo',
    descriptionShort: 'Frango caipira ensopado com quiabo sem baba.',
    descriptionLong: 'Frango caipira cozido lentamente em molho caseiro com temperos mineiros e quiabo preparado com técnica especial para garantir o melhor sabor.',
    serveInfo: '1 pessoa',
    price: 38.00,
    image: frangoQuiabo
  },
  {
    id: 15,
    restaurantId: 3,
    title: 'Costelinha Suína',
    descriptionShort: 'Costelinha frita acompanhada de canjiquinha.',
    descriptionLong: 'Costelinha de porco marinada em ervas e frita até dourar, servida com uma cremosa canjiquinha preparada com bacon e tempero da casa.',
    serveInfo: '1 pessoa',
    price: 48.00,
    image: costelinhaSuina
  },
  {
    id: 16,
    restaurantId: 3,
    title: 'Pão de Queijo Recheado',
    descriptionShort: 'Porção de pães de queijo recheados com pernil.',
    descriptionLong: 'Seis unidades de pão de queijo artesanal mineiro, recheados com pernil desfiado suculento e um toque de geleia de pimenta.',
    serveInfo: '1 pessoa',
    price: 25.00,
    image: paoDeQueijo
  },
  {
    id: 17,
    restaurantId: 3,
    title: 'Tutu de Feijão',
    descriptionShort: 'Feijão batido com farinha acompanhado de lombo.',
    descriptionLong: 'Cremoso tutu de feijão preto finalizado com ovos e torresmo, acompanhado de fatias de lombo suíno grelhado e arroz branco.',
    serveInfo: '1 pessoa',
    price: 44.00,
    image: tutuFeijao
  },
  {
    id: 18,
    restaurantId: 3,
    title: 'Doce de Leite com Queijo',
    descriptionShort: 'Sobremesa típica de Minas Gerais.',
    descriptionLong: 'Fatia generosa de queijo minas padrão servida com doce de leite artesanal produzido em fazendas do interior de Minas.',
    serveInfo: '1 pessoa',
    price: 18.00,
    image: doceDeLeite
  },
  // Restaurante 4 - Lanches
  {
    id: 19,
    restaurantId: 4,
    title: 'Burger Clássico',
    descriptionShort: 'Hambúrguer bovino com queijo, alface e tomate.',
    descriptionLong: 'Hambúrguer de 180g de blend bovino selecionado, grelhado no fogo, queijo cheddar derretido, alface americana, tomate, picles e molho especial no pão de brioche.',
    serveInfo: '1 pessoa',
    price: 35.00,
    image: burguerClassico
  },
  {
    id: 20,
    restaurantId: 4,
    title: 'Bacon Blast',
    descriptionShort: 'Burger com muito bacon crocante e cebola caramelizada.',
    descriptionLong: 'Para os amantes de bacon: burger bovino de 180g, camadas duplas de bacon crocante, queijo prato, cebola caramelizada e maionese defumada.',
    serveInfo: '1 pessoa',
    price: 39.00,
    image: baconBlast
  },
  {
    id: 21,
    restaurantId: 4,
    title: 'Batata Frita Especial',
    descriptionShort: 'Porção de batatas com cheddar e bacon.',
    descriptionLong: 'Grande porção de batatas fritas crocantes por fora e macias por dentro, cobertas com molho cheddar cremoso e pedaços de bacon frito.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 28.00,
    image: batataFrita
  },
  {
    id: 22,
    restaurantId: 4,
    title: 'Veggie Burger',
    descriptionShort: 'Hambúrguer de grão-de-bico com guacamole.',
    descriptionLong: 'Opção vegetariana saborosa: hambúrguer artesanal de grão-de-bico e ervas, queijo muçarela, guacamole fresca e alface no pão integral.',
    serveInfo: '1 pessoa',
    price: 34.00,
    image: veggieBurger
  },
  {
    id: 23,
    restaurantId: 4,
    title: 'Milkshake de Chocolate',
    descriptionShort: 'Batido com sorvete premium e calda.',
    descriptionLong: 'Milkshake cremoso feito com sorvete de chocolate premium, calda de chocolate belga e finalizado com chantilly.',
    serveInfo: '1 pessoa',
    price: 22.00,
    image: milkshakeChocolate
  },
  {
    id: 24,
    restaurantId: 4,
    title: 'Onion Rings',
    descriptionShort: 'Anéis de cebola empanados e crocantes.',
    descriptionLong: 'Dez unidades de anéis de cebola selecionados, empanados em massa temperada e fritos até ficarem extremamente crocantes.',
    serveInfo: '1 pessoa',
    price: 24.00,
    image: onionRings
  },
  // Restaurante 5 - Italiana (Pizzaria)
  {
    id: 25,
    restaurantId: 5,
    title: 'Pizza Calabresa',
    descriptionShort: 'A queridinha: calabresa fatiada com cebola.',
    descriptionLong: 'Massa de fermentação natural, molho de tomate pelado italiano, mozzarella, calabresa artesanal fatiada, cebola roxa e orégano.',
    serveInfo: 'de 2 a 3 pessoas',
    price: 58.00,
    image: pizzaCalabresa
  },
  {
    id: 26,
    restaurantId: 5,
    title: 'Pizza Portuguesa',
    descriptionShort: 'Completa com presunto, ovos e ervilha.',
    descriptionLong: 'Tradição brasileira: mozzarella, presunto cozido, ovos, cebola, ervilhas, azeitonas pretas e um toque de azeite.',
    serveInfo: 'de 2 a 3 pessoas',
    price: 62.00,
    image: pizzaPortuguesa
  },
  {
    id: 27,
    restaurantId: 5,
    title: 'Pizza Quatro Queijos',
    descriptionShort: 'Mix de mozzarella, gorgonzola, parmesão e provolone.',
    descriptionLong: 'Combinação harmônica de quatro queijos selecionados sobre nossa base de tomate italiano e massa crocante.',
    serveInfo: 'de 2 a 3 pessoas',
    price: 65.00,
    image: pizzaQuatroQueijos
  },
  {
    id: 28,
    restaurantId: 5,
    title: 'Focaccia Romana',
    descriptionShort: 'Massa temperada com alecrim e sal grosso.',
    descriptionLong: 'Entrada ideal: massa de pizza assada com azeite de oliva extra virgem, alecrim fresco e flor de sal.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 25.00,
    image: focacciaRomana
  },
  {
    id: 29,
    restaurantId: 5,
    title: 'Bruschetta Tradicional',
    descriptionShort: 'Torradas com tomate, alho e manjericão.',
    descriptionLong: 'Quatro fatias de pão italiano grelhado, cobertas com tomates picados, alho, manjericão fresco e azeite.',
    serveInfo: '1 pessoa',
    price: 22.00,
    image: bruschettaTradicional
  },
  {
    id: 30,
    restaurantId: 5,
    title: 'Petit Gâteau',
    descriptionShort: 'Bolinho quente de chocolate com sorvete.',
    descriptionLong: 'Clássico bolinho de chocolate com recheio cremoso, servido com uma bola de sorvete de baunilha e calda de morango.',
    serveInfo: '1 pessoa',
    price: 26.00,
    image: petitGateau
  },
  // Restaurante 6 - Asiática
  {
    id: 31,
    restaurantId: 6,
    title: 'Frango Xadrez',
    descriptionShort: 'Cubos de frango com pimentões e amendoim.',
    descriptionLong: 'Prato clássico da cozinha chinesa: cubos de peito de frango salteados no wok com pimentões coloridos, cebola, amendoim torrado e molho escuro.',
    serveInfo: '1 pessoa',
    price: 42.00,
    image: frangoXadrez
  },
  {
    id: 32,
    restaurantId: 6,
    title: 'Pad Thai',
    descriptionShort: 'Macarrão de arroz tailandês com camarão.',
    descriptionLong: 'O prato nacional da Tailândia: macarrão de arroz frito com camarões, broto de feijão, ovos, amendoim e limão.',
    serveInfo: '1 pessoa',
    price: 52.00,
    image: padThai
  },
  {
    id: 33,
    restaurantId: 6,
    title: 'Rolinho Primavera',
    descriptionShort: 'Massa crocante recheada com legumes.',
    descriptionLong: 'Duas unidades de rolinho primavera fritos, recheados com mix de legumes orientais, servidos com molho agridoce.',
    serveInfo: '1 pessoa',
    price: 15.00,
    image: rolinhoPrimavera
  },
  {
    id: 34,
    restaurantId: 6,
    title: 'Carne com Brócolis',
    descriptionShort: 'Fatias de carne bovina e brócolis ao molho de ostra.',
    descriptionLong: 'Tiras de carne bovina macias preparadas com brócolis japonês crocante e um delicioso molho à base de ostra e gengibre.',
    serveInfo: '1 pessoa',
    price: 48.00,
    image: carneBrocolis
  },
  {
    id: 35,
    restaurantId: 6,
    title: 'Arroz Colorido (Yakimeshi)',
    descriptionShort: 'Arroz frito com ovos, presunto e legumes.',
    descriptionLong: 'Arroz frito no estilo oriental com pedacinhos de ovos mexidos, presunto picado, cenoura e cebolinha.',
    serveInfo: 'de 1 a 2 pessoas',
    price: 32.00,
    image: arrozColorido
  },
  {
    id: 36,
    restaurantId: 6,
    title: 'Banana Caramelizada',
    descriptionShort: 'Bananas fritas com cobertura de caramelo.',
    descriptionLong: 'Sobremesa tradicional: bananas empanadas e fritas, envoltas em uma camada crocante de caramelo quente e sementes de gergelim.',
    serveInfo: '1 pessoa',
    price: 18.00,
    image: bananaCaramelizada
  }
]
