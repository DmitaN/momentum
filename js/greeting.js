import { getDateTime } from "./dateTime.js"
import { setBg } from "./setBg.js"
import { greetingTranslation, greetingNameTranslation } from "./translation.js"

let defaultLanguages = 'english'

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    defaultLanguages = localStorage.getItem('defaultLanguage')
  }
}



const returnPartOfday = (namePartDays) => {
  const hour = getDateTime().dateTime.getHours()
  const partDay = Math.floor(hour / 6)

  if (partDay === 0) {
    return `${namePartDays[0]}`
  }

  if (partDay === 1) {
    return `${namePartDays[1]}`
  }

  if (partDay === 2) {
    return `${namePartDays[2]}`
  }

  if (partDay === 3) {
    return `${namePartDays[3]}`
  }
}

export const getTimeOfDay = (languages) => {
  const namePartDays = greetingTranslation[languages]
  return returnPartOfday(namePartDays)
}

export const partOfDay = () => {
  const namePartDays = greetingTranslation['partOfDay']
  return returnPartOfday(namePartDays)
}

let lastPartDay = null

export const showGreeting = () => {
  getLocalStorage()
  if (lastPartDay !== getTimeOfDay(defaultLanguages)) {
    setBg()
  }

  lastPartDay = getTimeOfDay(defaultLanguages)

  const greetingTag = document.querySelector('.greeting')

  greetingTag.innerHTML = `${getTimeOfDay(defaultLanguages)}`

  setTimeout(showGreeting, 1000)
}

showGreeting() // show part day

const inputName = document.querySelector('.name')

export const setPlaceholder = () => {
  inputName.placeholder = greetingNameTranslation[defaultLanguages]
}

inputName.addEventListener('keyup', setPlaceholder)
inputName.addEventListener('blur', setPlaceholder)
