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

  const Weight = inputWeight.value
  const Height = inputHeight.value

  const showAlertError = notANumber(Weight) || notANumber(Height)

  if (showAlertError) {
    AlertError.open()
    return
  } 

  AlertError.close()

  const result = IMC(Weight, Height)
  modal.wrapper.innerHTML = `O seu IMC é de ${result}`

  modal.open()
}

