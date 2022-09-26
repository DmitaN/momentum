//translate inside elements in settings app
import { getDefaultLanguages } from "./getDefault.js"
import { settingApp } from "./translation.js"

let defaultLanguages = 'english'

const generalBtn = document.querySelector('.form-general')
const LabelLanguages = document.querySelector('.right-general-label-language')
const todoBtn = document.querySelector('.form-todo')
const photoBtn = document.querySelector('.form-photo')
const quotpsBtn = document.querySelector('.form-quotos')
const labelShow = document.querySelector('.right-general-label-show')
const timeCheckbox = document.querySelector('.input-show-item-label-time')
const dateCheckbox = document.querySelector('.input-show-item-label-date')
const greetingCheckbox = document.querySelector('.input-show-item-label-greeting')
const quotoCheckbox = document.querySelector('.input-show-item-label-quoto')
const audioplayerCheckbox = document.querySelector('.input-show-item-label-audioplayer')
const weatherCheckbox = document.querySelector('.input-show-item-label-weather')
const todoCheckbox = document.querySelector('.input-show-item-label-todo')
const labelNewList = document.querySelector('.right-todo-label')
const labelSource = document.querySelector('.right-photo-label-source')
const labelTag = document.querySelector('.right-photo-label-input-tag')
const labelFontSize = document.querySelector('.right-quotos-label--font-size')
const labelColor = document.querySelector('.right-quotos-label--color')
const inputTodoList = document.querySelector('.right-todo-input')
const inputTagList = document.querySelector('.right-photo-input-name-tag')
const inputTodo = document.querySelector('.todo-new-item-title')
// const todoList = document.querySelectorAll('.todo-title-option')


export function settingAppTranslate() {
  defaultLanguages = getDefaultLanguages()
  generalBtn.innerHTML = settingApp[defaultLanguages][0]
  todoBtn.innerHTML = settingApp[defaultLanguages][1]
  photoBtn.innerHTML = settingApp[defaultLanguages][2]
  quotpsBtn.innerHTML = settingApp[defaultLanguages][3]
  LabelLanguages.textContent = `${settingApp[defaultLanguages][4]}: `
  labelShow.textContent = `${settingApp[defaultLanguages][5]}: `
  timeCheckbox.innerHTML = settingApp[defaultLanguages][6]
  dateCheckbox.innerHTML = settingApp[defaultLanguages][7]
  greetingCheckbox.innerHTML = settingApp[defaultLanguages][8]
  quotoCheckbox.innerHTML = settingApp[defaultLanguages][9]
  audioplayerCheckbox.innerHTML = settingApp[defaultLanguages][10]
  weatherCheckbox.innerHTML = settingApp[defaultLanguages][11]
  todoCheckbox.innerHTML = settingApp[defaultLanguages][12]
  labelNewList.innerHTML = `${settingApp[defaultLanguages][13]}: `
  labelSource.innerHTML = `${settingApp[defaultLanguages][14]}: `
  labelTag.innerHTML = `${settingApp[defaultLanguages][15]}: `
  labelFontSize.innerHTML = `${settingApp[defaultLanguages][16]}: `
  labelColor.innerHTML = `${settingApp[defaultLanguages][17]}: `
  inputTodoList.placeholder = settingApp[defaultLanguages][18]
  inputTagList.placeholder = settingApp[defaultLanguages][19]
  inputTodo.placeholder = settingApp[defaultLanguages][20]

  // todoList.forEach(elem => {
  //   if (elem.value === 'today') {
  //     elem.innerHTML = settingApp[defaultLanguages][21]
  //   }
  // })
}
