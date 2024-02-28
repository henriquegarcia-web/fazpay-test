import styled from 'styled-components'
import { clientHeaderHeight } from '@/utils/styles/globals'

const cardListWidth = '300px'
const cardListHeaderHeight = '30px'
const cardInfosHeaderHeight = '75px'

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
  padding: 0 20px;
  border-radius: 14px;

  background-color: rgba(0, 0, 0, 0.9);
`

export const CardInfoBalance = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;

  p {
    font-size: 12px;
    font-weight: 400;

    color: rgba(255, 255, 255, 0.7);
  }

  b {
    font-size: 20px;
    font-weight: 500;

    color: rgba(255, 255, 255, 1);
  }
`

export const CardInfoMenu = styled.div`
  display: flex;
  column-gap: 6px;
`

export const CardInfoContainerWrapper = styled.div`
  display: flex;

  height: calc(100% - ${cardInfosHeaderHeight} - 15px);

  border: 1px solid red;
`

// export const CardInfoContainer = styled.div`
//   display: flex;
// `

// export const CardInfoContainer = styled.div`
//   display: flex;
// `
