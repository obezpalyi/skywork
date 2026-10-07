<GLOBAL_DESIGN>
1. Topic Understanding
Ця презентація має на меті демістифікувати поняття штучного інтелекту для учнів 11 класу, переходячи від науково-фантастичних уявлень до технічної реальності: математичних моделей, великих даних та алгоритмів. Основний фокус — на розумінні ШІ як інструменту аналізу та генерації, а не як свідомої істоти.

2. Target Audience
Учні 11 класу (16-17 років), які вивчають інформатику. Вони мають базові знання про алгоритми та дані, є активними користувачами сучасних технологій, але потребують критичного підходу до розуміння механізмів роботи нейромереж та етики їх використання.

3. Tone and Language
Тон презентації — аналітичний, чіткий та пізнавальний. Мова має бути сучасною, але технічно грамотною (використання термінів "модель", "навчання", "прогнозування"). Стиль — структурований освітній бріфінг.

4. Theme Archetype
```yaml
theme_archetype:
  name: "tech-lab-manual"
  rationale: "Цей архетип імітує структуру технічного посібника або лабораторного журналу. Він підкреслює науковий підхід до теми ШІ, використовуючи чітку ієрархію, акцентні лінії та технічну типографіку, що ідеально підходить для уроку інформатики."
  visual_keywords: ["структурований", "технологічний", "аналітичний", "сітковий"]
  avoid_archetypes: ["generic dark dashboard", "product-launch-showcase"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --ppt-bg: #F8FAFC;
  --ppt-bg-soft: #F1F5F9;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E2E8F0;
  --ppt-border: #CBD5E1;
  --ppt-text-1: #0F172A;
  --ppt-text-2: #475569;
  --ppt-text-3: #64748B;
  --ppt-accent: #0D9488;
  --ppt-accent-2: #0891B2;
  --ppt-chart-1: #0D9488;
  --ppt-chart-2: #0891B2;
  --ppt-chart-3: #4F46E5;
  --ppt-chart-4: #7C3AED;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 6px;
  --ppt-radius-lg: 10px;
  --ppt-shadow-soft: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --ppt-shadow-strong: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --ppt-font-display: "Inter", sans-serif;
  --ppt-font-body: "Inter", sans-serif;
  --ppt-font-mono: "IBM Plex Mono", monospace;
}
```

6. Typography Roles
```yaml
typography_roles:
  density_mode: "compact"
  display_font_family: "var(--ppt-font-display)"
  body_font_family: "var(--ppt-font-body)"
  cover_page_title:
    font_size: "68px"
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
    font_size: "15px"
    font_weight: 400
    line_height: 1.4
  caption:
    font_size: "13px"
    font_weight: 400
    line_height: 1.2
```

7. Cross-Slide Consistent Regions
**Non-Cover-Page Title Region:**
Цей регіон розташований у верхній частині слайда. Він має чіткий технічний маркер (вертикальна лінія акцентного кольору) та незмінний напис "UNIT: ARTIFICIAL INTELLIGENCE", що підкреслює контекст курсу.

```html
<header style="margin-top: 40px; margin-right: 64px; margin-bottom: 32px; margin-left: 64px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="font-family: var(--ppt-font-mono); font-size: 12px; font-weight: 600; color: var(--ppt-accent); text-transform: uppercase; letter-spacing: 0.1em; background: var(--ppt-bg-soft); padding: 4px 8px; border-radius: var(--ppt-radius-sm);">Unit: Artificial Intelligence</span>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 4px; height: 40px; background: var(--ppt-accent); border-radius: 2px;"></div>
    <div style="display: flex; flex-direction: column;">
      <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 34px; font-weight: 800; color: var(--ppt-text-1); line-height: 1.2;">{{title}}</h1>
      <p style="margin: 4px 0 0 0; font-family: var(--ppt-font-body); font-size: 16px; font-weight: 400; color: var(--ppt-text-2);">{{subtitle}}</p>
    </div>
  </div>
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
**Archetype: editorial-report-cover**
- **Title Placement**: Центрально-ліве вирівнювання у верхній третині слайда.
- **Hierarchy**: Заголовок "Що таке AI насправді?" займає домінуючу позицію з використанням `cover_page_title`. Під ним розташовується горизонтальна акцентна лінія товщиною 6px.
- **Subtitle**: Під лінією розміщується підзаголовок про вступ до реалістичного уявлення про ШІ.
- **Metadata Block**: У нижньому лівому куті розміщується блок метаданих (Предмет: Інформатика, 11 клас, 2024). У нижньому правому куті — невеликий логотип школи або технічний символ (наприклад, символ вузла нейромережі).
- **Background**: Світлий нейтральний фон (`--ppt-bg`) з ледь помітним геометричним паттерном у вигляді сітки на фоні.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "30% of non-cover content pages"
    selection_priority:
        - "core argument or key insight pages"
        - "recommendation or next-step pages"
        - "chapter transition or section framing pages"
    rectangle_policy: "Allow compact metric chips, rails, rules, and emphasis bands to support technical hierarchy. Avoid generic boxed grids."

special_open_layout_families:
  - name: "technical-component-breakdown"
    page_idx: [4]
    expression_type: "open_columns_with_weak_rules"
    layout_contract: "Розділіть слайд на три вертикальні колонки (Алгоритм, Дані, Модель), розділені тонкими вертикальними лініями `--ppt-border`. Кожна колонка починається з моноширинного тегу та короткого визначення."

  - name: "limitation-diagnostic"
    page_idx: [7]
    expression_type: "diagnostic_list_with_evidence_rail"
    layout_contract: "Основний список обмежень ШІ розташовується ліворуч, а праворуч — вузька вертикальна панель 'Чому це важливо' з використанням акцентного кольору `--ppt-accent-2` та дрібних анотацій."

  - name: "actionable-ethic-split"
    page_idx: [9]
    expression_type: "concept_action_split"
    layout_contract: "Велике твердження про відповідальність зліва, та три конкретні кроки перевірки результатів у вигляді маркованого списку з іконками-чекбоксами справа."
```
</SPECIAL_PAGE_DESIGN>
