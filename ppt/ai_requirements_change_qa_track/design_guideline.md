<GLOBAL_DESIGN>
1. Topic Understanding
The presentation serves as a specialized training module for Quality Assurance professionals within the "AI-assisted Requirements and Change Management" course. It focuses on integrating AI (specifically Xplore) into QA workflows using the ServiceHub project as a case study. The content bridges the gap between static requirements and dynamic AI-assisted testing strategies, covering analysis, test design, change impact, and final release readiness.

2. Target Audience
QA Engineers, Test Leads, and Quality Analysts who are transitioning into AI-enhanced SDLC environments. They possess technical knowledge of testing but require a structured methodology to leverage LLMs for requirements analysis, test data generation, and regression planning without compromising quality standards.

3. Tone and Language
The tone is professional, methodological, and instructional. It uses precise technical Ukrainian (e.g., "простежуваність," "матриця покриття," "регресійний обсяг"). The language is persuasive regarding the efficiency of AI while remaining cautious and evidence-based regarding quality outcomes.

4. Theme Archetype
```yaml
theme_archetype:
  name: "qa-engineering-blueprint"
  rationale: "This archetype mirrors the precision of technical documentation and engineering blueprints. It uses a structured grid, clear visual hierarchy, and a professional teal-accented palette to convey reliability and methodical rigor, moving away from generic corporate blue."
  visual_keywords: ["methodical", "precise", "structured", "technical"]
  avoid_archetypes: ["generic dark dashboard", "playful educational", "abstract marketing"]
```

5. Base CSS Theme
base_css_theme:
```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@400;500;600&display=swap");

:root {
  --ppt-bg: #F8FAFC;
  --ppt-bg-soft: #F1F5F9;
  --ppt-surface: #FFFFFF;
  --ppt-surface-2: #E2E8F0;
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
  --ppt-radius-md: 4px;
  --ppt-radius-lg: 8px;
  --ppt-shadow-soft: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  --ppt-shadow-strong: 0 10px 15px -3px rgb(0 0 0 / 0.1);
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
    line_height: 1.5
  non_cover_page_title:
    font_size: "34px"
    font_weight: 800
    line_height: 1.2
  section_title:
    font_size: "28px"
    font_weight: 700
    line_height: 1.3
  accent_text:
    font_size: "22px"
    font_weight: 600
    line_height: 1.4
  body_text:
    font_size: "17px"
    font_weight: 400
    line_height: 1.5
  annotation:
    font_size: "14px"
    font_weight: 500
    line_height: 1.4
  caption:
    font_size: "12px"
    font_weight: 400
    line_height: 1.3
```

7. Cross-Slide Consistent Regions
**Non-Cover-Page Title Region**
- Position: Top-aligned, spanning the full width between margins.
- Spacing: Fixed margins to create a consistent "safe zone" for technical content.
- Styling: Minimalist left-rail accent bar in `--ppt-accent` paired with a fixed eyebrow label.

```html
<header style="
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-left: 64px;
  margin-right: 64px;
  margin-bottom: 40px;
">
  <div style="
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  ">
    <div style="
      width: 4px;
      height: 16px;
      background-color: var(--ppt-accent);
    "></div>
    <span style="
      font-family: var(--ppt-font-display);
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--ppt-accent);
    ">SERVICEHUB QA TRACK</span>
  </div>
  <h1 style="
    font-family: var(--ppt-font-display);
    font-size: 34px;
    font-weight: 800;
    color: var(--ppt-text-1);
    margin: 0;
    line-height: 1.2;
  ">{{title}}</h1>
  {{#subtitle}}
  <h2 style="
    font-family: var(--ppt-font-body);
    font-size: 18px;
    font-weight: 500;
    color: var(--ppt-text-2);
    margin-top: 4px;
  ">{{subtitle}}</h2>
  {{/subtitle}}
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
- Archetype: `editorial-report-cover`.
- Composition:
    - The top 20% of the slide is reserved for a clean, subtle grid background or a light `--ppt-bg-soft` tint.
    - The title is placed in the center-left, occupying the middle band of the slide.
    - Title: Large, bold text using `cover_page_title` in `--ppt-text-1`.
    - Subtitle: Positioned directly below the title, using `cover_page_subtitle` in `--ppt-accent`, emphasizing the "QA Track" aspect.
    - Metadata: A small, high-contrast block at the bottom-left containing the course name "AI-assisted Requirements and Change Management" and the specific project "ServiceHub".
    - A single, thick vertical line (8px width) in `--ppt-accent` runs from the top margin to the title block, acting as a visual anchor.
</COVER_DESIGN>

<SPECIAL_PAGE_DESIGN>
9. Special Open Body Layouts
```yaml
special_open_layout_policy:
    enabled: true
    max_pages: "7 slides (approx. 25% of the 29-slide deck)"
    selection_priority:
        - "chapter transition or section framing pages"
        - "core argument or key insight pages"
        - "summary or conclusion pages"
        - "recommendation or next-step pages"
    rectangle_policy: "Avoid card grids. Prioritize editorial columns, numbered rails, and large keyword anchors. Use weak rules (--ppt-border) for separation."

special_open_layout_families:
    - name: "training-route-flow"
      page_idx: [3]
      expression_type: "numbered_argument_flow"
      layout_contract: "Use a fixed left rail with large, semi-transparent numbers (1-4) in --ppt-accent-2, paired with right-side blocks for each session's focus and final artifacts."

    - name: "requirement-criteria-grid"
      page_idx: [5]
      expression_type: "open_columns_with_weak_rules"
      layout_contract: "Three open columns separated by thin vertical rules, focusing on 'Roles', 'States', and 'Triggers' as the primary technical headers."

    - name: "workflow-diagnostic"
      page_idx: [7, 12, 17, 23]
      expression_type: "diagnostic_list_with_evidence_rail"
      layout_contract: "A dominant left-side list of workflow steps paired with a narrow right-side 'AI Checkpoint' rail using weak rules and small teal icon markers."

    - name: "capstone-hero"
      page_idx: [25]
      expression_type: "large_stat_or_keyword_anchor"
      layout_contract: "A massive 'QA CAPSTONE' keyword anchor on the left, with the detailed project requirements and objectives flowing in a single column on the right."

    - name: "practice-plan-summary"
      page_idx: [28]
      expression_type: "focus_statement_with_evidence_strip"
      layout_contract: "A large central statement regarding the '10-day practice' goals, supported by a horizontal bottom strip of four metric chips showing daily time commitments and key milestones."
```
</SPECIAL_PAGE_DESIGN>
