import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageContainer from '../../components/layout/PageContainer'
import ProductCard from '../../components/restaurant/ProductCard'
import Modal from '../../components/ui/Modal'
import Drawer from '../../components/ui/Drawer'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import CartItem from '../../components/checkout/CartItem'
import { restaurants } from '../../data/restaurants'
import { products, Product } from '../../data/products'
import { useCart } from '../../hooks/useCart'
import * as S from './styles'

const Restaurant: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const restaurant = restaurants.find(r => r.id === Number(id))
  const restaurantProducts = products.filter(p => p.restaurantId === Number(id))

  const {
    items,
    isOpen,
    step,
    closeCart,
    setStep,
    totalPrice,
    addItem,
    clearCart
  } = useCart()

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [addressData, setAddressData] = useState({
    receiver: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    complement: ''
  })
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    month: '',
    year: ''
  })

  if (!restaurant) {
    return (
      <PageContainer>
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Restaurante não encontrado</h2>
          <Button onClick={() => navigate('/')}>Voltar para a Home</Button>
        </div>
      </PageContainer>
    )
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct)
      setSelectedProduct(null)
    }
  }

  const renderCart = () => (
    <S.CartDrawerContent>
      {items.length > 0 ? (
        <>
          <div>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <S.CartTotal>
            <span>Valor total</span>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalPrice)}
            </span>
          </S.CartTotal>
          <Button variant="secondary" fullWidth onClick={() => setStep('address')}>
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </S.CartDrawerContent>
  )

  const renderAddress = () => (
    <S.CartDrawerContent>
      <h2>Entrega</h2>
      <S.CheckoutForm>
        <Input
          label="Quem irá receber"
          value={addressData.receiver}
          onChange={e => setAddressData({ ...addressData, receiver: e.target.value })}
        />
        <Input
          label="Endereço"
          value={addressData.address}
          onChange={e => setAddressData({ ...addressData, address: e.target.value })}
        />
        <Input
          label="Cidade"
          value={addressData.city}
          onChange={e => setAddressData({ ...addressData, city: e.target.value })}
        />
        <div className="row">
          <Input
            label="CEP"
            value={addressData.zip}
            onChange={e => setAddressData({ ...addressData, zip: e.target.value })}
          />
          <Input
            label="Número"
            value={addressData.number}
            onChange={e => setAddressData({ ...addressData, number: e.target.value })}
          />
        </div>
        <Input
          label="Complemento (opcional)"
          value={addressData.complement}
          onChange={e => setAddressData({ ...addressData, complement: e.target.value })}
        />
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button
            variant="secondary"
            fullWidth
            type="button"
            onClick={() => {
              if (addressData.zip && addressData.number) {
                setStep('payment')
              } else {
                alert('CEP e Número são obrigatórios')
              }
            }}
          >
            Continuar com o pagamento
          </Button>
          <Button variant="secondary" fullWidth type="button" onClick={() => setStep('cart')}>
            Voltar para o carrinho
          </Button>
        </div>
      </S.CheckoutForm>
    </S.CartDrawerContent>
  )

  const renderPayment = () => (
    <S.CartDrawerContent>
      <h2>Pagamento - Valor a pagar {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</h2>
      <S.CheckoutForm>
        <Input
          label="Nome no cartão"
          value={paymentData.cardName}
          onChange={e => setPaymentData({ ...paymentData, cardName: e.target.value })}
        />
        <div className="row">
          <Input
            label="Número do cartão"
            value={paymentData.cardNumber}
            onChange={e => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          />
          <Input
            label="CVV"
            value={paymentData.cvv}
            onChange={e => setPaymentData({ ...paymentData, cvv: e.target.value })}
          />
        </div>
        <div className="row">
          <Input
            label="Mês de vencimento"
            value={paymentData.month}
            onChange={e => setPaymentData({ ...paymentData, month: e.target.value })}
          />
          <Input
            label="Ano de vencimento"
            value={paymentData.year}
            onChange={e => setPaymentData({ ...paymentData, year: e.target.value })}
          />
        </div>
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button
            variant="secondary"
            fullWidth
            type="button"
            onClick={() => {
              const currentYear = new Date().getFullYear()
              if (
                paymentData.cardNumber.length === 16 &&
                paymentData.cvv.length === 3 &&
                Number(paymentData.month) >= 1 && Number(paymentData.month) <= 12 &&
                Number(paymentData.year) >= currentYear
              ) {
                setStep('confirmation')
              } else {
                alert('Dados do cartão inválidos')
              }
            }}
          >
            Finalizar pagamento
          </Button>
          <Button variant="secondary" fullWidth type="button" onClick={() => setStep('address')}>
            Voltar para a edição de endereço
          </Button>
        </div>
      </S.CheckoutForm>
    </S.CartDrawerContent>
  )

  const renderConfirmation = () => (
    <S.OrderConfirmation>
      <h2>Pedido realizado - ORDER_{Math.floor(Math.random() * 1000000)}</h2>
      <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
      <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
      <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
      <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      <Button
        variant="secondary"
        fullWidth
        onClick={() => {
          clearCart()
          closeCart()
        }}
      >
        Concluir
      </Button>
    </S.OrderConfirmation>
  )

  return (
    <PageContainer>
      <S.Hero image={restaurant.heroImage}>
        <S.HeroContent>
          <span>{restaurant.category}</span>
          <h2>{restaurant.title}</h2>
        </S.HeroContent>
      </S.Hero>

      <S.ProductsSection>
        <S.ProductsGrid>
          {restaurantProducts.length > 0 ? (
            restaurantProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
              />
            ))
          ) : (
            <p>Este restaurante ainda não possui itens.</p>
          )}
        </S.ProductsGrid>
      </S.ProductsSection>

      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <S.ModalContent>
            <S.ModalImage src={selectedProduct.image} alt={selectedProduct.title} />
            <S.ModalInfo>
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.descriptionLong}</p>
              <span>Serve: {selectedProduct.serveInfo}</span>
              <Button
                variant="secondary"
                onClick={handleAddToCart}
                style={{ alignSelf: 'flex-start' }}
              >
                Adicionar ao carrinho - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedProduct.price)}
              </Button>
            </S.ModalInfo>
          </S.ModalContent>
        )}
      </Modal>

      <Drawer isOpen={isOpen} onClose={closeCart}>
        {step === 'cart' && renderCart()}
        {step === 'address' && renderAddress()}
        {step === 'payment' && renderPayment()}
        {step === 'confirmation' && renderConfirmation()}
      </Drawer>
    </PageContainer>
  )
}

export default Restaurant
