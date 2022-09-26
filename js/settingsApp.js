let defaultLanguages = 'english'

import { getWeather } from "./weather.js"
import { showTimeAndDate } from './dateTime.js'
import { showGreeting } from "./greeting.js"
import { showQoute } from "./newQuotes.js"
import { settingApp } from "./translation.js"
import { greetingNameTranslation } from "./translation.js"
import { setBg } from "./setBg.js"
import { settingAppTranslate } from "./settingsAppTranslate.js"

import { getDefaultLanguages } from "./getDefault.js"
import { setPlaceholder } from "./greeting.js"

const selectLanguages = document.querySelector('.right-general-select-language')

function changeSettings() {
  setLocalStorage()
  getLocalStorage()
  defaultLanguages = getDefaultLanguages()
  getWeather()
  showTimeAndDate()
  showGreeting()
  showQoute()
  settingAppTranslate()
  setBg()

  const inputName = document.querySelector('.name')
  inputName.placeholder = greetingNameTranslation[defaultLanguages]
}

selectLanguages.addEventListener('change', () => {
  changeSettings()
})

const settingsLanguage = document.querySelector('.right-general-select-language')
//checkbox
const inputTimeShow = document.querySelector('.input-time')
const inputDateShow = document.querySelector('.input-date')
const inputGreetingShow = document.querySelector('.input-greeting')
const inputQuotoShow = document.querySelector('.input-quoto')
const inputAudioplayerShow = document.querySelector('.input-audioplayer')
const inputWeatherShow = document.querySelector('.input-weather')
const inputTodoShow = document.querySelector('.input-todo')
//combobox
const selectSourcePicture = document.querySelector('.right-photo-select-source')
//property
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const greetingContainer = document.querySelector('.greeting-container')
const footerContent = document.querySelector('.footer-content')
const player = document.querySelector('.player')
const weather = document.querySelector('.weather')
const footerTodo = document.querySelector('.footer-todo')

function visibleAny(checkbox, part) {
  if (checkbox.checked) {
    part.classList.add('setting-app-visible-part')
  } else {
    part.classList.remove('setting-app-visible-part')
  }
}

function visiblePartApp() {
  visibleAny(inputTimeShow, time)
  visibleAny(inputDateShow, date)
  visibleAny(inputGreetingShow, greetingContainer)
  visibleAny(inputQuotoShow, footerContent)
  visibleAny(inputAudioplayerShow, player)
  visibleAny(inputWeatherShow, weather)
  visibleAny(inputTodoShow, footerTodo)
}



export function setLocalStorage() {
  localStorage.setItem('defaultLanguage', settingsLanguage.value)
  localStorage.setItem('inputTimeShow', inputTimeShow.checked)
  localStorage.setItem('inputDateShow', inputDateShow.checked)
  localStorage.setItem('inputGreetingShow', inputGreetingShow.checked)
  localStorage.setItem('inputQuotoShow', inputQuotoShow.checked)
  localStorage.setItem('player', inputAudioplayerShow.checked)
  localStorage.setItem('weather', inputWeatherShow.checked)
  localStorage.setItem('footerTodo', inputTodoShow.checked)
  localStorage.setItem('pictureSource', selectSourcePicture.value)
}

function loadSettingFromStorage(checkbox, property) {
  if (localStorage.getItem(property)) {
    checkbox.checked = localStorage.getItem(property) === 'false' ? false : true
  }
}

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    settingsLanguage.value = localStorage.getItem('defaultLanguage')
    // defaultLanguages = localStorage.getItem('defaultLanguage')
  }

  if (localStorage.getItem('pictureSource')) {
    selectSourcePicture.value = localStorage.getItem('pictureSource')
  }

  // if (localStorage.getItem('customTags')) {
  //   customTags = null
  //   customTags = stringToObj(localStorage.getItem('customTags'))
  // }

  loadSettingFromStorage(inputTimeShow, 'inputTimeShow')
  loadSettingFromStorage(inputDateShow, 'inputDateShow')
  loadSettingFromStorage(inputGreetingShow, 'inputGreetingShow')
  loadSettingFromStorage(inputQuotoShow, 'inputQuotoShow')
  loadSettingFromStorage(inputAudioplayerShow, 'player')
  loadSettingFromStorage(inputWeatherShow, 'weather')
  loadSettingFromStorage(inputTodoShow, 'footerTodo')

  settingAppTranslate()
  visiblePartApp()
}

window.addEventListener('beforeunload', setLocalStorage)// save name user in local storage browser
window.addEventListener('load', getLocalStorage)// load user name from local storage browser

const allInputShow = document.querySelectorAll('.right-general-checkbox-show')

allInputShow.forEach(input => {
  input.addEventListener('click', () => {
    visiblePartApp()
  })
})

const rightPhotoDivCustomTag = document.querySelector('.right-photo-div-custom-tag')

selectSourcePicture.addEventListener('change', () => {
  changeSettings()
})
