// import { defaultLanguages } from "./translation.js"

let defaultLanguages = 'english'

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    defaultLanguages = localStorage.getItem('defaultLanguage')
  }
}

export async function showEnQuote() {
  const url = 'https://favqs.com/api/qotd'
  const res = await fetch(url)
  const data = await res.json()

  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')
  author.innerHTML = data.quote.author
  quote.innerHTML = `"${data.quote.body}"`
}

export async function showBeQuote() {
  const url = '../momentum/assets/quotes/belarusian_quotes.json'
  const res = await fetch(url)
  const data = await res.json()
  const randomNumber = Math.floor(Math.random() * data.length)
  const quoteData = data[randomNumber]

  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')

  author.innerHTML = quoteData.author
  quote.innerHTML = `"${quoteData.text}"`
}

export async function showRuQuote() {
  const url = '../momentum/assets/quotes/quotes.json'
  const res = await fetch(url)
  const data = await res.json()
  const randomNumber = Math.floor(Math.random() * data.length)
  const quoteData = data[randomNumber]

  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')

  author.innerHTML = quoteData.author
  quote.innerHTML = `"${quoteData.text}"`
}

export const showQoute = () => {
  getLocalStorage()

  if (defaultLanguages === 'belarus') {
    showBeQuote()
  } else if (defaultLanguages === 'russian') {
    showRuQuote()
  } else {
    showEnQuote()
  }
}

const updateQuote = document.querySelector('.change-quote')
updateQuote.addEventListener('click', showQoute)

showQoute() // show quotes

const inputFontSize = document.querySelector('.right-quotos-input-fs')
const inputColor = document.querySelector('.right-quotos-input-color')

inputFontSize.addEventListener('change', () => {
  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')

  if (inputFontSize.value > 30) {
    inputFontSize.value = 30
  }
  if (inputFontSize.value < 10) {
    inputFontSize.value = 10
  }
  quote.style.fontSize = `${inputFontSize.value}px`

  author.style.fontSize = `${inputFontSize.value}px`

  localStorage.setItem('fs', inputFontSize.value)
})

inputColor.addEventListener('input', () => {
  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')

  quote.style.color = inputColor.value
  author.style.color = inputColor.value
  localStorage.setItem('color', inputColor.value)
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('color', inputColor.value)
  localStorage.setItem('fs', inputFontSize.value)
})

window.addEventListener('load', () => {
  const author = document.querySelector('.author')
  const quote = document.querySelector('.quote')

  if (localStorage.getItem('color')) {
    inputColor.value = localStorage.getItem('color')
    quote.style.color = localStorage.getItem('color')
    author.style.color = localStorage.getItem('color')
  }

  if (localStorage.getItem('fs')) {
    inputFontSize.value = localStorage.getItem('fs')
    quote.style.fontSize = `${localStorage.getItem('fs')}px`
    author.style.fontSize = `${localStorage.getItem('fs')}px`
  }
})
