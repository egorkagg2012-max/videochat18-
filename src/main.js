import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <header class="top">
      <a class="logo" href="/" aria-label="VC18 — главная">VC<span>18</span></a>
      <span class="tag">ТОЛЬКО 18+</span>
    </header>

    <section class="hero">
      <p class="eyebrow">ВИДЕОЧАТ ДЛЯ ВЗРОСЛЫХ</p>
      <h1>Общайся<br><span>без границ.</span></h1>
      <p class="lead">Безопасность начинается до первого звонка. Доступ откроется только после надёжного подтверждения возраста.</p>
    </section>

    <section class="panel" aria-labelledby="verify-title">
      <div class="step">ШАГ 1 ИЗ 2</div>
      <div class="status-icon" aria-hidden="true">🔒</div>
      <h2 id="verify-title">Проверка 18+ пока недоступна</h2>
      <p class="muted">Сервис ещё не подключил независимого провайдера проверки возраста. Поэтому регистрация и подбор собеседников временно закрыты.</p>

      <div class="notice">
        <strong>Почему нельзя просто загрузить селфи?</strong>
        Фотография или автоматическая оценка возраста по лицу не доказывают совершеннолетие. Проверка должна выполняться специализированным сервисом с защитой от подмены личности.
      </div>

      <div class="requirements">
        <h3>Перед запуском мы должны обеспечить</h3>
        <ul>
          <li>Надёжную проверку возраста 18+ на стороне сервера</li>
          <li>Защиту от фото, видео и других попыток обмана проверки</li>
          <li>Понятное согласие перед любым видеозвонком</li>
          <li>Кнопки блокировки и жалобы, а также модерацию</li>
          <li>Защиту персональных данных и сроки их удаления</li>
        </ul>
      </div>

      <button class="primary" id="continue" type="button" disabled>Регистрация временно закрыта</button>
      <p class="status" id="status" role="status">Доступ не предоставляется, пока проверка возраста не подключена.</p>
    </section>

    <footer>18+ · Не отправляй документы или фотографии через сторонние ссылки. Сейчас сайт не собирает и не загружает биометрические данные.</footer>
  </main>
`

const continueButton = document.querySelector('#continue')
const status = document.querySelector('#status')

// Access intentionally remains closed until a real server-side age-assurance
// integration and the required safety controls are implemented.
continueButton.addEventListener('click', () => {
  status.textContent = 'Проверка возраста ещё не подключена. Регистрация закрыта.'
})
