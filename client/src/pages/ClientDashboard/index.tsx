import React, { useMemo, useRef, useState } from 'react'

import * as S from './styles'
import {
  IoExitOutline,
  IoEnterOutline,
  IoTrashOutline,
  IoArrowForward
} from 'react-icons/io5'
import { HiMiniWallet } from 'react-icons/hi2'

import { Button, Card, User } from '@/components'

import useScrollbar from '@/hooks/useScrollbar'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { timestampToDate } from '@/utils/functions/convertTimestamp'

import { ICard, cardsData } from '@/data/cards'

interface IClientDashboard {}

const ClientDashboard: React.FC<IClientDashboard> = ({}) => {
  const [openedCardId, setOpenedCardId] = useState(cardsData[0].cardId)

  return (
    <S.ClientDashboard>
      <S.ClientDashboardHeader>
        <S.DashboardHeaderLogo>
          Cards <HiMiniWallet /> <b>Holder</b>
        </S.DashboardHeaderLogo>
        <S.DashboardHeaderMenu>
          <User />
        </S.DashboardHeaderMenu>
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
  const cardHistoryContainerRef = useRef(null)

  const filteredCardById: ICard | null = useMemo(() => {
    return cardsData.find((card) => card.cardId === openedCardId) || null
  }, [cardsData, openedCardId])

  const [containerHasScrollbar] = useScrollbar(cardHistoryContainerRef)

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
          <Button type="inverted" label="Excluir" icon={<IoTrashOutline />} />
        </S.CardInfoMenu>
      </S.CardInfoContainerHeader>
      <S.CardInfoContainerWrapper>
        <S.CardHistoryListHeader>
          <span>Tipo</span>
          <span>Data</span>
          <span>Transação</span>
          <span></span>
        </S.CardHistoryListHeader>
        <S.CardHistoryListWrapper
          ref={cardHistoryContainerRef}
          hasscroll={containerHasScrollbar ? 1 : 0}
        >
          <S.CardHistoryList>
            <CardHistoryItem
              transactionType="entry"
              transactionDate={1709214791}
              transactionFrom={540}
              transactionTo={320}
            />
            <CardHistoryItem
              transactionType="outflow"
              transactionDate={1709214791}
              transactionFrom={540}
              transactionTo={320}
            />
          </S.CardHistoryList>
        </S.CardHistoryListWrapper>
      </S.CardInfoContainerWrapper>
    </S.CardInfoContainer>
  )
}

// =============================================== CARD HISTORY ITEM

interface ICardHistoryItem {
  transactionType: 'entry' | 'outflow'
  transactionDate: number
  transactionFrom: number
  transactionTo: number
}

const CardHistoryItem: React.FC<ICardHistoryItem> = ({
  transactionType,
  transactionDate,
  transactionFrom,
  transactionTo
}) => {
  return (
    <S.CardHistoryItem type={transactionType}>
      <span>
        {transactionType === 'entry' ? (
          <>
            <IoEnterOutline /> Entrada
          </>
        ) : (
          <>
            <IoExitOutline /> Saída
          </>
        )}
      </span>
      <span>{timestampToDate(transactionDate)}</span>
      <span>
        <p>
          {formatCurrency(transactionFrom)}
          <IoArrowForward />
          {formatCurrency(transactionTo)}
        </p>
      </span>
      <span></span>
    </S.CardHistoryItem>
  )
}
