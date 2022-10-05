const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

// const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// const mounts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = '黑色'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = '浅 色'
  }
})

function setTime() {
  const time = new Date()
  const month = time.getMonth() + 1
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds } ${ampm}`
  dateEl.innerHTML = `${month}月${date}日 星期${day}`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)