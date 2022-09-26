// import playList from './playList.js';

let playNum = 0
let isPlay = false

const audio = new Audio()

const createPlayList = () => {
  const playListContainer = document.querySelector('.play-list')

  playList.forEach(el => {
    const item = document.createElement('li')
    item.classList.add('play-item')
    item.textContent = el.title
    playListContainer.append(item)
  })
}

const changeActiveItem = (activeItem) => {
  const items = document.querySelectorAll('.play-item')
  items.forEach(el => {
    el.classList.remove('item-active')
  })

  items[activeItem].classList.add('item-active')
  audio.src = playList[activeItem].src
}

const incPlayNum = () => {
  if (playNum !== 3) {
    playNum++
  } else {
    playNum = 0
  }
}

const dicPlayNum = () => {
  if (playNum !== 0) {
    playNum--
  } else {
    playNum = 3
  }
}

// const getTimeTrack = (activeItem) => {
//   const timeTrack = playList[activeItem].duration
//   const minutes = timeTrack[0] + timeTrack[1]
//   const seconds = timeTrack[3] + timeTrack[4]
//   const miliseconds = (seconds * 1000) + minutes * 60 * 1000
//   return miliseconds
// }

createPlayList() // create playlist

export const audioPleer = (num, isNextItem) => {
  changeActiveItem(num)

  if (isNextItem) {
    isPlay = false
  }

  if (isPlay) {
    audio.pause()
    isPlay = false
  } else {
    audio.play()
    console.log(audio.currentSrc)
    isPlay = true
  }
}

//audioplayer
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.play-prev')
const nextBtn = document.querySelector('.play-next')

playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('pause')
  audioPleer(playNum)
})

const playNextTrack = () => {
  incPlayNum()
  audioPleer(playNum, true)
}
const playPrevTrack = () => {
  dicPlayNum()
  audioPleer(playNum, true)
}

prevBtn.addEventListener('click', () => {
  playPrevTrack()
})

nextBtn.addEventListener('click', () => {
  playNextTrack()
})

audio.addEventListener('ended', () => {
  playNextTrack()
})
