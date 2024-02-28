import styled from 'styled-components'

interface ICardStyle {
  opened: number
}

export const Card = styled.div<ICardStyle>`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 15px;
  padding-top: ${({ opened }) => (opened ? '90px' : '15px')};
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);

    b,
    p,
    svg {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`

export const CardInfosMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  b {
    transition: 0.3s;

    font-size: 14px;
    font-weight: 800;
  }

  p {
    transition: 0.3s;

    font-size: 11px;
    font-weight: 300;
  }

  color: rgba(0, 0, 0, 0.75);
`

export const CardInfosDetails = styled.div`
  display: flex;

  svg {
    transition: 0.3s;

    font-size: 32px;

    color: rgba(0, 0, 0, 0.75);
  }
`
