export function tgalert() {
  const tgToken = ''
  const tgChatId = ''
  const tgUriApi = `https://api.telegram.org/bots${tgToken}/sendMessage`

  const contactsForm = document.querySelector('.contacts__form')

  contactsForm.addEventListener('submit', function(e){
    e.preventDefault()
    let tgMessage = `<b>Заявка с сайта</b> \n`
    tgMessage += `<b>Отправитель:</b> ${this.name.value}</b>\n`
    tgMessage += `<b>Номер телефона:</b> ${this.number.value}</b>\n`
    tgMessage += `<b>Сообщение:</b> ${this.message.value}</b>\n`

    axios.post(tgUriApi,{
      chat_id: tgChatId,
      parse_mode: 'html',
      text: tgMessage,
    })
    .then((res) =>{
      this.name.value = ''
      this.number.value = ''
      this.message.value = ''
    })

  })
}