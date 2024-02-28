import React, { useState } from 'react'
import * as S from './styles'

import { Card } from '@/components'

import { ICard, creditCardData } from '@/data/cards'

interface IClientDashboard {}

const ClientDashboard: React.FC = ({}: IClientDashboard) => {
  const [openedCardId, setOpenedCardId] = useState(creditCardData[0].cardId)

  return (
    <S.ClientDashboard>
      <S.ClientDashboardHeader>
        <S.DashboardHeaderLogo>
          Cards<b>Holder</b>
        </S.DashboardHeaderLogo>
        <S.DashboardHeaderMenu></S.DashboardHeaderMenu>
      </S.ClientDashboardHeader>
      <S.ClientDashboardMain>
        <S.ClientDashboardCardsList>
          <S.CardsListHeader>
            <h3>Seus Cartões</h3>
            <div>
              <button>+ Novo Cartão</button>
            </div>
          </S.CardsListHeader>
          <S.CardsListWrapper>
            {creditCardData.map((cardData: ICard) => (
              <Card
                cardIsOpen={openedCardId === cardData.cardId}
                cardData={cardData}
                onClick={() => setOpenedCardId(cardData.cardId)}
              />
            ))}
          </S.CardsListWrapper>
        </S.ClientDashboardCardsList>
        <S.ClientDashboardCardsInfos></S.ClientDashboardCardsInfos>
      </S.ClientDashboardMain>
    </S.ClientDashboard>
  )
}

export default ClientDashboard
