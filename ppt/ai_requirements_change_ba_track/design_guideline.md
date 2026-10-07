<GLOBAL_DESIGN>
1. Topic Understanding
Курс присвячений трансформації ролі бізнес-аналітика через впровадження ШІ (інструмент Xplore) в процеси управління вимогами та змінами. Основний фокус на практичному застосуванні workflows, роботі з проектом ServiceHub та створенні конкретних артефактів (матриці, промпти, Jira-завдання).

2. Target Audience
Бізнес-аналітики (BA), менеджери вимог та спеціалісти з управління змінами, які прагнуть автоматизувати рутинні операції, покращити якість документації та ефективно обробляти критичні запити на зміни в SDLC.

3. Tone and Language
Професійний, навчальний, структурований та інструктивний. Мова — українська. Тон має надихати на технологічну трансформацію, залишаючись при цьому методично точним.

4. Theme Archetype
```yaml
theme_archetype:
  name: "analytical-tech-handbook"
  rationale: "Цей архетип підкреслює структурність та практичність курсу. Він поєднує естетику технічної документації з сучасними акцентами ШІ, що ідеально підходить для навчання бізнес-аналітиків роботі з інструментами та матрицями."
  visual_keywords: ["структурованість", "точність", "інженерний", "мінімалістичний", "аналітичний"]
  avoid_archetypes: ["generic dark dashboard", "default blue corporate"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap");

:root {
  --ppt-bg: #F8FAFC;
  --ppt-bg-soft: #EEF2F6;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #F1F5F9;
  --ppt-border: #CBD5E1;
  --ppt-text-1: #0F172A;
  --ppt-text-2: #475569;
  --ppt-text-3: #94A3B8;
  --ppt-accent: #0D9488;
  --ppt-accent-2: #6366F1;
  --ppt-chart-1: #0D9488;
  --ppt-chart-2: #6366F1;
  --ppt-chart-3: #F59E0B;
  --ppt-chart-4: #EC4899;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 6px;
  --ppt-radius-lg: 10px;
  --ppt-shadow-soft: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  --ppt-shadow-strong: 0 10px 15px -3px rgb(0 0 0 / 0.1);
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
    font_weight: 500
    line_height: 1.4
  cover_metadata:
    font_size: "16px"
    font_weight: 500
    line_height: 1.5
  non_cover_page_title:
    font_size: "34px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "28px"
    font_weight: 600
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
    font_size: "14px"
    font_weight: 400
    line_height: 1.4
  caption:
    font_size: "12px"
    font_weight: 400
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
```html
<header style="margin-top: 48px; margin-left: 56px; margin-right: 56px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="background-color: var(--ppt-accent); width: 4px; height: 32px; border-radius: var(--ppt-radius-sm);"></span>
    <div style="display: flex; flex-direction: column;">
      <span style="font-family: var(--ppt-font-mono); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ppt-accent);">BA Track | ServiceHub</span>
      <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 34px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2;">{{title}}</h1>
    </div>
  </div>
  {{#if subtitle}}
    <p style="margin: 0; margin-left: 16px; font-family: var(--ppt-font-body); font-size: 18px; font-weight: 400; color: var(--ppt-text-2);">{{subtitle}}</p>
  {{/if}}
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
Archetype: `editorial-report-cover`.
Title Placement: Центрований блок у верхній третині слайда.
Hierarchy:
- Надзаголовок: "AI-assisted Requirements and Change Management in SDLC" (малий кегль, капслок, акцентний колір).
- Головний заголовок: "Трек для бізнес-аналітиків" (максимальний кегль, напівжирний).
- Підзаголовок: Опис трансформації даних у вимоги за допомогою ШІ.
- Метадані (внизу праворуч): "Навчальний проект: ServiceHub", "Версія 1.0", "Business Analyst Track".
- Візуальний акцент: Тонка горизонтальна лінія (var(--ppt-accent)), що відокремлює заголовок від підзаголовка.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "6 pages (approx 20% of 29 slides)"
    selection_priority:
        - "roadmaps and transition pages"
        - "core AI tool integration (Xplore)"
        - "key matrices and models"
        - "capstone and final summaries"
    rectangle_policy: "Використовувати відкриті сітки, слабкі розділові лінії та акцентні плашки замість важких замкнених карток. Дозволено використання JetBrains Mono для технічних маркерів."

special_open_layout_families:
    - name: "roadmap-flow"
      page_idx: [3]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовуйте чотири вертикальні сегменти з великими цифрами (1-4) зліва для позначення сесій курсу, де права частина містить опис результатів та артефактів."

    - name: "tool-anchor-xplore"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Розмістіть велике слово 'XPLORE' або іконку інструменту як якір зліва, а праворуч — список ключових дій (Q&A, сумаризація) з короткими поясненнями."

    - name: "quality-framework-grid"
      page_idx: [11]
      expression_type: "open_columns_with_weak_rules"
      layout_contract: "Створіть три колонки, розділені тонкими вертикальними лініями, де кожна колонка містить по два виміри якості вимог з іконками та короткими дефініціями."

    - name: "impact-matrix-view"
      page_idx: [19]
      expression_type: "weak_line_comparison_matrix"
      layout_contract: "Відкрита таблиця без зовнішніх рамок для аналізу впливу змін: рядки — об'єкти впливу (UI, дані, Jira), колонки — опис змін та ризики."

    - name: "capstone-hero"
      page_idx: [25]
      expression_type: "concept_action_split"
      layout_contract: "Великий заклик до дії 'BA CAPSTONE' зліва на плашці var(--ppt-bg-soft), праворуч — перелік кроків фінального завдання та очікуваний результат."

    - name: "playbook-summary"
      page_idx: [28]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Центральна заява про цінність власного AI Playbook, під якою розташована горизонтальна смуга з трьох-чотирьох категорій промптів (Джерела, Jira, Вплив)."
```
</SPECIAL_PAGE_DESIGN>
