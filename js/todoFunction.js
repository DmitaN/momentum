const inputNameTodo = document.querySelector('.todo-new-item-title')
const todoItems = document.querySelector('.todo-items')
const todoTitle = document.querySelector('.todo-title')
const todoListName = document.querySelector('.right-todo-list')
const todoInputName = document.querySelector('.right-todo-input')

let listCollection = ['today', 'done']
const defaultList = ['today', 'done']
let todoItemArray = []

inputNameTodo.addEventListener('keypress', (event) => {
  let count = Math.random()
  if (event.code === 'Enter') {
    todoItemArray.push({
      id: count,
      title: inputNameTodo.value,
      done: false,
      list: todoTitle.value
    })
    saveTodoItems()
    loadTodoItems()
  }
})

function showItems(inItem) {
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  const button = document.createElement('button')
  const buttonEdit = document.createElement('button')
  const inputEdit = document.createElement('input')

  if (inItem.done) {
    checkbox.checked = true
    label.classList.add('todo-item-done')
  }
  checkbox.type = 'checkbox'
  checkbox.id = inItem.id

  label.classList.add('checkbox-item')
  label.innerHTML = inItem.title
  label.htmlFor = inItem.id

  button.classList.add('todo-item-delete')
  buttonEdit.classList.add('todo-item-edit')
  buttonEdit.innerHTML = '...'
  item.classList.add('todo-item')

  inputEdit.classList.add('todo-input-edit')
  inputEdit.classList.add('todo-input-edit--hidden')

  item.append(checkbox)
  item.append(label)
  item.append(inputEdit)
  item.append(buttonEdit)
  item.append(button)
  todoItems.append(item)
  inputNameTodo.value = ''

  button.addEventListener('click', () => {
    todoItemArray.forEach(itm => {
      if (itm.id === inItem.id) {
        const index = todoItemArray.indexOf(itm)
        todoItemArray.splice(index, 1)
      }
    })
    saveTodoItems()
    loadTodoItems()
  })

  buttonEdit.addEventListener('click', () => {
    inputEdit.value = label.innerHTML
    label.classList.add('checkbox-item--hidden')
    inputEdit.classList.remove('todo-input-edit--hidden')
    inputEdit.focus()
  })

  inputEdit.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
      if (inputEdit.value != '') {
        label.innerHTML = inputEdit.value
      }
      inputEdit.value = ''
      inputEdit.classList.add('todo-input-edit--hidden')
      label.classList.remove('checkbox-item--hidden')
      todoItemArray.forEach(element => {
        if (element.id === inItem.id) {
          element.title = label.innerHTML
          saveTodoItems()
          loadTodoItems()
        }
      })
    }
  })

  label.addEventListener('click', () => {
    checkedItem(inItem)
    saveTodoItems()
    loadTodoItems()
  })

  checkbox.addEventListener('click', () => {
    checkedItem(inItem)
    saveTodoItems()
    loadTodoItems()
  })
}

function checkedItem(inItem) {
  todoItemArray.forEach(itm => {
    if (itm.id === inItem.id) {
      if (itm.done) {
        itm.done = false
      } else {
        itm.done = true
      }
    }
  })
}

function saveTodoItems() {
  let string = ''

  todoItemArray.forEach(item => {
    const json = JSON.stringify(item)
    string += `${json} `
  })

  string = string.trimEnd('')
  string = string.replaceAll('} {', '}*{')
  localStorage.setItem('todoItems', string)
}

function loadTodoItems() {
  todoItemArray = []

  const preloadTodoItems = document.querySelectorAll('.todo-item').forEach(item => {
    item.remove()
  })

  if (localStorage.getItem('todoItems')) {
    const loadItems = localStorage.getItem('todoItems').split('*')
    loadItems.forEach(item => {
      const json = JSON.parse(item)
      todoItemArray.push(json)
      if (todoTitle.value === 'done') {
        if (json.done) {
          showItems(json)
        }
      } else if (json.list === todoTitle.value) {
        showItems(json)
      }
    })
  }
}

todoTitle.addEventListener('change', () => {
  loadTodoItems()
  saveTodoItems()
  if (todoTitle.value === 'done') {
    inputNameTodo.style.visibility = 'hidden'
  } else {
    inputNameTodo.style.visibility = 'inherit'
  }
})

function loadCollectionList() {
  const preloadTodoList = document.querySelectorAll('.todo-title-option').forEach(item => {
    item.remove()
  })

  const preloadTodoListSettings = document.querySelectorAll('.right-todo-item').forEach(item => {
    item.remove()
  })

  if (localStorage.getItem('listCollection')) {
    listCollection = JSON.parse(localStorage.getItem('listCollection'))
    loadItem()
  } else {
    loadItem()
  }
}

function loadItem() {
  listCollection.forEach(elem => {

    createOptionList(elem)

    const li = document.createElement('li')
    li.classList.add('right-todo-item')

    if (elem === 'done' || elem === 'today') {
      li.classList.add('right-todo-item--hard')
    }

    li.innerHTML = elem
    todoListName.append(li)

    li.addEventListener('click', () => {
      deleteTodoList(li)
    })
  })
}

window.addEventListener('load', loadCollectionList)
window.addEventListener('beforeunload', () => {
  localStorage.setItem('listCollection', JSON.stringify(listCollection))
})

window.addEventListener('beforeunload', saveTodoItems)
window.addEventListener('load', loadTodoItems)

todoInputName.addEventListener('keypress', event => {
  if (event.code === 'Enter') {
    listCollection.push(todoInputName.value)
    localStorage.setItem('listCollection', JSON.stringify(listCollection))

    createOptionList(todoInputName.value)

    const li = document.createElement('li')
    li.classList.add('right-todo-item')

    li.innerHTML = todoInputName.value
    todoListName.append(li)

    li.addEventListener('click', () => {
      deleteTodoList(li)
    })

    todoInputName.value = ''
  }
})

const deleteTodoList = (li) => {
  if (defaultList.indexOf(li.textContent) === -1) {
    let bool = true
    todoItemArray.forEach(el => {
      if (el.list === li.textContent) {
        bool = false
      }
    })
    if (bool) {
      const index = listCollection.indexOf(li.textContent)
      listCollection.splice(index, 1)
      localStorage.setItem('listCollection', JSON.stringify(listCollection))
      loadCollectionList()
      li.remove()
    } else {
      alert('this list include todo')
    }
  }
}

const createOptionList = (value) => {
  const option = document.createElement('option')
  option.value = value
  option.innerHTML = value
  option.classList.add('todo-title-option')
  todoTitle.append(option)
}
