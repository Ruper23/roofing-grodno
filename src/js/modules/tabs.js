export function tabs() {
  const tabWrap = document.querySelector('.storys__tabs-nav')  // блок для навигации табов
  const tab = document.querySelectorAll('.tab') // табы
  const tabBlock = document.querySelectorAll('.storys__tabs-info') // блоки с инфой табов


  tabWrap.addEventListener('click', e => {
    let curBtn = e.target.dataset.btn // дата сеты для табов (number)
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove('active')
      tabBlock[i].classList.remove('active')
    }
    e.target.classList.add('active')
    tabBlock[curBtn - 1].classList.add('active')
  })
}