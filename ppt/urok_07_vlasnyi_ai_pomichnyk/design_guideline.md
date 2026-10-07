<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація є практичним посібником для учнів 11 класу з розробки власного AI-помічника. Вона охоплює повний цикл проектування: від ідентифікації реальної проблеми до написання системних інструкцій, тестування безпеки та фінального оцінювання. Основний фокус — перехід від абстрактного використання ШІ до створення структурованого та безпечного інструменту.

2. Target Audience
Учні 11 класу (16-17 років), які вивчають інформатику. Вони мають базові цифрові навички, але потребують чіткої структури для розуміння логіки роботи LLM (великих мовних моделей). Аудиторія очікує сучасного, "технологічного" вигляду матеріалів, який нагадує робочі інтерфейси AI-платформ або технічну документацію.

3. Tone and Language
Тон мовлення — професійно-навчальний, конструктивний та спонукальний до дії. Мова чітка, з використанням актуальної термінології (системний промпт, межі компетенції, сценарії тестування), але без надмірної складності. Стиль має надихати на етичне та критичне використання технологій.

4. Theme Archetype
```yaml
theme_archetype:
  name: "ai-lab-workspace"
  rationale: "Цей архетип імітує інтерфейс сучасного інструменту розробки або лабораторного журналу. Він підкреслює практичний характер уроку, де слайд є не просто носієм тексту, а робочим простором (workspace) для проектування."
  visual_keywords: ["structured", "technical-clean", "blueprint", "interactive-lab"]
  avoid_archetypes: ["generic blue corporate", "playful elementary school", "dark neon hacker"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap');

:root {
  --ppt-bg: #F9FAFB;
  --ppt-bg-soft: #F3F4F6;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #EEF2FF;
  --ppt-border: #E5E7EB;
  --ppt-text-1: #111827;
  --ppt-text-2: #4B5563;
  --ppt-text-3: #9CA3AF;
  --ppt-accent: #10B981;
  --ppt-accent-2: #6366F1;
  --ppt-chart-1: #10B981;
  --ppt-chart-2: #6366F1;
  --ppt-chart-3: #F59E0B;
  --ppt-chart-4: #EF4444;
  --ppt-good: #059669;
  --ppt-warn: #D97706;
  --ppt-bad: #DC2626;
  --ppt-radius-sm: 4px;
  --ppt-radius-md: 6px;
  --ppt-radius-lg: 0px;
  --ppt-shadow-soft: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --ppt-shadow-strong: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --ppt-font-display: "Montserrat", sans-serif;
  --ppt-font-body: "Inter", sans-serif;
}
```

6. Typography Roles
```yaml
typography_roles:
  density_mode: "compact"
  display_font_family: "var(--ppt-font-display)"
  body_font_family: "var(--ppt-font-body)"
  cover_page_title:
    font_size: "64px"
    font_weight: 800
    line_height: 1.1
  cover_page_subtitle:
    font_size: "24px"
    font_weight: 500
    line_height: 1.4
  cover_metadata:
    font_size: "16px"
    font_weight: 600
    line_height: 1.4
  non_cover_page_title:
    font_size: "32px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "26px"
    font_weight: 700
    line_height: 1.3
  accent_text:
    font_size: "22px"
    font_weight: 600
    line_height: 1.4
  body_text:
    font_size: "18px"
    font_weight: 400
    line_height: 1.5
  annotation:
    font_size: "15px"
    font_weight: 500
    line_height: 1.4
  caption:
    font_size: "13px"
    font_weight: 400
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
На кожному робочому слайді заголовок розміщується у верхній частині, відокремлений тонкою лінією або акцентною плашкою, що створює відчуття "шапки" застосунку.

```html
<header style="margin-top: 48px; margin-right: 64px; margin-bottom: 32px; margin-left: 64px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="background-color: var(--ppt-accent); width: 12px; height: 12px; border-radius: 2px;"></span>
    <span style="font-family: var(--ppt-font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--ppt-accent); letter-spacing: 0.05em;">Лабораторна робота: AI-Помічник</span>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 32px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2;">
    Назва слайда
  </h1>
  <div style="width: 100%; height: 1px; background-color: var(--ppt-border); margin-top: 8px;"></div>
</header>
```

```yaml
density_mode_guidance:
  mode: "compact"
  design_intent: "Use efficient hierarchy and spacing for information-rich content without making pages feel text-heavy."
  content_policy: "Prioritize key messages and keep wording concise."
  spacing_policy: "Keep spacing compact but readable."
```
</GLOBAL_DESIGN>

<COVER_DESIGN>
8. Cover Page Layout Recommendation
Тип макету: `bottom-title-document-cover`.
Верхня частина слайда (60% висоти) залишається відкритою з легким геометричним патерном у стилі нейронної мережі (крапки та тонкі лінії). У верхньому лівому куті розміщується метадані: "Інформатика, 11 клас" та "Модуль: Штучний інтелект". 
Нижня частина слайда містить масивний текстовий блок. Заголовок "Створюємо власного AI-помічника" вирівняний по лівому краю, набраний великим кеглем (64px). Під ним — коротка теза про мету проєкту, виділена плашкою кольору `var(--ppt-surface-2)`. Це створює враження серйозної технічної документації або обкладинки звіту про розробку.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "30% (3 слайди)"
    selection_priority:
        - "core argument or key insight pages"
        - "recommendation or next-step pages"
        - "summary or conclusion pages"
    rectangle_policy: "Використовувати відкриті сітки, вертикальні розділювачі (rails) та акцентні цифри замість закритих карток."

special_open_layout_families:
    - name: "conceptual-anchor"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Використовуйте термін 'SYSTEM PROMPT' як гігантський текстовий якір зліва, а праворуч розмістіть три лаконічні пункти визначення, розділені слабкими горизонтальними лініями."

    - name: "process-flow"
      page_idx: [6]
      expression_type: "numbered_argument_flow"
      layout_contract: "Чотири вертикальні кроки конструктора: велика цифра зліва (var(--ppt-accent-2)), назва етапу та коротке поле-приклад праворуч, що нагадує структуру коду."

    - name: "grading-matrix"
      page_idx: [10]
      expression_type: "weak_line_comparison_matrix"
      layout_contract: "Відкрита таблиця критеріїв оцінювання (12 балів) без зовнішніх меж, лише з горизонтальними розділювачами, де бали виділені кольором var(--ppt-accent) як ключові маркери успіху."
```
</SPECIAL_PAGE_DESIGN>
