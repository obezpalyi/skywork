<GLOBAL_DESIGN>
1. Topic Understanding
Презентація присвячена основам роботи генеративного штучного інтелекту в мультимедійних сферах (зображення, звук, відео) для учнів 11 класу. Мета — пояснити механізми ШІ без технічного перевантаження, навчити створювати ефективні промпти та наголосити на етиці та безпеці використання контенту.

2. Target Audience
Учні 11 класу (16–17 років). Вони є активними користувачами технологій, але потребують структурування знань про ШІ, критичного мислення щодо фейків та розуміння правових аспектів цифрової творчості.

3. Tone and Language
Тон сучасний, освітній та надихаючий, але з чіткими акцентами на відповідальності. Мова — українська, лаконічна, з використанням актуальної термінології (дифузія, промпт, генерація, дипфейк).

4. Theme Archetype
```yaml
theme_archetype:
  name: "creative-tech-lab-briefing"
  rationale: "Цей архетип поєднує естетику наукової лабораторії з динамікою сучасних медіа-технологій. Він виглядає структуровано, як навчальний посібник, але водночас візуально прогресивно, що відповідає темі ШІ."
  visual_keywords: ["технологічний", "структурований", "інноваційний", "чіткий"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --ppt-bg: #F9FAFB;
  --ppt-bg-soft: #EEF2FF;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #F3F4F6;
  --ppt-border: #E5E7EB;
  --ppt-text-1: #111827;
  --ppt-text-2: #4B5563;
  --ppt-text-3: #9CA3AF;
  --ppt-accent: #6366F1;
  --ppt-accent-2: #06B6D4;
  --ppt-chart-1: #6366F1;
  --ppt-chart-2: #06B6D4;
  --ppt-chart-3: #F59E0B;
  --ppt-chart-4: #EC4899;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 4px;
  --ppt-radius-md: 8px;
  --ppt-radius-lg: 16px;
  --ppt-shadow-soft: 0 4px 12px -2px rgba(0, 0, 0, 0.05);
  --ppt-shadow-strong: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --ppt-font-display: 'Space Grotesk', sans-serif;
  --ppt-font-body: 'Inter', sans-serif;
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
    font_weight: 700
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
    font_weight: 700
    line_height: 1.2
  section_title:
    font_size: "30px"
    font_weight: 600
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
<div style="margin-top: 48px; margin-left: 64px; margin-right: 64px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="width: 4px; height: 32px; background: var(--ppt-accent); border-radius: var(--ppt-radius-sm);"></div>
    <span style="font-family: var(--ppt-font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ppt-accent);">Технології майбутнього</span>
  </div>
  <h1 style="font-family: var(--ppt-font-display); font-size: 38px; font-weight: 700; color: var(--ppt-text-1); margin: 0; line-height: 1.2;">Title</h1>
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
Обрано архетип `editorial-report-cover`. Основна увага зосереджена на заголовку в центрі лівої частини слайда.
- **Title Placement**: Розміщується зліва, вирівнювання по лівому краю. Заголовок займає приблизно 60% ширини слайда.
- **Hierarchy**: Великий, жирний заголовок `cover_page_title`, під ним — `cover_page_subtitle` як теза уроку.
- **Metadata**: В нижньому лівому куті розміщується інформація про клас та предмет (11 клас, Інформатика/Технології).
- **Visual Rhythm**: Права частина слайда залишається відкритою для візуального акценту (наприклад, стилізованої абстрактної графіки ШІ, що не є картою).
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "2 pages (20% of 10 pages)"
    selection_priority:
        - "core argument or key insight pages"
        - "recommendation or next-step pages"
    rectangle_policy: "Уникати сіток карток. Використовувати відкриті колонки, акцентні лінії та великі цифрові маркери."

special_open_layout_families:
    - name: "workflow-process-flow"
      page_idx: [5]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовуйте три вертикально розташовані блоки з великими цифрами в акцентних колах зліва для відображення етапів роботи з ШІ."

    - name: "risk-diagnostic-rail"
      page_idx: [8]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Розмістіть три основні типи помилок ШІ зліва як відкритий список, а праворуч — вузьку панель (rail) з прикладами ризиків та дипфейків."
```
</SPECIAL_PAGE_DESIGN>
