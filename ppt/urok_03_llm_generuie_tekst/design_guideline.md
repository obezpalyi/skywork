<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація розроблена для учнів 11 класу з метою демістифікації роботи великих мовних моделей (LLM). Вона пояснює складні концепції, як-от токенізація, ймовірнісна генерація та вплив контексту, через інтерактивні вправи та візуальні метафори, перетворюючи "магію" ШІ на зрозумілий алгоритмічний процес.

2. Target Audience
Учні 11 класу (16-17 років), які мають базові знання з інформатики та логіки. Аудиторія очікує сучасного, динамічного візуального ряду, який не перевантажений текстом, але містить чіткі технічні пояснення та приклади, що стосуються їхнього цифрового досвіду.

3. Tone and Language
Тон є навчально-дослідницьким, стимулюючим до критичного мислення та активної участі. Мова технічно точна (використання термінів "токен", "контекстне вікно", "пріоритет правдоподібності"), але адаптована для легкого сприйняття через аналогії та гру.

4. Theme Archetype
```yaml
theme_archetype:
  name: "research-lab-notes"
  rationale: "Цей архетип створює атмосферу наукової лабораторії або сучасного дослідницького центру ШІ. Він використовує чітку сітку, технічні акценти та чисту типографіку, що допомагає структурувати складні концепції генерації тексту як логічну послідовність експериментів."
  visual_keywords: ["лабораторний", "структурований", "алгоритмічний", "інтелектуальний"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Inter:wght@400;500&display=swap");

:root {
  --ppt-bg: #FDFDFB;
  --ppt-bg-soft: #F4F5F0;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #EEF0E7;
  --ppt-border: #D1D5C8;
  --ppt-text-1: #1A1C1E;
  --ppt-text-2: #4A4D42;
  --ppt-text-3: #8A8D7C;
  --ppt-accent: #00BFA5;
  --ppt-accent-2: #FF5252;
  --ppt-chart-1: #00BFA5;
  --ppt-chart-2: #4DB6AC;
  --ppt-chart-3: #80CBC4;
  --ppt-chart-4: #B2DFDB;
  --ppt-good: #2E7D32;
  --ppt-warn: #F57C00;
  --ppt-bad: #C62828;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 6px;
  --ppt-radius-lg: 10px;
  --ppt-shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.05);
  --ppt-shadow-strong: 0 8px 24px rgba(0, 0, 0, 0.08);
  --ppt-font-display: "Outfit", sans-serif;
  --ppt-font-body: "Inter", sans-serif;
}
```

6. Typography Roles
```yaml
typography_roles:
  density_mode: "balanced"
  display_font_family: "var(--ppt-font-display)"
  body_font_family: "var(--ppt-font-body)"
  cover_page_title:
    font_size: "68px"
    font_weight: 800
    line_height: 1.1
  cover_page_subtitle:
    font_size: "28px"
    font_weight: 500
    line_height: 1.3
  cover_metadata:
    font_size: "16px"
    font_weight: 500
    line_height: 1.4
  non_cover_page_title:
    font_size: "38px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "32px"
    font_weight: 600
    line_height: 1.25
  accent_text:
    font_size: "24px"
    font_weight: 600
    line_height: 1.35
  body_text:
    font_size: "20px"
    font_weight: 400
    line_height: 1.5
  annotation:
    font_size: "15px"
    font_weight: 400
    line_height: 1.4
  caption:
    font_size: "13px"
    font_weight: 400
    line_height: 1.25
```

7. Cross-Slide Consistent Regions
```html
<header style="margin-top: 48px; margin-left: 64px; margin-right: 64px; margin-bottom: 40px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="background: var(--ppt-accent); color: white; padding: 4px 12px; font-family: var(--ppt-font-display); font-weight: 800; font-size: 14px; border-radius: var(--ppt-radius-sm); letter-spacing: 1px;">LAB // INFO-11</span>
    <div style="height: 1px; flex-grow: 1; background: var(--ppt-border);"></div>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 38px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2;">
    [Заголовок сторінки]
  </h1>
</header>
```

```yaml
density_mode_guidance:
  mode: "balanced"
  design_intent: "Use a moderate hierarchy and spacing system for mixed-content decks that need both readability and efficient information organization."
  content_policy: "Keep each slide focused on one main message with a small number of supporting points."
  spacing_policy: "Use comfortable spacing that leaves room for structured content without feeling crowded."
```
</GLOBAL_DESIGN>

<COVER_DESIGN>
8. Cover Page Layout Recommendation
Archetype: `editorial-report-cover`
- **Spatial Grammar**: Асиметрична композиція з великим текстовим блоком у лівій частині. Заголовок "LLM: як машина генерує текст?" займає 60% ширини, використовуючи екстремальну жирність шрифту Outfit.
- **Hierarchy**:
    - Основний заголовок (H1) розміщений по центру лівої вертикальної осі.
    - Підзаголовок "Урок інформатики для 11 класу" знаходиться безпосередньо над заголовком у вигляді компактного тегу.
    - Метадані (дата, вчитель, тема модуля) згруповані у нижньому правому куті, відокремлені тонкою вертикальною лінією акцентного кольору (`--ppt-accent`).
- **Visual Rhythm**: Багато вільного простору навколо заголовка створює фокус на темі, а тонкі геометричні лінії (rail) додають відчуття технологічності.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "20%-30% of non-cover content pages; at most 1-2 pages for short outlines"
    selection_priority:
        - "core argument or key insight pages"
        - "summary or conclusion pages"
    rectangle_policy: "Уникати контейнерів-карток. Використовувати відкриті колонки, акцентні лінії (rules) та великі числові або текстові якорі для створення динамічного ритму."

special_open_layout_families:
    - name: "context-impact-focus"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Використовувати слово 'КОНТЕКСТ' як гігантський текстовий якір у лівій частині слайда, що займає 40% ширини. Праворуч — коротке пояснення та приклад зміни значення через слабку вертикальну лінію-роздільник."

    - name: "error-diagnostic-rail"
      page_idx: [9]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Два відкритих діагностичних пункти зліва (Правдоподібність vs Істина), з вузькою червоною акцентною смугою (evidence rail) праворуч, що містить короткі зауваження про відсутність перевірки фактів."
```

advanced_visual_assignments:
    - animation_source_required: true
      data_contract: Використовувати лише текстові приклади та варіанти слів, надані в контенті слайда, без залучення сторонніх даних.
      library: html_css
      page_idx:
        - 2
      render_mode: native_animation
      role: Інтерактивний віджет для передбачення наступного слова на основі контексту
      visual_contract: Створення інтерфейсу з кнопками вибору слів, що динамічно підсвічують імовірності та доповнюють речення при натисканні.
    - animation_source_required: true
      data_contract: Заборонити використання вигаданих фактів або зовнішніх джерел даних, спираючись виключно на параметри гри, визначені в уроці.
      library: html_css
      page_idx:
        - 7
      render_mode: native_animation
      role: Інтерактивний симулятор для командної гри «Жива мовна модель»
      visual_contract: Віджет для введення балів імовірності, що візуалізує процес вибору наступного токена та динамічне оновлення текстового вікна.
</SPECIAL_PAGE_DESIGN>
