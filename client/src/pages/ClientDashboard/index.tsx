import React, { useMemo, useState } from 'react'
import * as S from './styles'

import { Card } from '@/components'

import { formatCurrency } from '@/utils/functions/formatCurrency'

import { ICard, cardsData } from '@/data/cards'

interface IClientDashboard {}

const ClientDashboard: React.FC = ({}: IClientDashboard) => {
  const [openedCardId, setOpenedCardId] = useState(cardsData[0].cardId)

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
            {cardsData.map((cardData: ICard) => (
              <Card
                cardIsOpen={openedCardId === cardData.cardId}
                cardData={cardData}
                onClick={() => setOpenedCardId(cardData.cardId)}
              />
            ))}
          </S.CardsListWrapper>
        </S.ClientDashboardCardsList>
        <S.ClientDashboardCardsInfos>
          <CardInfoContainer
            openedCardId={openedCardId}
            cardsData={cardsData}
          />
        </S.ClientDashboardCardsInfos>
      </S.ClientDashboardMain>
    </S.ClientDashboard>
  )
}

export default ClientDashboard

// =============================================== CARD INFO CONTAINER

interface ICardInfoContainer {
  openedCardId: string
  cardsData: ICard[]
}

const CardInfoContainer: React.FC<ICardInfoContainer> = ({
  openedCardId,
  cardsData
}) => {
  const filteredCardById: ICard | null = useMemo(() => {
    return cardsData.find((card) => card.cardId === openedCardId) || null
  }, [cardsData, openedCardId])

  return (
    <S.CardInfoContainer>
      <S.CardInfoContainerHeader>
        <S.CardInfoBalance>
          {formatCurrency(filteredCardById?.cardBalance || 0)}
        </S.CardInfoBalance>
        <S.CardInfoMenu>
          <button>Adicionar Entrada</button>
          <button>Adicionar Saída</button>
        </S.CardInfoMenu>
      </S.CardInfoContainerHeader>
      <S.CardInfoContainerWrapper></S.CardInfoContainerWrapper>
    </S.CardInfoContainer>
  )
}
