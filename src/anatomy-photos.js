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
      <p class="lead">Фотографические примеры наружной анатомии взрослых людей. Изображения взяты из Wikimedia Commons; откройте источник, чтобы увидеть описание и условия использования.</p>
    </section>

    <section class="photo-card" aria-labelledby="female-title">
      <div class="anatomy-heading"><span class="anatomy-number">01</span><div><p class="anatomy-kicker">ЖЕНСКАЯ АНАТОМИЯ</p><h2 id="female-title">Вульва</h2></div></div>
      <p class="anatomy-intro">Вульва — общее название наружных женских половых органов. На фотографии показана естественная вариативность внешнего строения.</p>
      <a class="medical-photo-link" href="https://commons.wikimedia.org/wiki/File:Image_of_a_Woman%27s_Vulva.jpg" target="_blank" rel="noopener noreferrer">
        <img class="medical-photo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Image_of_a_Woman%27s_Vulva.jpg" referrerpolicy="no-referrer" alt="Фотографический пример наружной женской анатомии взрослой женщины" loading="lazy">
        <span>Открыть оригинал и сведения об источнике ↗</span>
      </a>
      <div class="anatomy-facts">
        <article><h3>Большие и малые половые губы</h3><p>Кожные складки, форма, размер, цвет и симметрия которых заметно различаются у разных людей.</p></article>
        <article><h3>Клитор</h3><p>Чувствительный орган; видимая часть — лишь небольшая часть его внутренней структуры.</p></article>
        <article><h3>Уретра и вход во влагалище</h3><p>Отверстие уретры служит для выведения мочи; вход во влагалище расположен ниже него.</p></article>
      </div>
      <p class="image-credit">Источник: Lezlie Rewatch, Wikimedia Commons · CC0 1.0 · <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">условия CC0</a>. В описании файла автор указывает, что модель — женщина в возрасте около 25 лет.</p>
    </section>

    <section class="photo-card" aria-labelledby="male-title">
      <div class="anatomy-heading"><span class="anatomy-number">02</span><div><p class="anatomy-kicker">МУЖСКАЯ АНАТОМИЯ</p><h2 id="male-title">Пенис и мошонка</h2></div></div>
      <p class="anatomy-intro">Пенис — наружный орган мочеполовой системы. Мошонка — кожный мешок, в котором расположены яички.</p>
      <a class="medical-photo-link" href="https://commons.wikimedia.org/wiki/File:Male_genitalia_anatomically_labeled_01.jpg" target="_blank" rel="noopener noreferrer">
        <img class="medical-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Male_genitalia_anatomically_labeled_01.jpg" alt="Фотографический пример наружной мужской анатомии взрослого человека с анатомическими подписями" loading="lazy">
        <span>Открыть оригинал и сведения об источнике ↗</span>
      </a>
      <div class="anatomy-facts">
        <article><h3>Головка и ствол</h3><p>Головка — концевая часть пениса; ствол содержит губчатые и пещеристые ткани.</p></article>
        <article><h3>Крайняя плоть и уретра</h3><p>Крайняя плоть — подвижная складка кожи. Через уретру выводятся моча и семенная жидкость в разные моменты.</p></article>
        <article><h3>Мошонка и яички</h3><p>Мошонка защищает яички и помогает поддерживать температуру, важную для образования сперматозоидов.</p></article>
      </div>
      <p class="image-credit">Источник: DominicTammer, Wikimedia Commons · CC0 1.0 · <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">условия CC0</a>. В описании файла указано, что изображён мужчина около 30 лет.</p>
    </section>

    <aside class="anatomy-note">
      <strong>Важно помнить</strong>
      Внешний вид половых органов заметно различается у разных людей. Размер, форма, оттенок кожи и асимметрия сами по себе обычно не говорят о проблеме. При боли, необычных выделениях, язвочках, уплотнениях или резких изменениях стоит обратиться к врачу.
    </aside>
    <footer>Учебная информация · Фотографии приведены для изучения анатомии · Не заменяет консультацию врача</footer>
  </main>
`
