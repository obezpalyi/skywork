# ServiceHub — Trainer Control Package

## Призначення та доступ

Цей пакет призначений лише для тренера програми **AI-assisted Requirements and Change Management in SDLC**. Його не відкривають слухачам до відповідної контрольної точки.

Пакет забезпечує незалежність BA, QA, Developer і DevOps треків: кожна група спочатку виконує рольову вправу самостійно, а далі отримує погоджений canonical handoff artifact для наступної сесії.

## Модель проведення

Для кожного треку використовується однакова послідовність:

1. Видати тільки передбачені вхідні матеріали.
2. Дати слухачам виконати AI-assisted workflow.
3. Провести reviewer/author або груповий review.
4. Зібрати типові прогалини та рішення.
5. Відкрити canonical artifact.
6. Порівняти результат слухачів із контрольним checklist.
7. Перейти до наступної вправи з canonical baseline.

Тренер не оцінює «красу» формулювання. Пріоритетом є:

- коректне використання джерел;
- виявлення невизначеностей;
- професійна логіка ролі;
- traceability;
- повнота impact analysis;
- якість human review;
- оновлення affected artifacts після approval.

## Матриця розкриття матеріалів

| Контрольна точка | Відкрити слухачам | Залишити закритим |
|---|---|---|
| Старт треку | Shared Core + рольовий пакет для сесії 1 | Canonical result, solution key |
| Після сесії 1 | Canonical baseline для сесії 2 | Role-specific solution key |
| Після сесії 2 | Canonical role pack для сесії 3 | Approved decision record до debrief |
| Після сесії 3 | Approved decision + baseline для сесії 4 | Capstone constraints |
| Перед capstone | Capstone input + окреме ускладнення | Rubric і solution key |
| Після capstone | Rubric, discussion prompts, exemplar | N/A |

## Source-of-truth map

| Предмет | Canonical source | Основний owner |
|---|---|---|
| Customer entitlement | Customer Profile Service / CRM policy | Customer Platform Team |
| Product scope | Requirements baseline | Product Owner |
| SLA rules | Approved SLA policy | Support Manager |
| Technical design | Technical design summary та ADR | Technical Owner |
| Test baseline | Canonical QA baseline | QA Lead |
| Release readiness | Operational baseline | DevOps Lead |
| Final approval | Decision record | Designated decision owner |

## Canonical handoff artifact set

### BA → наступна вправа

- canonical requirements pack;
- requirements quality report;
- approved glossary additions;
- canonical Jira backlog fragment;
- functional impact matrix;
- approved decision record;
- updated requirements baseline;
- BA handoff summary.

### QA → наступна вправа

- canonical requirements pack;
- acceptance criteria;
- canonical testability report;
- test pack;
- synthetic test-data plan;
- coverage matrix;
- regression impact report;
- updated QA baseline;
- test-readiness conclusion.

### Developer → наступна вправа

- canonical requirements pack;
- canonical Jira backlog;
- component map;
- technical clarification report;
- implementation plan;
- technical impact matrix;
- approved ADR;
- API/data change notes;
- implementation-readiness conclusion.

### DevOps → наступна вправа

- canonical requirements pack;
- canonical technical design summary;
- operational requirements report;
- operational impact matrix;
- observability change list;
- deployment plan;
- rollback plan;
- updated runbook;
- go/no-go recommendation.

## Очікувані clarification questions

### Business Analyst

- Які договори підтверджують active 24/7 support entitlement?
- Хто може створювати Critical Service Request?
- Яке точне SLA value і як визначається service calendar?
- Хто отримує escalation notifications?
- Які поля й audience має monthly report?
- Як обробляти уже створені заявки?
- Хто погоджує scope для найближчого release?

### Quality Assurance

- Як визначається time-zone source для service calendar?
- Що вважається першою реакцією?
- Які expectations за Notification Service failure?
- Як перевірити збереження escalation history?
- Які permission combinations є дійсними?
- Як поводиться система за зміни entitlement під час відкритої заявки?
- Які business metrics обов’язково мають бути у report?

### Developer

- Де є source of truth для entitlement?
- Як versioned API підтримує `Critical`?
- Який компонент є owner SLA calculation?
- Чи потрібна event schema evolution?
- Яка idempotency rule застосовується до escalation event?
- Чи потрібне historical snapshot з SLA rule?
- Яка migration і rollback strategy погоджена?

### DevOps

- Які конфігурації та feature-flag values потрібні за середовищами?
- Хто відповідає за critical SLA alerts?
- Які conditions запускають rollback?
- Як evidence підтверджує production readiness?
- Чи підготовлені dashboards до ввімкнення feature flag?
- Як контролюється queue delay для critical notifications?
- Які runbook actions потрібні за unavailable Teams integration?

## Intentional inconsistency register

