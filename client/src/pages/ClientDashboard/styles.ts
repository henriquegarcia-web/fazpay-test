import styled from 'styled-components'
import { clientHeaderHeight } from '@/utils/styles/globals'

const cardListWidth = '300px'
const cardListHeaderHeight = '30px'
const cardInfosHeaderHeight = '65px'

export const ClientDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.05);
`

export const ClientDashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${clientHeaderHeight};
  padding: 0 20px;
`

export const DashboardHeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  width: calc(${cardListWidth} - 40px);
  padding: 20px;
  border-radius: 0 0 16px 16px;

  font-size: 24px;
  font-weight: 400;

  b {
    font-weight: 800;
  }

  color: rgba(255, 255, 255, 1);

  svg {
    font-size: 26px;
  }

  background-color: rgba(0, 0, 0, 0.8);
`

export const DashboardHeaderMenu = styled.div`
  display: flex;
`

export const ClientDashboardMain = styled.div`
  display: flex;
  height: calc(100% - ${clientHeaderHeight});
`

export const ClientDashboardCardsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: ${cardListWidth};
  height: 100%;
  padding: 20px;
`

export const CardsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${cardListHeaderHeight};

  h3 {
    font-size: 16px;
    font-weight: 800;

    color: rgba(0, 0, 0, 0.8);
  }
`

export const CardsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  height: calc(100% - ${cardListHeaderHeight});
`

export const ClientDashboardCardsInfos = styled.div`
  display: flex;
  width: calc(100% - ${cardListWidth});
  height: 100%;
  border-radius: 16px 0 0 0;

  background-color: white;
`

// =============================================== CARD INFO CONTAINER

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const CardInfoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${cardInfosHeaderHeight};
  padding: 0 15px;
  border-radius: 14px;

  background-color: rgba(0, 0, 0, 0.9);
`

export const CardInfoBalance = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  padding-left: 4px;

  p {
    font-size: 11px;
    font-weight: 400;

    color: rgba(255, 255, 255, 0.7);
  }

  b {
    font-size: 20px;
    font-weight: 600;

    color: rgba(255, 255, 255, 1);
  }
`

export const CardInfoMenu = styled.div`
  display: flex;
  column-gap: 6px;
`

export const CardInfoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  height: calc(100% - ${cardInfosHeaderHeight} - 15px);
  padding: 10px 15px 15px 15px;
  border-radius: 14px;

  border: 1px solid rgba(0, 0, 0, 0.1);

  span {
    display: flex;
    align-items: center;
    column-gap: 6px;

    &:nth-of-type(1) {
      width: 25%;
    }

    &:nth-of-type(2) {
      width: 25%;
    }

    &:nth-of-type(3) {
      width: 25%;
    }

    &:nth-of-type(4) {
      width: 25%;
    }

    svg {
      font-size: 18px;
    }

    p {
      display: flex;
      align-items: center;
      column-gap: 6px;
    }
  }
`

export const CardHistoryListHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding: 0 15px;

  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.6);
`

interface ICardHistoryList {
  hasscroll: number
}

export const CardHistoryListWrapper = styled.div<ICardHistoryList>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 30px);
  overflow: auto;
  padding-right: ${({ hasscroll }) => (hasscroll ? '10px' : '0px')};

  &::-webkit-scrollbar {
    width: 4px;
    z-index: 1000;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
  }
`

export const CardHistoryList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
  height: fit-content;
`

interface ICardHistoryItem {
  type: 'entry' | 'outflow'
}

const getColor = ({ type }: ICardHistoryItem) => {
  switch (type) {
    case 'entry':
      return 'rgba(3, 252, 57, 1)'
    case 'outflow':
      return 'rgba(252, 69, 3, 0.8)'
    default:
      return ''
  }
}

export const CardHistoryItem = styled.div<ICardHistoryItem>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.4);

    /* span {
      &:nth-of-type(1) {
        transition: 0.2s;

        color: ${({ type }) => getColor({ type })};
      }
    } */
  }
`
