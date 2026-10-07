<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація присвячена основам машинного навчання для учнів 11 класу. Вона пояснює перехід від програмування за правилами до навчання на основі даних, розкриваючи ключові поняття (ознаки, мітки, цикли навчання) та етичні аспекти (упередженість).

2. Target Audience
Учні 11 класу (16-17 років), які мають базові знання з інформатики та алгоритмізації. Аудиторія очікує чіткої структури, візуальних пояснень складних процесів та прикладів, що стосуються реального життя.

3. Tone and Language
Тон навчальний, логічний та заохочувальний. Мова — науково-популярна, зрозуміла підліткам, без надмірного використання складного математичного апарату, але з точною термінологією (data-driven, features, labels).

4. Theme Archetype
```yaml
theme_archetype:
  name: "lab-manual-tech"
  rationale: "Цей архетип поєднує естетику наукового журналу та сучасного інтерфейсу розробника. Він використовує чіткі лінії, акцентовані маркери та структурні сітки, що допомагає учням сприймати AI як системну інженерну дисципліну, а не 'магію'."
  visual_keywords: ["структурований", "технологічний", "академічний-модерн"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap");

:root {
  --ppt-bg: #F9F9F7;
  --ppt-bg-soft: #F0F0EB;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E5E5E0;
  --ppt-border: #2D2D2D;
  --ppt-text-1: #1A1A1A;
  --ppt-text-2: #4A4A4A;
  --ppt-text-3: #757575;
  --ppt-accent: #00A896;
  --ppt-accent-2: #FF6B6B;
  --ppt-chart-1: #00A896;
  --ppt-chart-2: #028090;
  --ppt-chart-3: #F4D35E;
  --ppt-chart-4: #EE964B;
  --ppt-good: #27AE60;
  --ppt-warn: #F39C12;
  --ppt-bad: #E74C3C;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 4px;
  --ppt-radius-lg: 8px;
  --ppt-shadow-soft: 0 4px 12px rgba(0,0,0,0.05);
  --ppt-shadow-strong: 0 8px 24px rgba(0,0,0,0.1);
  --ppt-font-display: "Inter", sans-serif;
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
    font_weight: 600
    line_height: 1.4
  non_cover_page_title:
    font_size: "38px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "28px"
    font_weight: 600
    line_height: 1.3
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
<header style="margin-top: 48px; margin-right: 64px; margin-bottom: 40px; margin-left: 64px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="background-color: var(--ppt-accent); width: 4px; height: 24px;"></span>
    <span style="font-family: var(--ppt-font-body); font-size: 14px; font-weight: 600; color: var(--ppt-accent); text-transform: uppercase; letter-spacing: 0.1em;">
      УРОК ІНФОРМАТИКИ | ШТУЧНИЙ ІНТЕЛЕКТ
    </span>
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
Обрано архетип `editorial-report-cover`. Основний заголовок розміщується у лівій частині слайда всередині масивного блоку з акцентною лівою межею (teal). Підзаголовок розташовується безпосередньо під ним з помітним відступом. 
- **Title Placement**: Центрований по вертикалі, вирівняний по лівому краю з відступом 80px.
- **Hierarchy**: Заголовок (H1) займає 60% ширини. Підзаголовок (H2) має меншу вагу (medium).
- **Metadata**: У правому нижньому куті розміщується блок: "11 КЛАС", "МОДУЛЬ: AI", "УРОК №1". Це створює відчуття офіційного навчального посібника.
- **Visual Rhythm**: Багато вільного простору ("білого повітря") для фокусування на головному питанні теми.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "20%-30% of non-cover content pages; at most 1-2 pages for short outlines"
    selection_priority:
        - "chapter transition or section framing pages"
        - "core argument or key insight pages"
        - "summary or conclusion pages"
    rectangle_policy: "Уникати шаблонних карток. Використовувати відкриті колонки, акцентні лінії та великі типографічні якорі для виділення ключових етапів або понять."

special_open_layout_families:
    - name: "ml-cycle-flow"
      page_idx: [5]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовувати вертикальний стек з чотирьох етапів, де зліва розташовані великі порядкові номери (var(--ppt-accent)), а справа — назва етапу та короткий опис, розділені слабкими горизонтальними лініями."

    - name: "bias-impact-anchor"
      page_idx: [9]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Розмістити слово 'УПЕРЕДЖЕННЯ' як гігантський текстовий якір (var(--ppt-accent-2)) у лівій частині слайда, а праворуч надати лаконічне пояснення наслідків для суспільства."
```
</SPECIAL_PAGE_DESIGN>
