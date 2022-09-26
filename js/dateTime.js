// import { dayOfWeek, local, defaultLanguages, monthOfYear } from "./translation.js";
import { dayOfWeek, local,  monthOfYear } from "./translation.js";

let defaultLanguages = 'english'

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    defaultLanguages = localStorage.getItem('defaultLanguage')
  }
}

export const getDateTime = () => {
  const dateTime = new Date()
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return {
    time: dateTime.toLocaleTimeString(),
    date: dateTime.toLocaleDateString(local[defaultLanguages], options),
    dateTime: dateTime
  }
}

export const showTimeAndDate = () => {
  getLocalStorage()
  const timeTag = document.querySelector('.time')
  const dateTag = document.querySelector('.date')

  const curentTime = getDateTime().time
  let currentDate = getDateTime().date

  if (defaultLanguages === 'belarus') {
    const belMonth = monthOfYear[defaultLanguages][getDateTime().dateTime.getMonth()]
    const belDay = getDateTime().dateTime.getDate()
    const day = dayOfWeek[defaultLanguages][getDateTime().dateTime.getDay()]
    currentDate = `${day}, ${belDay} ${belMonth}`
  }

  timeTag.innerHTML = curentTime
  dateTag.innerHTML = currentDate

  setTimeout(showTimeAndDate, 1000)
}
