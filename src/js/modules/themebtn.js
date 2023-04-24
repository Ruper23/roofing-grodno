export function themeChange() {
  const themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('active')
  })
}