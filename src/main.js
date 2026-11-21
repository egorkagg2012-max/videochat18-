import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <header class="top"><div class="logo">VC<span>18</span></div><span class="tag">ТОЛЬКО 18+</span></header>
    <section class="hero">
      <p class="eyebrow">ВИДЕОЧАТ ДЛЯ ВЗРОСЛЫХ</p>
      <h1>Общайся<br><span>без границ.</span></h1>
      <p class="lead">Сначала подтвердим совершеннолетие. Данные проверки не будут отображаться другим пользователям.</p>
    </section>
    <section class="panel" aria-labelledby="verify-title">
      <div class="step">ШАГ 1 ИЗ 2</div>
      <h2 id="verify-title">Подтверждение возраста</h2>
      <p class="muted">Загрузи своё фото лица. Оно будет показано только в интерфейсе предварительного просмотра.</p>
      <label class="upload" for="face-photo">
        <span class="upload-icon">＋</span>
        <strong>Выбрать фото лица</strong>
        <small>JPG, PNG или WEBP · до 8 МБ</small>
        <input id="face-photo" type="file" accept="image/jpeg,image/png,image/webp" />
      </label>
      <div id="preview-wrap" class="preview-wrap" hidden>
        <img id="preview" alt="Предпросмотр выбранного фото" />
        <button id="remove-photo" class="remove" type="button">Убрать фото</button>
      </div>
      <p class="notice"><strong>Важно:</strong> загрузка фотографии сама по себе не подтверждает возраст. Перед открытием видеочата сервер должен проверить возраст через специализированного провайдера. Пока такая интеграция не подключена, доступ к подбору собеседников закрыт.</p>
      <button class="primary" id="continue" disabled>Продолжить</button>
      <p class="status" id="status" role="status">Выбери фотографию, чтобы увидеть предпросмотр.</p>
    </section>
    <footer>18+ · Не отправляй чужие фотографии. Фото не загружается на сервер в этой демонстрационной версии.</footer>
  </main>
`

const input = document.querySelector('#face-photo')
const previewWrap = document.querySelector('#preview-wrap')
const preview = document.querySelector('#preview')
const status = document.querySelector('#status')
const continueButton = document.querySelector('#continue')
let previewUrl = null

input.addEventListener('change', () => {
  const file = input.files?.[0]
  continueButton.disabled = true
  if (previewUrl) URL.revokeObjectURL(previewUrl)
  previewUrl = null
  if (!file) {
    previewWrap.hidden = true
    status.textContent = 'Выбери фотографию, чтобы увидеть предпросмотр.'
    return
  }
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 8 * 1024 * 1024) {
    input.value = ''
    previewWrap.hidden = true
    status.textContent = 'Нужен JPG, PNG или WEBP размером до 8 МБ.'
    return
  }
  previewUrl = URL.createObjectURL(file)
  preview.src = previewUrl
  previewWrap.hidden = false
  status.textContent = 'Фото выбрано. Проверка возраста ещё не выполнена.'
})

document.querySelector('#remove-photo').addEventListener('click', () => {
  if (previewUrl) URL.revokeObjectURL(previewUrl)
  previewUrl = null
  input.value = ''
  preview.removeAttribute('src')
  previewWrap.hidden = true
  continueButton.disabled = true
  status.textContent = 'Фото удалено из предпросмотра.'
})

window.addEventListener('beforeunload', () => {
  if (previewUrl) URL.revokeObjectURL(previewUrl)
})
