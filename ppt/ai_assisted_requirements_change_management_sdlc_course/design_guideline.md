<GLOBAL_DESIGN>
1. Topic Understanding
Цей курс присвячений трансформації традиційних процесів управління вимогами та змінами в життєвому циклі розробки ПЗ (SDLC) за допомогою штучного інтелекту. Основна увага приділяється інтеграції AI-асистентів (зокрема Xplore) у щоденну роботу BA, QA та DevOps для підвищення якості документації, швидкості аналізу та точності оцінки впливу змін.

2. Target Audience
Професіонали в галузі розробки ПЗ: Business Analysts (BA), Quality Assurance specialists (QA), DevOps engineers та Project Managers. Аудиторія має технічний бекграунд, цінує структуру, конкретику та практичні інструменти, які можна негайно впровадити в робочий процес.

3. Tone and Language
Тон професійний, експертний, але орієнтований на дію (action-oriented). Мова технічна, з використанням стандартної термінології IT (backlog, user stories, traceability, impact analysis, SDLC). Виклад матеріалу має бути чітким, структурованим та переконливим, підкреслюючи роль людини як фінального контролера (human-in-the-loop).

4. Theme Archetype
```yaml
theme_archetype:
  name: "engineering-playbook-v2"
  rationale: "Оскільки курс розрахований на технічних спеціалістів і містить 77 слайдів, візуальна система має бути максимально структурованою, нагадуючи технічний довідник або інженерний план. Це забезпечує високу читабельність при великій щільності даних."
  visual_keywords: ["blueprint", "structured", "precise", "technical", "efficient"]
  avoid_archetypes: ["generic dark dashboard", "editorial-feature"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

:root {
  --ppt-bg: #FCFCFD;
  --ppt-bg-soft: #F1F5F9;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #F8FAFC;
  --ppt-border: #E2E8F0;
  --ppt-text-1: #0F172A;
  --ppt-text-2: #475569;
  --ppt-text-3: #94A3B8;
  --ppt-accent: #2563EB;
  --ppt-accent-2: #06B6D4;
  --ppt-chart-1: #2563EB;
  --ppt-chart-2: #06B6D4;
  --ppt-chart-3: #6366F1;
  --ppt-chart-4: #F59E0B;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 6px;
  --ppt-radius-lg: 10px;
  --ppt-shadow-soft: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --ppt-shadow-strong: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --ppt-font-display: "Plus Jakarta Sans", sans-serif;
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
    font_size: "60px"
    font_weight: 800
    line_height: 1.1
  cover_page_subtitle:
    font_size: "24px"
    font_weight: 500
    line_height: 1.4
  cover_metadata:
    font_size: "16px"
    font_weight: 500
    line_height: 1.4
  non_cover_page_title:
    font_size: "32px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "26px"
    font_weight: 600
    line_height: 1.3
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
    font_weight: 400
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
Усі контентні слайди повинні мати уніфікований верхній колонтитул, що відображає ієрархію курсу.

Non-Cover-Page Title Region:
```html
<header style="margin-top: 40px; margin-left: 60px; margin-right: 60px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px; border-left: 4px solid var(--ppt-accent); padding-left: 24px;">
  <div style="font-family: var(--ppt-font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ppt-accent);">
    AI-MANAGED SDLC PLAYBOOK
  </div>
  <h1 style="font-family: var(--ppt-font-display); font-size: 32px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2; margin: 0;">
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
Обрано архетип `editorial-report-cover` з акцентом на типографіку.
- **Title Placement**: Центрально-ліве вирівнювання у верхній третині слайда. Заголовок "Управління вимогами та змінами в SDLC із застосуванням штучного інтелекту" має бути максимально великим (60px) та розбитим на логічні рядки.
- **Subtitle**: Розміщується безпосередньо під заголовком, відділений тонкою горизонтальною лінією (var(--ppt-accent)). Текст: "Програма для Business Analyst, QA та DevOps спеціалістів".
- **Metadata**: У нижньому лівому куті розміщується блок: "Інструментарій: Xplore AI-Workflows", "Тривалість: 27 годин", "Рівень: Professional".
- **Visual Rhythm**: Фон світлий (var(--ppt-bg)), з ледь помітною геометричною сіткою (dot grid) у правій частині слайда для створення відчуття інженерної точності.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "15-20 pages selected for maximum impact"
    selection_priority:
        - "chapter transition or section framing pages"
        - "core argument or key insight pages"
        - "workflow summaries"
    rectangle_policy: "Allow thin rules, rails, and small chips. Avoid boxed grids for these specific slides."

special_open_layout_families:
    - name: "core-workflow-overview"
      page_idx: [5]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовуйте вертикальну лінію зліва з великими цифрами 1-5; кожен пункт має заголовок акцентним кольором та короткий опис артефакту."

    - name: "prompt-formula-anchor"
      page_idx: [14]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Розмістіть велику формулу 'R+C+A+F+K' на лівій стороні слайда як візуальний якір, з детальним розшифруванням компонентів праворуч."

    - name: "process-transformation-split"
      page_idx: [24, 31, 38, 44]
      expression_type: "concept_action_split"
      layout_contract: "Розділіть слайд на дві частини: зліва вхідний артефакт (Document/Requirement), справа — 3 чіткі дії ШІ для отримання результату."

    - name: "impact-matrix-matrix"
      page_idx: [47]
      expression_type: "weak_line_comparison_matrix"
      layout_contract: "Створіть відкриту сітку без заливки комірок, використовуючи лише слабкі горизонтальні лінії для розділення зон впливу (Scope, QA, DevOps)."

    - name: "quality-gate-diagnostic"
      page_idx: [66]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Ліворуч — перелік чек-поінтів Quality Gates, праворуч — вузька колонка з критеріями 'Human Review' для кожного пункту."

    - name: "pilot-plan-focus"
      page_idx: [74]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Велике центральне твердження про запуск пілоту, підкріплене нижньою смугою з трьома ключовими метриками успіху."
```
</SPECIAL_PAGE_DESIGN>
