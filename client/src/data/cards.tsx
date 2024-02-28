import { FaCcVisa, FaCcMastercard } from 'react-icons/fa6'

export interface ICard {
  cardId: string
  cardHolderName: string
  cardNumber: string
  expirationDate: string
  cvv: string
  cardType: string
  cardBackground: string
  cardLogo: React.ReactNode
  cardIssuer: string
  cardBalance: number
}

const cardsData: ICard[] = [
  {
    cardId: 'card_01',
    cardHolderName: 'John Doe',
    cardNumber: '1234567890123456',
    expirationDate: '12/26',
    cvv: '123',
    cardType: 'Visa',
    cardBackground: 'blue',
    cardLogo: <FaCcVisa />,
    cardIssuer: 'Banco do Brasil',
    cardBalance: 615
  },
  {
    cardId: 'card_02',
    cardHolderName: 'Bob Lee',
    cardNumber: '1234567890123456',
    expirationDate: '07/25',
    cvv: '456',
    cardType: 'Mastercard',
    cardBackground: 'orangered',
    cardLogo: <FaCcMastercard />,
    cardIssuer: 'Nubank',
    cardBalance: 476
  }
]

export { cardsData }
