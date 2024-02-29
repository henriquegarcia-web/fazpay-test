import styled from 'styled-components'

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
`

export const UserName = styled.p`
  font-size: 14px;
`

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;

  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(245, 245, 245, 1);
`

export const UserMenuModal = styled.div`
  display: none;
`
