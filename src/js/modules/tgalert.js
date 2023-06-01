export function tgalert() {
  const tgToken = '6019123175:AAE-obC5pgJBLiLIxDzvqC9F2j_gbK2VEFk'
  const tgChatId = '-1001836439135'
  const tgUriApi = `https://api.telegram.org/bot${tgToken}/sendMessage`

  const contactsForm = document.querySelector('.contacts__form')
  const sendSuccess = document.querySelector('.send-success')
  const showAlert = () =>{
    sendSuccess.style.opacity = '1'
    setTimeout(()=>{
      sendSuccess.style.opacity = '0'
    },3000)
  }

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
      showAlert()
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(()=>{
      console.log('Отправлено');
    })

  })
}