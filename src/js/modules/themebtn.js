export function themeChange() {
  const themeBtn = document.querySelector('.theme-btn')
  const wrapper = document.querySelector('.wrapper')
  const pageBtns = document.querySelectorAll('.button')
  const logos = document.querySelector('.svg-logo')
  const links = document.querySelectorAll('.links')
  const navigation = document.querySelector('.navigation')
  const burgerSpan = document.querySelectorAll('.burger__icon span')
  const servicesTitle = document.querySelectorAll('.service__title')
  const readMoreBtns = document.querySelectorAll('.read-more')
  const blockNumber = document.querySelectorAll('.block__number')
  const blockInfo = document.querySelectorAll('.block__info')
  const inputs = document.querySelectorAll('.inputs')
  themeBtn.addEventListener('click', () => {
    wrapper.classList.toggle('lights')
    themeBtn.classList.toggle('active')
    navigation.classList.toggle('lights')
    logos.classList.toggle('lights')
    links.forEach(link => {
      link.classList.toggle('lights')
    })
    pageBtns.forEach(btn => {
      btn.classList.toggle('lights')
    })
    burgerSpan.forEach(span => {
      span.classList.toggle('lights')
    })
    servicesTitle.forEach(title => {
      title.classList.toggle('lights')
    })
    readMoreBtns.forEach(btn => {
      btn.classList.toggle('lights')
    })
    blockNumber.forEach(num => {
      num.classList.toggle('lights')
    })
    blockInfo.forEach(num => {
      num.classList.toggle('lights')
    })
    inputs.forEach(input => {
      input.classList.toggle('lights')
    })

  })
}