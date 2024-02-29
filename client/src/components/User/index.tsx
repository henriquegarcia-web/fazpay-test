import React, { useState } from 'react'

import * as S from './styles'

import { formatUsername } from '@/utils/functions/formatUsername'

const clientName = 'Henrique Garcia'

interface IUser {}

const User: React.FC = ({}: IUser) => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)

  return (
    <S.User>
      <S.UserName>
        Olá, <b>{clientName}</b>
      </S.UserName>
      <S.UserIcon>{formatUsername(clientName)}</S.UserIcon>
      <S.UserMenuModal></S.UserMenuModal>
    </S.User>
  )
}

export default User
