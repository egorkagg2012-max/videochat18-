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

    <section class="device-panel" aria-labelledby="device-title">
      <p class="eyebrow">ПОДГОТОВКА УСТРОЙСТВА</p>
      <h2 id="device-title">Проверь камеру и микрофон</h2>
      <p class="device-description">Локальная проверка: изображение и звук остаются в этом браузере и никуда не отправляются. Это ещё не подключение к собеседнику.</p>
      <div class="device-preview-wrap">
        <video id="local-preview" autoplay playsinline muted aria-label="Локальное изображение с камеры"></video>
        <div class="preview-placeholder" id="preview-placeholder"><span aria-hidden="true">◉</span><strong>Камера выключена</strong><small>Нажми «Включить проверку», чтобы проверить изображение</small></div>
      </div>
      <div class="device-controls">
        <button class="device-start" id="device-start" type="button">Включить проверку</button>
        <button class="device-stop" id="device-stop" type="button" disabled>Выключить</button>
      </div>
      <div class="device-mic"><div class="mic-heading"><span>Уровень микрофона</span><span id="mic-state">Не проверяется</span></div><div class="mic-track"><div id="mic-level"></div></div></div>
      <p class="device-status" id="device-status" role="status" aria-live="polite">Камера и микрофон не запущены.</p>
      <p class="device-status" id="livekit-status" role="status" aria-live="polite">Проверяем настройки видеосвязи…</p>
    </section>

    <section class="learn-link-panel"><p class="eyebrow">АНАТОМИЯ</p><h2>Узнай больше о строении тела</h2><p>Фотографические примеры наружной анатомии с медицинскими пояснениями.</p><a href="/anatomy.html">Открыть анатомический справочник ↗</a></section>

    <section class="safety-panel" aria-labelledby="safety-title">
      <p class="eyebrow">НАШИ ПРАВИЛА</p>
      <h2 id="safety-title">Согласие и безопасность — обязательно</h2>
      <div class="safety-grid">
        <article><span>01</span><h3>Только по взаимному согласию</h3><p>Видеозвонок должен начинаться только после явного согласия обоих участников. Любой может сразу выйти.</p></article>
        <article><span>02</span><h3>Без записи без разрешения</h3><p>Запись и распространение чужого видео без явного разрешения запрещены.</p></article>
        <article><span>03</span><h3>Контроль над общением</h3><p>Блокировка и жалобы должны быть доступны во время общения, а обращения — попадать к модераторам.</p></article>
        <article><span>04</span><h3>Приватность</h3><p>Собирать только необходимые данные, объяснять сроки хранения и давать понятный способ удаления.</p></article>
      </div>
      <p class="safety-footnote">Это правила будущего сервиса. Функции звонков, блокировки и жалоб пока не подключены.</p>
      <a class="safety-link" href="https://github.com/egorkagg2012-max/videochat18-/blob/main/SAFETY.md" target="_blank" rel="noreferrer">Полный список требований безопасности ↗</a>
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

async function refreshAgeVerificationStatus() {
  try {
    const response = await fetch('/api/age-verification/status', { cache: 'no-store' })
    const result = await response.json()
    if (response.ok && result.available === true && result.accessGranted === true) {
      status.textContent = 'Сервис проверки отвечает, но для входа всё равно нужна персональная проверка возраста.'
      return
    }
    status.textContent = 'Серверная проверка возраста не настроена. Регистрация и видеочат закрыты.'
  } catch {
    status.textContent = 'Не удалось связаться с сервером проверки. Доступ закрыт.'
  }
}

refreshAgeVerificationStatus()

// Local-only device diagnostics. Media tracks are never sent to a peer or server.
const deviceStart = document.querySelector('#device-start')
const deviceStop = document.querySelector('#device-stop')
const localPreview = document.querySelector('#local-preview')
const previewPlaceholder = document.querySelector('#preview-placeholder')
const deviceStatus = document.querySelector('#device-status')
const micState = document.querySelector('#mic-state')
const micLevel = document.querySelector('#mic-level')
let localStream = null
let audioContext = null
let meterFrame = 0

function stopDeviceCheck() {
  if (meterFrame) cancelAnimationFrame(meterFrame)
  meterFrame = 0
  if (localStream) localStream.getTracks().forEach(track => track.stop())
  localStream = null
  localPreview.srcObject = null
  if (audioContext && audioContext.state !== 'closed') audioContext.close().catch(() => {})
  audioContext = null
  micLevel.style.width = '0%'
  micState.textContent = 'Не проверяется'
  previewPlaceholder.hidden = false
  deviceStart.disabled = false
  deviceStop.disabled = true
  deviceStatus.textContent = 'Проверка остановлена. Камера и микрофон выключены.'
}

deviceStart.addEventListener('click', async () => {
  deviceStart.disabled = true
  deviceStatus.textContent = 'Запрашиваем разрешение на камеру и микрофон…'
  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error('Браузер не поддерживает доступ к камере. Открой сайт по HTTPS в современном браузере.')
    }
    localStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: { echoCancellation: true, noiseSuppression: true }
    })
    localPreview.srcObject = localStream
    previewPlaceholder.hidden = true
    deviceStop.disabled = false
    deviceStatus.textContent = 'Камера работает. Говори, чтобы проверить уровень микрофона.'
    micState.textContent = 'Микрофон включён'
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioContext = new AudioContextClass()
      if (audioContext.state === 'suspended') await audioContext.resume()
      const source = audioContext.createMediaStreamSource(localStream)
      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 512
      source.connect(analyser)
      const samples = new Uint8Array(analyser.fftSize)
      const updateMeter = () => {
        analyser.getByteTimeDomainData(samples)
        let sum = 0
        for (const sample of samples) {
          const value = (sample - 128) / 128
          sum += value * value
        }
        const rms = Math.sqrt(sum / samples.length)
        micLevel.style.width = Math.min(100, Math.round(rms * 300)) + '%'
        meterFrame = requestAnimationFrame(updateMeter)
      }
      updateMeter()
    } else {
      micState.textContent = 'Измеритель не поддерживается'
    }
  } catch (error) {
    stopDeviceCheck()
    const messages = {
      NotAllowedError: 'Доступ запрещён. Разреши камеру и микрофон в настройках браузера.',
      NotFoundError: 'Камера или микрофон не найдены на этом устройстве.',
      NotReadableError: 'Устройство уже используется другим приложением.',
      OverconstrainedError: 'Камера не поддерживает запрошенный режим.'
    }
    deviceStatus.textContent = messages[error.name] || error.message || 'Не удалось запустить проверку устройства.'
  }
})

deviceStop.addEventListener('click', stopDeviceCheck)
window.addEventListener('pagehide', stopDeviceCheck)

// This endpoint reports only whether server-side LiveKit settings exist.
// It does not expose credentials or grant access to a room.
async function refreshLiveKitStatus() {
  const livekitStatus = document.querySelector('#livekit-status')
  try {
    const response = await fetch('/api/livekit/status', { cache: 'no-store' })
    const result = await response.json()
    livekitStatus.textContent = response.ok && result.configured === true
      ? 'Серверные настройки видеосвязи добавлены. Звонки пока закрыты до подключения проверки 18+ и системы безопасности.'
      : 'Настройки видеосвязи неполные. Проверь LIVEKIT_URL, LIVEKIT_API_KEY и LIVEKIT_API_SECRET в Vercel.'
  } catch {
    livekitStatus.textContent = 'Не удалось проверить настройки видеосвязи. Звонки остаются закрыты.'
  }
}

refreshLiveKitStatus()
