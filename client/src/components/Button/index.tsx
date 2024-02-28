import React from 'react'
import * as S from './styles'

interface IButton {
  type?: 'default' | 'inverted'
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<IButton> = ({
  type = 'default',
  label,
  icon,
  onClick
}) => {
  return (
    <S.Button type={type} onClick={onClick && onClick}>
      {label}
      {icon && icon}
    </S.Button>
  )
}

export default Button
