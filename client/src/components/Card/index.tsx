import React from 'react'
import * as S from './styles'

import { formatCardNumber } from '@/utils/functions/formatCardNumber'

import { ICard } from '@/data/cards'

interface ICardComponent {
  cardIsOpen: boolean
  cardData: ICard
  onClick?: () => void
}

const Card: React.FC<ICardComponent> = ({ cardIsOpen, cardData, onClick }) => {
  return (
    <S.Card opened={cardIsOpen ? 1 : 0} onClick={onClick && onClick}>
      <S.CardInfos>
        <S.CardInfosMain>
          <b>{formatCardNumber(cardData.cardNumber)}</b>
          <p>{cardData.expirationDate}</p>
        </S.CardInfosMain>
        <S.CardInfosDetails>{cardData.cardLogo}</S.CardInfosDetails>
      </S.CardInfos>
    </S.Card>
  )
}

export default Card
