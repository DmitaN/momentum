const todoBtn = document.querySelector('.todo-button')
const todoForm = document.querySelector('.todo-form')


todoBtn.addEventListener('click', () => {
  todoForm.classList.toggle('setting-app-visible-part')
})

