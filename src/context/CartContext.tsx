import React, { createContext, useReducer, ReactNode } from 'react'
import { Product } from '../data/products'

export type CartItemType = Product & {
  quantity: number
}

type CheckoutStep = 'cart' | 'address' | 'payment' | 'confirmation'

interface CartState {
  items: CartItemType[]
  isOpen: boolean
  step: CheckoutStep
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'SET_STEP'; payload: CheckoutStep }

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }
    }
    case 'REMOVE_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (!existingItem) return state

      if (existingItem.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        }
      }

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    }
    case 'CLEAR':
      return {
        ...state,
        items: [],
        step: 'cart'
      }
    case 'OPEN_CART':
      return { ...state, isOpen: true, step: 'cart' }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'SET_STEP':
      return { ...state, step: action.payload }
    default:
      return state
  }
}

interface CartContextData extends CartState {
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  setStep: (step: CheckoutStep) => void
  totalPrice: number
  totalItems: number
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product })
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const clearCart = () => dispatch({ type: 'CLEAR' })
  const openCart = () => dispatch({ type: 'OPEN_CART' })
  const closeCart = () => dispatch({ type: 'CLOSE_CART' })
  const setStep = (step: CheckoutStep) => dispatch({ type: 'SET_STEP', payload: step })

  const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        clearCart,
        openCart,
        closeCart,
        setStep,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
