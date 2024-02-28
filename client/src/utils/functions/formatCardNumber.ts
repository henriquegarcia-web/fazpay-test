const formatCardNumber = (cardNumber: string) => {
  const visibleDigits = cardNumber.slice(-4)
  const formattedNumber = '**** ' + visibleDigits

  return formattedNumber
}

export { formatCardNumber }
