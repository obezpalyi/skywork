<GLOBAL_DESIGN>
1. Topic Understanding
Урок інформатики для 11 класу на тему «AI vs людина». Презентація фокусується на порівнянні можливостей штучного інтелекту та людини, підкреслюючи синергію, етичні аспекти та розподіл відповідальності в епоху автоматизації.

2. Target Audience
Учні 11 класу (16-17 років). Вони технічно грамотні, цікавляться майбутніми професіями та критично ставляться до нових технологій. Презентація має бути візуально сучасною, динамічною та спонукати до дискусії.

3. Tone and Language
Тон аналітичний, але залучаючий. Мова чітка, структурована, з використанням сучасної термінології (AI, алгоритми, емпатія, контекст). Основна мова — українська.

4. Theme Archetype
```yaml
theme_archetype:
  name: "future-human-lab"
  rationale: "Поєднує естетику наукової лабораторії та цифрового інтерфейсу. Використовує контраст між 'холодними' технологічними елементами та 'теплими' людськими акцентами, щоб підкреслити тему протистояння та співпраці."
  visual_keywords: ["технологічний", "структурований", "інтерактивний", "контрастний"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap");

:root {
  --ppt-bg: #F8F9FA;
  --ppt-bg-soft: #EEF2F6;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E9ECEF;
  --ppt-border: #CED4DA;
  --ppt-text-1: #212529;
  --ppt-text-2: #495057;
  --ppt-text-3: #6C757D;
  --ppt-accent: #6366F1; /* AI Indigo */
  --ppt-accent-2: #F43F5E; /* Human Rose */
  --ppt-chart-1: #6366F1;
  --ppt-chart-2: #F43F5E;
  --ppt-chart-3: #10B981;
  --ppt-chart-4: #F59E0B;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 4px;
  --ppt-radius-md: 12px;
  --ppt-radius-lg: 20px;
  --ppt-shadow-soft: 0 4px 12px rgba(0, 0, 0, 0.05);
  --ppt-shadow-strong: 0 8px 24px rgba(0, 0, 0, 0.08);
  --ppt-font-display: "Inter", sans-serif;
  --ppt-font-body: "Inter", sans-serif;
  --ppt-font-mono: "JetBrains Mono", monospace;
}
```

6. Typography Roles
```yaml
typography_roles:
  density_mode: "balanced"
  display_font_family: "var(--ppt-font-display)"
  body_font_family: "var(--ppt-font-body)"
  cover_page_title:
    font_size: "72px"
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
    line_height: 1.3
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
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
```html
<header style="margin-top: 48px; margin-left: 64px; margin-right: 64px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="font-family: var(--ppt-font-mono); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ppt-accent); background: var(--ppt-bg-soft); padding: 4px 8px; border-radius: 4px;">
      Інформатика 11 клас
    </span>
    <div style="height: 1px; flex-grow: 1; background: var(--ppt-border);"></div>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 38px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2;">
    {{title}}
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
Тип: `editorial-report-cover`.
Склад:
- Верхня частина: Мітка "НАВЧАЛЬНИЙ МОДУЛЬ: ШТУЧНИЙ ІНТЕЛЕКТ" шрифтом Mono.
- Центр: Величезний заголовок "AI VS ЛЮДИНА". Слово "AI" виділено кольором `--ppt-accent`, слово "ЛЮДИНА" кольором `--ppt-accent-2`. Між ними тонкий вертикальний роздільник.
- Нижня частина: Підзаголовок "Співпраця, конкуренція та відповідальність у цифрову епоху".
- Метадані в правому нижньому куті: Дата уроку та номер школи/класу.
Композиція асиметрична, з великою кількістю вільного простору навколо заголовка для створення ефекту важливості теми.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "30% of non-cover content pages"
    selection_priority:
        - "core argument or key insight pages"
        - "summary or conclusion pages"
        - "low-density conceptual pages"
    rectangle_policy: "Allow small icon boxes, tags, badges, and rails to support hierarchy. Avoid filled card grids."

special_open_layout_families:
    - name: "diagnostic-weakness-focus"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Використовуйте велике слово 'ОБМЕЖЕННЯ' як вертикальний якір з лівого боку, а праворуч розмістіть відкритий список слабких сторін ШІ з короткими пояснювальними пунктами."

    - name: "dual-concept-split"
      page_idx: [9]
      expression_type: "concept_action_split"
      layout_contract: "Розділіть слайд вертикально слабкою лінією: зліва блок 'ШІ ДОПОМАГАЄ' (аналіз, варіанти) у кольорі Indigo, справа блок 'ЛЮДИНА ВІДПОВІДАЄ' (мета, контроль) у кольорі Rose."

    - name: "exit-ticket-summary"
      page_idx: [10]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Розмістіть основний висновок про відповідальність у лівій частині слайда великим шрифтом, а праворуч — вузьку стрічку з трьома пунктами домашнього завдання, розділеними горизонтальними лініями."
```

advanced_visual_assignments:
    - animation_source_required: true
      data_contract: Використовувати лише професії, зазначені в матеріалах уроку, забороняючи використання вигаданої статистики або зовнішніх результатів опитувань.
      library: html_css
      page_idx:
        - 2
      render_mode: native_animation
      role: Інтерактивний віджет для голосування щодо автоматизації професій
      visual_contract: Створити клікабельний інтерфейс опитування для оцінки ймовірності заміни різних фахівців штучним інтелектом.
    - animation_source_required: true
      data_contract: Використовувати виключно перелік задач із контенту слайда без додавання сторонніх метрик або зовнішніх об'єктів.
      library: html_css
      page_idx:
        - 7
      render_mode: native_animation
      role: Інтерактивний модуль для сортування навчальних завдань
      visual_contract: Реалізувати механіку переміщення карток із завданнями до категорій «ШІ», «Людина» або «Спільна праця» при натисканні.
</SPECIAL_PAGE_DESIGN>
