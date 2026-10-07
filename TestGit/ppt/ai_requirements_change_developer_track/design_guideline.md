<GLOBAL_DESIGN>
1. Topic Understanding
Курс зосереджений на трансформації бізнес-вимог у технічні специфікації для розробників з використанням AI-інструменту Xplore. Основна увага приділяється практичним робочим процесам (workflows) у проекті ServiceHub: від технічного аналізу та декомпозиції до оцінки впливу змін (TIA) та підготовки архітектурних рішень (ADR). Xplore позиціонується як аналітичний асистент, що допомагає виявляти ризики та прогалини, а не замінює інженерне мислення.

2. Target Audience
Професійні розробники ПЗ, системні архітектори та техліди. Аудиторія очікує високої щільності інформації, структурності, технічної точності та практичних алгоритмів дій. Вони цінують логіку, системність та відсутність зайвого "маркетингового" шуму.

3. Tone and Language
Тон професійний, технічно-спрямований, лаконічний та спонукальний до дії (persuasive tech). Використовується стандартна ІТ-термінологія (backlog, API contract, ADR, feature flags). Мова — українська, з дотриманням технічного стилю.

4. Theme Archetype
```yaml
theme_archetype:
  name: "technical-blueprint-editorial"
  rationale: "Цей архетип поєднує точність інженерної документації з чіткою візуальною ієрархією сучасного технічного видання. Він ідеально підходить для розробників, оскільки використовує сітки, акцентовані лінії та моноширинні елементи, що асоціюються з кодом та архітектурними схемами."
  visual_keywords: ["структурований", "технологічний", "прецизійний", "інструментальний"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap");

:root {
  --ppt-bg: #FDFDFD;
  --ppt-bg-soft: #F4F7F6;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E9EFED;
  --ppt-border: #D1D9D7;
  --ppt-text-1: #121417;
  --ppt-text-2: #4A5552;
  --ppt-text-3: #879491;
  --ppt-accent: #007A5E;
  --ppt-accent-2: #00D3A4;
  --ppt-chart-1: #007A5E;
  --ppt-chart-2: #00D3A4;
  --ppt-chart-3: #121417;
  --ppt-chart-4: #879491;
  --ppt-good: #107C10;
  --ppt-warn: #D83B01;
  --ppt-bad: #A80000;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 4px;
  --ppt-radius-lg: 8px;
  --ppt-shadow-soft: 0 2px 8px rgba(0,0,0,0.05);
  --ppt-shadow-strong: 0 4px 16px rgba(0,0,0,0.1);
  --ppt-font-display: "Inter", sans-serif;
  --ppt-font-body: "Inter", sans-serif;
  --ppt-font-mono: "JetBrains Mono", monospace;
}
```

6. Typography Roles
```yaml
typography_roles:
  density_mode: "compact"
  display_font_family: "var(--ppt-font-display)"
  body_font_family: "var(--ppt-font-body)"
  cover_page_title:
    font_size: "60px"
    font_weight: 800
    line_height: 1.1
  cover_page_subtitle:
    font_size: "24px"
    font_weight: 400
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
    font_size: "28px"
    font_weight: 600
    line_height: 1.2
  accent_text:
    font_size: "22px"
    font_weight: 600
    line_height: 1.3
  body_text:
    font_size: "17px"
    font_weight: 400
    line_height: 1.5
  annotation:
    font_size: "14px"
    font_weight: 400
    line_height: 1.4
  caption:
    font_size: "12px"
    font_weight: 500
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
Non-Cover-Page Title Region:
```html
<header style="margin-top: 40px; margin-left: 56px; margin-right: 56px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="font-family: var(--ppt-font-mono); font-size: 12px; font-weight: 500; color: var(--ppt-accent); text-transform: uppercase; letter-spacing: 0.1em; background: var(--ppt-surface-2); padding: 4px 8px; border-radius: var(--ppt-radius-sm);">Developer Track</span>
    <div style="height: 1px; flex-grow: 1; background: var(--ppt-border);"></div>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 32px; font-weight: 800; color: var(--ppt-text-1); letter-spacing: -0.02em;">
    {{title}}
  </h1>
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
Архетип: `editorial-report-cover`.
Композиція:
- Заголовок (H1) розташовується у верхній лівій чверті слайда, займаючи приблизно 60% ширини. Використовується екстремально жирне накреслення (800 weight) для акценту на "Developer Track".
- Підзаголовок розташовується безпосередньо під заголовком з відступом у 40px, пояснюючи суть переходу від вимог до реалізації.
- Метадані (проект ServiceHub, тривалість практики, тип сертифікації) групуються у нижній лівій частині у вигляді компактного вертикального списку з використанням моноширинного шрифту для технічного вигляду.
- Права частина слайда залишається вільною або містить ледь помітну геометричну сітку (grid), що підкреслює інженерну спрямованість.
- Колірна схема: Білий фон (`--ppt-bg`), чорний текст (`--ppt-text-1`) та акцентна лінія кольору `--ppt-accent-2` зліва від заголовка.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "6-8 pages (approx 20-30% of 29 slides)"
    selection_priority:
        - "chapter transition or section framing pages"
        - "core argument or key insight pages"
        - "summary or conclusion pages"
    rectangle_policy: "Уникати масивних карток. Використовувати тонкі роздільні лінії (rules), моноширинні теги та відкриті колонки для підтримки технічного стилю."

special_open_layout_families:
    - name: "conceptual-split-focus"
      page_idx: [5]
      expression_type: "contrast_diptych"
      layout_contract: "Розділіть слайд на дві рівні вертикальні зони за допомогою тонкої центральної лінії: 'Бізнес-контекст' зліва та 'Контекст впровадження' справа, використовуючи відкриті списки без рамок."
      
    - name: "hero-prompt-structure"
      page_idx: [6]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Використовуйте великий моноширинний якір 'PROMPT_SYSTEM' зліва, а праворуч розмістіть структуру промпту у вигляді ієрархічного списку з акцентними маркерами."

    - name: "impact-diagnostic-rail"
      page_idx: [18]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Основна область зліва для прямого впливу змін, поєднана з вузькою правою панеллю (rail) для транзитивних ризиків, розділеною пунктирною лінією."

    - name: "strategic-playbook-anchor"
      page_idx: [27]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Розмістіть велике твердження про цінність AI Playbook у верхній частині, а під ним — горизонтальну стрічку з чотирьох ключових категорій промптів з іконками-кодами."

    - name: "certification-hero-anchor"
      page_idx: [29]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Великий цифровий якір '30 ПИТАНЬ' як центральний візуальний елемент зліва, з чітким переліком умов сертифікації у правій колонці."
```
</SPECIAL_PAGE_DESIGN>
