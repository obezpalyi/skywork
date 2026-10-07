<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація присвячена критичному аналізу етичних викликів, пов'язаних із впровадженням штучного інтелекту. Основна увага приділяється питанню відповідальності (human agency), прозорості та справедливості, що дозволяє учням 11 класу сформувати власну позицію щодо взаємодії людини та алгоритмів у складних соціальних ситуаціях.

2. Target Audience
Учні 11 класу (16-17 років). Це цифрові носії (digital natives) з достатнім рівнем абстрактного мислення, які здатні аналізувати складні соціальні та технічні концепції. Вони очікують структурованої інформації, реальних прикладів та інтерактивних елементів для обговорення.

3. Tone and Language
Тон — аналітичний, етично-орієнтований та дискусійний. Мова повинна бути чіткою, термінологічно точною (використання понять "упередженість", "алгоритмічна прозорість", "підзвітність"), але доступною для розуміння без глибоких знань програмування.

4. Theme Archetype
```yaml
theme_archetype:
  name: "critical-thinking-briefing"
  rationale: "Цей архетип поєднує строгість академічного звіту з візуальною ясністю інтелектуального посібника. Він стимулює аналіз, використовуючи чітку ієрархію та акценти на ключових термінах."
  visual_keywords: ["структурованість", "етичний аналіз", "людиноцентричність"]
  avoid_archetypes: ["generic dark dashboard", "product-launch-showcase"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Manrope:wght@400;500;700&display=swap");

:root {
  --ppt-bg: #FDFCFB;
  --ppt-bg-soft: #F4F2EF;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E9ECEF;
  --ppt-border: #D8D2C2;
  --ppt-text-1: #1A1A1A;
  --ppt-text-2: #4A4A4A;
  --ppt-text-3: #6C757D;
  --ppt-accent: #005F73;
  --ppt-accent-2: #9B2226;
  --ppt-chart-1: #005F73;
  --ppt-chart-2: #0A9396;
  --ppt-chart-3: #EE9B00;
  --ppt-chart-4: #BB3E03;
  --ppt-good: #0A9396;
  --ppt-warn: #E9D8A6;
  --ppt-bad: #9B2226;
  --ppt-radius-sm: 4px;
  --ppt-radius-md: 8px;
  --ppt-radius-lg: 0px;
  --ppt-shadow-soft: 0 4px 12px rgba(0,0,0,0.05);
  --ppt-shadow-strong: 0 8px 24px rgba(0,0,0,0.08);
  --ppt-font-display: "Inter", sans-serif;
  --ppt-font-body: "Manrope", sans-serif;
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
    font_size: "30px"
    font_weight: 700
    line_height: 1.3
  accent_text:
    font_size: "24px"
    font_weight: 600
    line_height: 1.4
  body_text:
    font_size: "19px"
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
Non-Cover-Page Title Region:
```html
<div style="margin-top: 48px; margin-right: 64px; margin-bottom: 40px; margin-left: 64px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="width: 24px; height: 4px; background-color: var(--ppt-accent);"></div>
    <span style="font-family: var(--ppt-font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ppt-accent);">Етика та ШІ</span>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 38px; font-weight: 800; line-height: 1.2; color: var(--ppt-text-1);">
    {{title}}
  </h1>
  <div style="width: 100%; height: 1px; background-color: var(--ppt-border); margin-top: 12px;"></div>
</div>
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
Обраний архетип: `editorial-report-cover`.
- **Title Placement**: Центрально-ліве вирівнювання у верхній половині слайда. Заголовок "Етика штучного інтелекту" має бути максимально масивним (68px) для створення візуального якоря.
- **Subtitle**: Розташовується безпосередньо під заголовком, відділений коротким горизонтальним штрихом (колір `--ppt-accent`). Текст: "Хто відповідає за рішення ШІ?".
- **Hierarchy**: Основний заголовок домінує. Підзаголовок слугує змістовним уточненням.
- **Metadata**: У нижньому правому куті розміщується інформація: "11 клас | Урок інформатики та етики", дата та ім'я викладача.
- **Background**: Світлий нейтральний фон (`--ppt-bg`) з ледь помітною геометричною текстурою або м'яким градієнтом у куті для глибини.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "20%-30% of non-cover content pages; at most 2 pages for this outline"
    selection_priority:
        - "core argument or key insight pages"
        - "summary or conclusion pages"
    rectangle_policy: "Уникати сіток з карток. Використовувати відкриті колонки, акцентні лінії (rails) та великі текстові якорі для підкреслення етичного вибору."

special_open_layout_families:
    - name: "responsibility-split"
      page_idx: [3]
      expression_type: "contrast_diptych"
      layout_contract: "Розділити слайд вертикальною слабкою лінією на дві частини: зліва — перелік технічних ролей (розробник, оператор), справа — ключова теза про неможливість перекладання відповідальності на алгоритм."

    - name: "privacy-anchor"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Використати велике ключове слово 'ЗГОДА' як візуальний якір зліва, а праворуч розмістити три пункти щодо прав користувача, розділені горизонтальними лініями."

    - name: "ethical-map-diagnostic"
      page_idx: [8]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Основна частина слайда містить відкритий список критеріїв етичної карти, а вузька права панель (evidence rail) — перелік критичних ризиків, які потребують людського контролю."
```
</SPECIAL_PAGE_DESIGN>
