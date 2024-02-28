import styled from 'styled-components'

interface IButtonStyles {
  type: string
}

const getBackgroundColor = ({ type }: IButtonStyles) => {
  switch (type) {
    case 'default':
      return 'rgba(0, 0, 0, 0.8)'
    case 'inverted':
      return 'rgba(245, 245, 245, 1)'
    default:
      return ''
  }
}

const getColor = ({ type }: IButtonStyles) => {
  switch (type) {
    case 'default':
      return 'rgba(245, 245, 245, 1)'
    case 'inverted':
      return 'rgba(0, 0, 0, 0.8)'
    default:
      return ''
  }
}

export const Button = styled.button<IButtonStyles>`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  font-size: 12px;
  font-weight: 500;

  color: ${({ type }) => getColor({ type })};
  background-color: ${({ type }) => getBackgroundColor({ type })};

  svg {
    font-size: 18px;

    color: ${({ type }) => getColor({ type })};
  }
`
