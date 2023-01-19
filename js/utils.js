export function notANumber(value) {
  return isNaN(value) || value == ''
}

export function IMC(Weight, Height) {
  return (Weight / (Height / 100) ** 2).toFixed(2)
}