| ID | Матеріал | Суперечність / прогалина | Очікувана поведінка слухача |
|---|---|---|---|
| IC-01 | SLA workshop | 15 або 30 хвилин | Позначити conflict, не обирати значення |
| IC-02 | Customer eligibility | Enterprise plan або 24/7 entitlement | Сформувати clarification question |
| IC-03 | Customer message | «Швидше» без метрики | Запитати measurable outcome |
| IC-04 | Notification flow | Немає failure handling | Виявити role-specific gap |
| IC-05 | Reporting | Невідомий audience і field set | Не генерувати requirements без підтвердження |
| IC-06 | API fragment | Немає `Critical` | Позначити impact, не вигадувати contract |
| IC-07 | Data model | Немає escalation history | Визначити design/migration question |
| IC-08 | Runbook | Немає feature-flag rollback | Оновити operational gap |
| IC-09 | Monitoring | Немає critical business metric | Додати observability requirement |
| IC-10 | Incident postmortem | Action item не виконано | Врахувати як release risk |

## Рольові rubrics

### Загальна шкала

| Рівень | Опис |
|---|---|
| 0 — відсутньо | Артефакт не містить потрібного елемента або містить вигадані факти |
| 1 — частково | Елемент є, але без traceability, owner або повноти |
| 2 — достатньо | Елемент коректний, перевірюваний і має потрібний контекст |
| 3 — сильний результат | Додатково демонструє ризики, dependencies, human-review evidence та якісний handoff |

### BA rubric

Оцініть:

- facts, assumptions і questions separation;
- вимоги та бізнес-правила;
- Jira readiness;
- traceability;
- functional impact;
- decision record;
- baseline update.

### QA rubric

Оцініть:

- testability findings;
- quality test conditions;
- coverage і test data;
- regression impact;
- класифікацію defect/change/clarification;
- readiness conclusion.

### Developer rubric

Оцініть:

- technical clarification;
- component/dependency analysis;
- technical backlog;
- API/data/event impact;
- compatibility/migration analysis;
- ADR;
- implementation readiness.

### DevOps rubric

Оцініть:

- operational requirements;
- configuration and environment impact;
- observability;
- deployment/rollback completeness;
- runbook update;
- evidence-based go/no-go conclusion.

## Canonical solution boundary

Під час debrief тренер може показати preferred solution, але має приймати альтернативне рішення, якщо воно:

- не суперечить погодженим facts;
- фіксує відсутню інформацію як question або assumption;
- визначає відповідного owner;
- має traceability;
- враховує рольові dependencies;
- містить достатній human-review mechanism.

Не варто вимагати від слухачів однакових prompt formulations або дослівно однакової структури. Оцінюється результат роботи, а не формулювання запиту до Xplore.

## Capstone control cards

### BA

**Ускладнення:** замовник змінює визначення priority customer після попереднього approval.

Очікуваний результат: оновлений requirements baseline, impact matrix, decision record і BA handoff.

### QA

**Ускладнення:** critical requests мають працювати в кількох часових поясах, але acceptance criteria не оновлені.

Очікуваний результат: testability questions, updated test conditions, regression impact і readiness conclusion.

### Developer

**Ускладнення:** API-поля мають бути backward-compatible, а database change — виконуватися без downtime.

Очікуваний результат: technical impact matrix, implementation plan, compatibility/migration checklist, ADR і readiness conclusion.

### DevOps

**Ускладнення:** Microsoft Teams integration не готова; release має керуватися feature flag із можливістю швидкого rollback.

Очікуваний результат: observability changes, deployment/rollback plans, runbook update і go/no-go recommendation.

## Самостійна практика після занять

Після рольових сесій відкрийте учасникам будь-який із додаткових change requests:

- corporate SSO;
- attachment size increase;
- attachment retention policy;
- Microsoft Teams notifications;
- SLA dashboard;
- subsidiary access;
- SLA by region and time zone;
- bulk ticket update;
- audit export;
- external API rate limiting.

Для кожного сценарію видайте:

1. коротку customer/change card;
2. рольові питання;
3. очікуваний output type;
4. self-review checklist;
5. canonical answer лише після самоперевірки.

## Онлайн-тест і сертифікат

Після 10 робочих днів самостійної практики слухачі проходять онлайн-тест:

- 30 запитань;
- 45 хвилин;
- 10 спільних питань про AI-assisted workflows, якість джерел, невизначеність і human review;
- 20 рольових питань;
- прохідний результат — 75%;
- одна повторна спроба доступна протягом 5 робочих днів.

Тест перевіряє практичну логіку курсу, а не запам’ятовування деталей ServiceHub. Після успішного тестування слухач отримує сертифікат як додатковий бонус за практичне опанування Xplore у межах своєї професійної ролі.
