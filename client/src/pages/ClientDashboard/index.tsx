import React, { useMemo, useState } from 'react'

import * as S from './styles'
import { IoExitOutline, IoEnterOutline } from 'react-icons/io5'
import { HiMiniWallet } from 'react-icons/hi2'

import { Button, Card } from '@/components'

import { formatCurrency } from '@/utils/functions/formatCurrency'

import { ICard, cardsData } from '@/data/cards'

interface IClientDashboard {}

const ClientDashboard: React.FC = ({}: IClientDashboard) => {
  const [openedCardId, setOpenedCardId] = useState(cardsData[0].cardId)

  return (
    <S.ClientDashboard>
      <S.ClientDashboardHeader>
        <S.DashboardHeaderLogo>
          Cards <HiMiniWallet /> <b>Holder</b>
        </S.DashboardHeaderLogo>
        <S.DashboardHeaderMenu></S.DashboardHeaderMenu>
      </S.ClientDashboardHeader>
      <S.ClientDashboardMain>
        <S.ClientDashboardCardsList>
          <S.CardsListHeader>
            <h3>Seus Cartões</h3>
            <div>
              <Button label="+ Novo Cartão" />
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
          <p>Saldo atual:</p>
          <b>{formatCurrency(filteredCardById?.cardBalance || 0)}</b>
        </S.CardInfoBalance>
        <S.CardInfoMenu>
          <Button
            type="inverted"
            label="Adicionar Entrada"
            icon={<IoEnterOutline />}
          />
          <Button
            type="inverted"
            label="Adicionar Saída"
            icon={<IoExitOutline />}
          />
        </S.CardInfoMenu>
      </S.CardInfoContainerHeader>
      <S.CardInfoContainerWrapper></S.CardInfoContainerWrapper>
    </S.CardInfoContainer>
  )
}
