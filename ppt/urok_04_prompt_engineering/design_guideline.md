<GLOBAL_DESIGN>
1. Topic Understanding
Урок інформатики для 11 класу, присвячений мистецтву створення ефективних запитів (Prompt Engineering) для штучного інтелекту. Основна увага приділяється структурі промпту, безпеці даних та ітеративному покращенню результатів.

2. Target Audience
Учні 11 класу (16-17 років). Вони володіють базовими цифровими навичками, критично мислять, готуються до вступу у ВНЗ або роботи, де ШІ стане повсякденним інструментом. Очікують сучасного, структурованого та практичного контенту.

3. Tone and Language
Тон професійний, але доступний; навчальний, надихаючий та чіткий. Мова — українська. Використання термінології (контекст, ітерація, токен) має бути поясненим та логічним.

4. Theme Archetype
```yaml
theme_archetype:
  name: "tech-manual-editorial"
  rationale: "Цей архетип поєднує чітку структуру технічного посібника з динамічною типографікою сучасних медіа. Він ідеально підходить для теми ШІ, де важлива точність інструкцій та сучасний візуальний стиль."
  visual_keywords: ["structured", "high-contrast", "indigo-accents", "precise"]
  avoid_archetypes: ["generic dark dashboard", "playful elementary education"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&family=Inter:wght@400;600&display=swap");

:root {
  --ppt-bg: #FDFCFB;
  --ppt-bg-soft: #F3F4F6;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #EEF2FF;
  --ppt-border: #E5E7EB;
  --ppt-text-1: #111827;
  --ppt-text-2: #4B5563;
  --ppt-text-3: #9CA3AF;
  --ppt-accent: #6366F1;
  --ppt-accent-2: #10B981;
  --ppt-chart-1: #6366F1;
  --ppt-chart-2: #10B981;
  --ppt-chart-3: #F59E0B;
  --ppt-chart-4: #EC4899;
  --ppt-good: #059669;
  --ppt-warn: #D97706;
  --ppt-bad: #DC2626;
  --ppt-radius-sm: 4px;
  --ppt-radius-md: 8px;
  --ppt-radius-lg: 16px;
  --ppt-shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --ppt-shadow-strong: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --ppt-font-display: "Montserrat", sans-serif;
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
    font_size: "18px"
    font_weight: 500
    line_height: 1.4
  non_cover_page_title:
    font_size: "38px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "32px"
    font_weight: 600
    line_height: 1.2
  accent_text:
    font_size: "24px"
    font_weight: 600
    line_height: 1.3
  body_text:
    font_size: "20px"
    font_weight: 400
    line_height: 1.5
  annotation:
    font_size: "16px"
    font_weight: 400
    line_height: 1.4
  caption:
    font_size: "14px"
    font_weight: 400
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
```html
<header style="margin-top: 48px; margin-left: 64px; margin-right: 64px; margin-bottom: 40px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="background-color: var(--ppt-accent); color: white; font-family: var(--ppt-font-display); font-weight: 800; font-size: 12px; padding: 4px 8px; border-radius: 4px; letter-spacing: 1px; text-transform: uppercase;">
      IT CLASS
    </span>
    <span style="color: var(--ppt-text-3); font-family: var(--ppt-font-body); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
      Prompt Engineering
    </span>
  </div>
  <h1 style="margin: 0; color: var(--ppt-text-1); font-family: var(--ppt-font-display); font-weight: 800; font-size: 38px; line-height: 1.2;">
    {{title}}
  </h1>
  <div style="width: 60px; height: 4px; background-color: var(--ppt-accent); border-radius: 2px; margin-top: 8px;"></div>
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
Archetype: `editorial-report-cover`.
- **Title Placement**: Центрально-ліве вирівнювання у верхній третині слайда. Заголовок "Prompt engineering" має бути максимально великим (68px) та жирним (800).
- **Subtitle**: Мета уроку розміщується безпосередньо під заголовком з відступом у 24px, використовуючи `var(--ppt-accent)` для ключових слів.
- **Metadata**: У нижньому лівому куті розміщується інформація: "Урок інформатики", "11 Клас", "2024".
- **Visual Rhythm**: Використовувати великий відступ (margin: 80px) від лівого краю. На правій стороні слайда — абстрактна геометрична композиція з тонких ліній `var(--ppt-accent)`, що нагадує нейронні зв'язки, але не перекриває текст.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "20%-30% of non-cover content pages"
    selection_priority:
        - "core argument or key insight pages"
        - "recommendation or next-step pages"
    rectangle_policy: "Allow weak rules and emphasis bands to support hierarchy. Avoid boxed card systems."

special_open_layout_families:
    - name: "prompt-formula-flow"
      page_idx: [4]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовуйте вертикальний стек із 6 елементів формули. Зліва — великі порядкові номери у кольорі var(--ppt-accent), справа — назва компонента та коротке пояснення."

    - name: "safety-template-focus"
      page_idx: [9]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Розмістіть основний шаблон запиту як домінантний текстовий блок зліва, а праворуч — вузьку вертикальну смугу з правилами безпеки (evidence points) у м'яких зелених тонах var(--ppt-accent-2)."
```
</SPECIAL_PAGE_DESIGN>
