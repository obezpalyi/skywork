<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація є спеціалізованим навчальним треком для DevOps-інженерів у межах курсу з управління вимогами та змінами за допомогою ШІ. Основна увага зосереджена на інтеграції ШІ (інструмент Xplore) у робочі процеси DevOps для аналізу операційних ризиків, планування розгортання та створення технічної документації (Runbooks), не передаючи ШІ автономне керування інфраструктурою.

2. Target Audience
DevOps-інженери, SRE, системні адміністратори та технічні ліди. Аудиторія має високий технічний рівень, орієнтована на ефективність, безпеку та системність. Вони очікують конкретних методологій, прикладів IaC та чітких структур промптів.

3. Tone and Language
Тон професійний, технічний та інструктивний. Мова чітка, з використанням галузевої термінології (IaC, CI/CD, observability, rollback, runbook). Фокус на практичному застосуванні та безпеці (security-first mindset).

4. Theme Archetype
```yaml
theme_archetype:
  name: "engineering-ops-guide"
  rationale: "Цей архетип відображає структурований, технічний характер DevOps-процесів. Він використовує елементи, схожі на IDE або технічну документацію, що створює відчуття надійності та точності."
  visual_keywords: ["технічний", "структурований", "безпечний", "операційний"]
  avoid_archetypes: ["generic dark dashboard", "premium-brand-deck"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Roboto+Mono:wght@400;500&display=swap");

:root {
  --ppt-bg: #F8FAFC;
  --ppt-bg-soft: #F1F5F9;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E2E8F0;
  --ppt-border: #CBD5E1;
  --ppt-text-1: #0F172A;
  --ppt-text-2: #475569;
  --ppt-text-3: #64748B;
  --ppt-accent: #2563EB;
  --ppt-accent-2: #10B981;
  --ppt-chart-1: #2563EB;
  --ppt-chart-2: #10B981;
  --ppt-chart-3: #F59E0B;
  --ppt-chart-4: #6366F1;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 4px;
  --ppt-radius-lg: 8px;
  --ppt-shadow-soft: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --ppt-shadow-strong: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --ppt-font-display: "Inter", sans-serif;
  --ppt-font-body: "Roboto Mono", monospace;
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
    font_size: "16px"
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
<header style="margin-top: 40px; margin-left: 60px; margin-right: 60px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 4px; border-left: 6px solid var(--ppt-accent); padding-left: 20px;">
  <div style="font-family: var(--ppt-font-body); font-size: 14px; font-weight: 500; color: var(--ppt-accent); text-transform: uppercase; letter-spacing: 0.05em;">DEVOPS TRACK | AI-ASSISTED SDLC</div>
  <h1 style="font-family: var(--ppt-font-display); font-size: 32px; font-weight: 800; line-height: 1.2; color: var(--ppt-text-1); margin: 0;">{{title}}</h1>
  <div style="font-family: var(--ppt-font-body); font-size: 16px; font-weight: 400; color: var(--ppt-text-2); margin-top: 2px;">{{subtitle}}</div>
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
Використовується архетип `editorial-report-cover`. Основний заголовок розміщується у лівій центральній частині слайда з великим відступом. Праворуч розташовується вертикальна смуга з метаданими (курс, трек, версія). Фон — м'який світло-сірий (`--ppt-bg`) з ледь помітним геометричним паттерном, що нагадує сітку координат або код. Заголовок має максимальну вагу (800) та акцентний колір для ключових слів.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "6 slides (approx 20% of 29 pages)"
    selection_priority:
        - "core argument or key insight pages"
        - "summary or conclusion pages"
        - "recommendation or next-step pages"
    rectangle_policy: "Уникати громіздких карток. Використовувати відкриті колонки, слабкі розділові лінії та акцентні типографічні якорі для підтримки технічного ритму."

special_open_layout_families:
    - name: "operational-criteria-anchor"
      page_idx: [5]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "Розмістити ключовий термін 'Operational Completeness' як величезний якір зліва, а список критеріїв — справа, розділивши їх тонкою вертикальною лінією."

    - name: "impact-matrix-open"
      page_idx: [12]
      expression_type: "weak_line_comparison_matrix"
      layout_contract: "Використати відкриту табличну структуру без заливки комірок для мапування змін на сервіси, використовуючи лише горизонтальні слабкі лінії та кольорові теги статусів."

    - name: "rollback-strategy-contrast"
      page_idx: [19]
      expression_type: "contrast_diptych"
      layout_contract: "Розділити слайд на дві рівні зони (Trigger vs Action) за допомогою центральної пунктирної лінії, використовуючи іконки та короткі тези без контейнерів."

    - name: "capstone-workflow-flow"
      page_idx: [25]
      expression_type: "numbered_argument_flow"
      layout_contract: "Створити вертикальний потік етапів проекту Capstone з великими моноширинними цифрами зліва та короткими описами завдань справа."

    - name: "playbook-focus"
      page_idx: [27]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Центральна заява про цінність Playbook зліва, а праворуч — вузька смуга з переліком типів промптів, оформлених як 'код-снепети'."

    - name: "practice-timeline-rail"
      page_idx: [28]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Основний список завдань на 10 днів зліва, а справа — тонка 'рейка' з очікуваними результатами для кожного етапу."
```
</SPECIAL_PAGE_DESIGN>
