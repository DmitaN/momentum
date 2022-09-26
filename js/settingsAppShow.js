//show form setting app
import { showTags } from "./settingsAppTags.js"

const settingsBtn = document.querySelector('.settings-app-button')
const settingsForm = document.querySelector('.settings-app-form')

settingsBtn.addEventListener('click', () => {
  settingsForm.classList.toggle('settings-app-form--active')
  showTags()
})
