export function readMoreFunc() {
  const serviceList = document.querySelector('.services__list')
  const readMoreBtn = document.querySelectorAll('.read-more')
  const serviceDescription = document.querySelectorAll('.service__description')
  serviceList.addEventListener('click', e => {
    let currBtn = e.target.dataset.btn
    if (e.target === readMoreBtn[currBtn]) {
      readMoreBtn[currBtn].classList.toggle('active')
      serviceDescription[currBtn].classList.toggle('active')

    } else {
      e.preventDefault()
    }
  })


} 