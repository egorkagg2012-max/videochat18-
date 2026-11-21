import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="shell anatomy-shell">
    <header class="top">
      <a class="logo" href="/" aria-label="VC18 — главная">VC<span>18</span></a>
      <a class="back-link" href="/">← На главную</a>
    </header>

    <section class="anatomy-hero">
      <p class="eyebrow">СПРАВОЧНИК · АНАТОМИЯ</p>
      <h1>Строение <span>половых органов</span></h1>
      <p class="lead">Нейтральный учебный материал о наружной анатомии. Схемы условные и не предназначены для самодиагностики.</p>
    </section>

    <section class="anatomy-card" aria-labelledby="female-title">
      <div class="anatomy-heading"><span class="anatomy-number">01</span><div><p class="anatomy-kicker">ЖЕНСКАЯ АНАТОМИЯ</p><h2 id="female-title">Вульва</h2></div></div>
      <p class="anatomy-intro">Вульва — общее название наружных половых органов. Влагалище — внутренний мышечный канал, который соединяет шейку матки с областью входа во влагалище.</p>
      <div class="diagram-wrap">
        <svg class="anatomy-svg" viewBox="0 0 360 300" role="img" aria-labelledby="vulva-svg-title vulva-svg-desc">
          <title id="vulva-svg-title">Условная схема наружных женских половых органов</title>
          <desc id="vulva-svg-desc">Медицинская схема с обозначением больших и малых половых губ, клитора, наружного отверстия уретры и входа во влагалище.</desc>
          <path d="M180 32 C125 45 92 104 105 165 C114 211 143 255 180 274 C217 255 246 211 255 165 C268 104 235 45 180 32Z" fill="#d99b91" fill-opacity=".22" stroke="#d99b91" stroke-width="3"/>
          <path d="M180 72 C145 83 132 122 145 163 C153 192 166 219 180 234 C194 219 207 192 215 163 C228 122 215 83 180 72Z" fill="#d99b91" fill-opacity=".28" stroke="#e7b3a8" stroke-width="2.5"/>
          <path d="M180 91 C159 105 158 137 166 161 C170 174 175 186 180 194 C185 186 190 174 194 161 C202 137 201 105 180 91Z" fill="#a95f69" fill-opacity=".35" stroke="#e7b3a8" stroke-width="2"/>
          <ellipse cx="180" cy="78" rx="10" ry="6" fill="#f0c1ad" stroke="#f0c1ad" stroke-width="1.5"/>
          <circle cx="180" cy="143" r="4.5" fill="#f4c7b7"/>
          <ellipse cx="180" cy="180" rx="9" ry="13" fill="#a95f69" fill-opacity=".7" stroke="#f0b4a7" stroke-width="1.5"/>
          <g class="diagram-label"><path d="M170 78 H65 L25 57"/><text x="22" y="48">Клитор</text><path d="M175 143 H76 L24 125"/><text x="22" y="116">Отверстие уретры</text><path d="M171 180 H82 L25 200"/><text x="22" y="218">Вход во влагалище</text><path d="M112 114 H285 L326 93"/><text x="230" y="82">Малые половые губы</text><path d="M105 169 H280 L326 185"/><text x="235" y="205">Большие половые губы</text></g>
        </svg>
      </div>
      <div class="anatomy-facts">
        <article><h3>Большие половые губы</h3><p>Наружные складки кожи, которые частично защищают более чувствительные структуры.</p></article>
        <article><h3>Малые половые губы</h3><p>Внутренние складки вокруг преддверия влагалища. Их форма, размер и цвет индивидуальны.</p></article>
        <article><h3>Клитор</h3><p>Чувствительный орган; видимая часть — лишь небольшая часть его внутренней структуры.</p></article>
        <article><h3>Уретра и вход во влагалище</h3><p>Отверстие уретры служит для выведения мочи. Вход во влагалище расположен ниже него.</p></article>
      </div>
    </section>

    <section class="anatomy-card" aria-labelledby="male-title">
      <div class="anatomy-heading"><span class="anatomy-number">02</span><div><p class="anatomy-kicker">МУЖСКАЯ АНАТОМИЯ</p><h2 id="male-title">Пенис и мошонка</h2></div></div>
      <p class="anatomy-intro">Пенис — наружный орган мочеполовой системы. Мошонка — кожный мешок, в котором расположены яички.</p>
      <div class="diagram-wrap">
        <svg class="anatomy-svg" viewBox="0 0 360 260" role="img" aria-labelledby="penis-svg-title penis-svg-desc">
          <title id="penis-svg-title">Условная схема наружных мужских половых органов</title>
          <desc id="penis-svg-desc">Медицинская боковая схема с обозначением головки, ствола, крайней плоти, наружного отверстия уретры, мошонки и яичка.</desc>
          <path d="M42 112 C74 91 105 92 142 100 L245 100 C266 100 282 111 282 128 C282 145 266 156 245 156 L142 156 C105 164 74 165 42 144Z" fill="#d99b91" fill-opacity=".3" stroke="#d99b91" stroke-width="3"/>
          <path d="M245 100 C268 100 294 107 303 128 C294 149 268 156 245 156" fill="#d99b91" fill-opacity=".42" stroke="#e7b3a8" stroke-width="2"/>
          <path d="M62 120 C126 112 204 113 276 124" fill="none" stroke="#f0c1ad" stroke-width="2.5"/>
          <path d="M42 112 Q25 128 42 144" fill="none" stroke="#e7b3a8" stroke-width="2"/>
          <path d="M125 158 C119 177 131 211 162 218 C193 224 219 201 218 174 L210 157" fill="#d99b91" fill-opacity=".28" stroke="#d99b91" stroke-width="3"/>
          <ellipse cx="170" cy="187" rx="18" ry="25" fill="#d99b91" fill-opacity=".45" stroke="#e7b3a8" stroke-width="2"/>
          <g class="diagram-label"><path d="M284 107 L315 72 H344"/><text x="245" y="60">Головка</text><path d="M180 102 V52 H218"/><text x="184" y="42">Ствол</text><path d="M42 128 H20 V91"/><text x="8" y="80">Крайняя плоть</text><path d="M304 128 H328 V154"/><text x="231" y="174">Отверстие уретры</text><path d="M205 192 H278 L326 218"/><text x="280" y="238">Мошонка</text><path d="M170 187 H84 L30 213"/><text x="12" y="233">Яичко</text></g>
        </svg>
      </div>
      <div class="anatomy-facts">
        <article><h3>Головка и ствол</h3><p>Головка — расширенная концевая часть пениса. Ствол содержит губчатые и пещеристые ткани.</p></article>
        <article><h3>Крайняя плоть</h3><p>Подвижная складка кожи, которая у некоторых людей частично или полностью покрывает головку.</p></article>
        <article><h3>Уретра</h3><p>Канал, проходящий внутри пениса; через него выводятся моча и семенная жидкость в разные моменты.</p></article>
        <article><h3>Мошонка и яички</h3><p>Мошонка защищает яички и помогает поддерживать температуру, важную для образования сперматозоидов.</p></article>
      </div>
    </section>

    <aside class="anatomy-note">
      <strong>Важно помнить</strong>
      Внешний вид половых органов заметно различается у разных людей. Размер, форма, оттенок кожи и асимметрия сами по себе обычно не говорят о проблеме. При боли, необычных выделениях, язвочках, уплотнениях или резких изменениях стоит обратиться к врачу.
    </aside>
    <footer>Учебная информация · Схемы условные, не в масштабе · Не заменяет консультацию врача</footer>
  </main>
`
