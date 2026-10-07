<GLOBAL_DESIGN>
1. Topic Understanding
Презентація присвячена критичному аналізу феномену «галюцинацій» штучного інтелекту. Мета — навчити учнів 11 класу розпізнавати помилки генеративних моделей, розуміти причини їх виникнення та застосовувати конкретні алгоритми верифікації інформації.

2. Target Audience
Учні 11 класу (16-17 років). Вони є активними користувачами чат-ботів, мають базові знання з інформатики, але потребують розвитку навичок медіаграмотності та критичного ставлення до відповідей ШІ.

3. Tone and Language
Тон аналітичний, сучасний та практично-орієнтований. Використовується термінологія «цифрової криміналістики» та дослідницького підходу. Мова українська, чітка, без зайвого академізму.

4. Theme Archetype
```yaml
theme_archetype:
  name: "digital-forensics-lab"
  rationale: "Оскільки тема стосується пошуку помилок та перевірки фактів, візуальний стиль має нагадувати інтерфейс дослідницької лабораторії або систему аналізу даних. Це підкреслює необхідність критичного розслідування кожного твердження ШІ."
  visual_keywords: ["технологічний", "структурований", "аналітичний", "верифікація"]
  avoid_archetypes: ["generic blue business", "playful education", "minimalist white"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap");

:root {
  --ppt-bg: #0F172A;
  --ppt-bg-soft: #1E293B;
  --ppt-surface: #334155;
  --ppt-surface-2: #475569;
  --ppt-border: #38BDF8;
  --ppt-text-1: #F8FAFC;
  --ppt-text-2: #CBD5E1;
  --ppt-text-3: #94A3B8;
  --ppt-accent: #38BDF8;
  --ppt-accent-2: #818CF8;
  --ppt-chart-1: #38BDF8;
  --ppt-chart-2: #818CF8;
  --ppt-chart-3: #2DD4BF;
  --ppt-chart-4: #F472B6;
  --ppt-good: #10B981;
  --ppt-warn: #F59E0B;
  --ppt-bad: #EF4444;
  --ppt-radius-sm: 2px;
  --ppt-radius-md: 4px;
  --ppt-radius-lg: 8px;
  --ppt-shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --ppt-shadow-strong: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  --ppt-font-display: "Space Grotesk", sans-serif;
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
    font_size: "72px"
    font_weight: 700
    line_height: 1.05
  cover_page_subtitle:
    font_size: "28px"
    font_weight: 500
    line_height: 1.3
  cover_metadata:
    font_size: "16px"
    font_weight: 500
    line_height: 1.4
  non_cover_page_title:
    font_size: "34px"
    font_weight: 700
    line_height: 1.2
  section_title:
    font_size: "28px"
    font_weight: 600
    line_height: 1.25
  accent_text:
    font_size: "24px"
    font_weight: 600
    line_height: 1.3
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
Усі контентні слайди мають уніфіковану зону заголовка, що відокремлює навігаційний контекст від робочої області.

Non-Cover-Page Title Region:
```html
<div style="margin-top: 48px; margin-left: 64px; margin-right: 64px; margin-bottom: 32px; display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <span style="font-family: var(--ppt-font-display); font-size: 14px; font-weight: 700; color: var(--ppt-accent); text-transform: uppercase; letter-spacing: 0.1em; background: rgba(56, 189, 248, 0.1); padding: 4px 8px; border-radius: var(--ppt-radius-sm);">Критичне мислення & ШІ</span>
    <div style="height: 1px; flex-grow: 1; background: var(--ppt-surface);"></div>
  </div>
  <h1 style="margin: 0; font-family: var(--ppt-font-display); font-size: 34px; font-weight: 700; color: var(--ppt-text-1); line-height: 1.2;">{{title}}</h1>
  <p style="margin: 0; font-family: var(--ppt-font-body); font-size: 18px; font-weight: 400; color: var(--ppt-text-2);">{{subtitle}}</p>
</div>
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
Обрано архетип `editorial-report-cover`. Основний акцент робиться на типографіці заголовка, розміщеного по лівому краю, що створює відчуття технічного звіту або наукової публікації.

- **Title Placement:** Великий заголовок "AI hallucinations" розташований у верхній лівій частині (margin-left: 64px, margin-top: 120px).
- **Hierarchy:**
  - Назва уроку (H1) є домінуючим елементом.
  - Підзаголовок "Як не стати жертвою алгоритмічної уяви" розміщується безпосередньо під назвою з відступом 24px, використовуючи `--ppt-accent`.
- **Metadata:** У нижній лівій частині (bottom: 64px, left: 64px) розміщується блок з інформацією: "Інформатика, 11 клас", "Модуль: Штучний інтелект".
- **Visual Rhythm:** Використання великого вільного простору праворуч для балансування масивного текстового блоку зліва. Колірна схема базується на `--ppt-bg` та акцентному `--ppt-accent`.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "30% (3 слайди для 10-сторінкової презентації)"
    selection_priority:
        - "core argument or key insight pages"
        - "recommendation or next-step pages"
    rectangle_policy: "Уникати громіздких карток. Використовувати відкриті колонки, тонкі розділювальні лінії та акцентні цифри для створення ритму."

special_open_layout_families:
    - name: "red-flags-flow"
      page_idx: [5]
      expression_type: "numbered_argument_flow"
      layout_contract: "Використовувати вертикальний список із чотирьох пунктів, де кожен пункт має великий порядковий номер у лівій рейці (колір --ppt-warn) та детальний опис ознаки помилки праворуч."

    - name: "source-hierarchy-diagnostic"
      page_idx: [8]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "Розділити слайд на дві нерівні частини: зліва відкритий список рівнів надійності джерел, справа — вузька вертикальна панель із прикладами 'слабких' джерел для контрасту."

    - name: "summary-action-focus"
      page_idx: [10]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "Домінантне підсумкове твердження у лівій частині слайда, доповнене горизонтальною смугою з трьох компактних блоків домашнього завдання у нижній частині."
```
</SPECIAL_PAGE_DESIGN>
