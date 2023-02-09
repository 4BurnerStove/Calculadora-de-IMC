import { modal } from './modal.js'
import { AlertError } from './error.js'
import { IMC, notANumber } from './utils.js'

//Variables
const submit = document.querySelector('form')
const inputWeight = document.querySelector('#Weight')
const inputHeight = document.querySelector('#Height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

submit.onsubmit = event => {
  event.preventDefault()

  let IMCClassif = ''

  const Weight = inputWeight.value
  const Height = inputHeight.value

  const showAlertError = notANumber(Weight) || notANumber(Height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(Weight, Height)

  if (result < 18.5) {
    IMCClassif = 'abaixo do peso'
  } else if (result >= 18.5 && result < 25) {
    IMCClassif = 'no peso normal'
  } else if (result >= 25 && result < 30) {
    IMCClassif = 'com sobrepeso'
  } else if (result >= 30 && result < 35) {
    IMCClassif = 'com obesidade Grau I'
  } else if (result >= 35 && result < 40) {
    IMCClassif = 'com obesidade Grau II'
  } else {
    IMCClassif = 'com obesidade Grau III'
  }

  modal.wrapper.innerHTML = `O seu IMC é de ${result}, Você está ${IMCClassif}`

  modal.open()
}
