import { getDefaultLanguages } from "./getDefault.js"
import { greetingNameTranslation } from "./translation.js"

const inputName = document.querySelector('.name')


export const setLocalStorage = () => {
  localStorage.setItem('name', inputName.value)
}

export const getLocalStorage = () => {
  if (localStorage.getItem('name')) {
    inputName.value = localStorage.getItem('name')
  }

    inputName.placeholder = greetingNameTranslation[getDefaultLanguages()]
}

