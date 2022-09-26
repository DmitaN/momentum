import { showTimeAndDate } from "./dateTime.js"
import { setBg } from "./setBg.js"

let customTags = {
   tag: []
}

function loadCustomTags() {
  if (localStorage.getItem('customTags')) {
    customTags = stringToObj(localStorage.getItem('customTags'))
  }
  return {}
}

loadCustomTags()

const inputCustomTags = document.querySelector('.right-photo-input-name-tag')
const customTagsContainer = document.querySelector('.custom-tags')

export function objToString(obj) {
  let string = ''
  for (const key in obj) {
    string += `{${key}: ${obj[key]}}`
  }
  return string
}

export function stringToObj(string) {
  let obj = {}
  let newString = string.substring(6, string.length - 1).split(',')
  obj.tag = newString
  return obj
}

inputCustomTags.addEventListener('keypress', (event) => {
  if (event.code==='Enter') {
    if (inputCustomTags.value!=='') {
      const tag = inputCustomTags.value
      customTags.tag.push(tag)
      localStorage.setItem('customTags', objToString(customTags))
      showTags()
      setBg()
      inputCustomTags.value = ''
    }
  }
})

export function showTags() {
  const customTagItems = document.querySelectorAll('.custom-tag-item')
  customTagItems.forEach(el => {
    el.remove()
  })

  customTags.tag.forEach(element => {
    const tag = document.createElement('p')
    tag.innerHTML = element
    tag.classList.add('custom-tag-item')
    tag.addEventListener('click', () => {
      tag.remove()
      let index = customTags.tag.indexOf(element)
      customTags.tag.splice(index, 1)
      if (customTags.tag.length === 0) {
        localStorage.removeItem('customTags')
      } else {
        localStorage.setItem('customTags', objToString(customTags))
      }
      setBg()
    })
    customTagsContainer.append(tag)
  })

}

showTags()
