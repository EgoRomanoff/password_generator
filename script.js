const lengthInput = document.querySelector('#length')
const symbolsYesCheck = document.querySelector('#symbolsYes')
const symbolsNoCheck = document.querySelector('#symbolsNo')
const copyButton = document.querySelector('#btn--copy')
const passwordField = document.querySelector('#password')
const generateButton = document.querySelector('#btn--generate')
const info = document.querySelector('.info')

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789'
const charsWithSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'

let password = ''

generateButton.addEventListener('click', generatePassword)
copyButton.addEventListener('click', copyText)

function generatePassword() {
  password = ''
  let length = lengthInput.value

  if (symbolsNoCheck.checked) {
    let n = chars.length
    for(let i = 0; i < length; ++i) {
      password += chars.charAt(Math.floor(Math.random() * n))
    }
  } else {
    let n = charsWithSymbols.length
    for(let i = 0; i < length; ++i) {
      password += charsWithSymbols.charAt(Math.floor(Math.random() * n))
    }
  }

  passwordField.value = password
}

function copyText() {
  navigator.clipboard.writeText(password)
  info.style.opacity = '1'
  setTimeout(() => info.style.opacity = '0', 1500);
}