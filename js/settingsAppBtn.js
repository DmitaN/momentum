//inside buttons form setting app
const insideBtns = document.querySelectorAll('.btn')
const rightBloks = document.querySelectorAll('.right-block')

insideBtns.forEach(btn => {
  btn.addEventListener('click', (element) => {
    const path = element.target.dataset.path

    rightBloks.forEach(block => {
      if (block.dataset.target !== path) {
        block.classList.remove('right-block--active')
        block.classList.add('right-block--hidden')
      } else {
        block.classList.add('right-block--active')
        block.classList.remove('right-block--hidden')
      }
    })

    insideBtns.forEach(btn => {
      btn.classList.remove('btn--active')
    })

    btn.classList.add('btn--active')
  })
})
