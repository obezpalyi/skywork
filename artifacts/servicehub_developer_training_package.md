# ServiceHub — Developer Training Package

## Призначення

Цей пакет призначений для треку **Developer** курсу **AI-assisted Requirements and Change Management in SDLC**. Він навчає застосовувати Xplore для technical clarification, декомпозиції реалізації, аналізу component impact, підготовки implementation plan та technical readiness review.

Курс не є курсом із генерації коду. Мета — прискорити роботу з вимогами та змінами до початку реалізації, зберігаючи інженерну відповідальність за рішення.

Перед початком використайте документ **ServiceHub — Shared Core Training Package**.

## Рольова мета

До завершення треку слухач уміє:

- перетворювати бізнесову вимогу на технічні питання;
- встановлювати affected components, contracts і dependencies;
- декомпозувати реалізацію на delivery-ready technical tasks;
- описувати API, data та event changes;
- аналізувати backward compatibility, migration і feature flag;
- оновлювати ADR та technical baseline після approved change;
- формувати implementation-readiness conclusion.

## Architecture package

### Компоненти

| Компонент | Поточна відповідальність |
|---|---|
| Web Portal | UI для створення та відстеження заявок |
| API Gateway | Authentication, routing, rate handling |
| Ticket Service | Створення, оновлення, lifecycle заявок |
| Customer Profile Service | Дані клієнта, entitlement, profile attributes |
| SLA and Escalation Service | SLA timers, escalation events |
| Notification Service | Email та in-app notifications |
| Reporting Service | Операційні й управлінські звіти |
| Audit Service | Історія дій і ключових подій |
| Message Broker | Асинхронне передавання доменних подій |
| CRM Integration | Синхронізація частини customer data |

### Поточний sequence

1. Web Portal надсилає `POST /tickets`.
2. Ticket Service перевіряє customer context через Customer Profile Service.
3. Ticket Service зберігає ticket.
4. Ticket Service публікує `ticket.created`.
5. SLA and Escalation Service реєструє SLA timer.
6. Notification Service надсилає стандартне створення-заявки notification.
7. Audit Service реєструє event.

## Technical source fragments

### OpenAPI fragment: current request model

```json
{
  "category": "string",
  "productId": "string",
  "priority": "Low | Normal | High",
  "description": "string",
  "attachments": [
    {
      "id": "string"
    }
  ]
}
```

### Current ticket record

```text
ticket_id
customer_id
requester_id
category
product_id
priority
status
description
created_at
first_response_at
sla_due_at
assigned_agent_id
```

### Event catalog fragment

| Event | Producer | Consumer | Поточний зміст |
|---|---|---|---|
| `ticket.created` | Ticket Service | SLA and Escalation Service, Audit Service | ticket ID, customer ID, priority |
| `ticket.updated` | Ticket Service | Audit Service, Reporting Service | ticket ID, status |
| `sla.breached` | SLA and Escalation Service | Notification Service, Audit Service | ticket ID, breach type |

### Feature-flag policy fragment

- Усі нові customer-facing flows мають бути керованими feature flag.
- Для кожного flag потрібні owner, intended scope, enablement plan, rollback plan і removal date.
- Flag не має приховувати data migration failure.
- У production enablement повинен бути audit-able.

## Навмисні технічні проблеми

- API contract не містить priority type `Critical`.
- Data model не підтримує escalation history.
- Не визначено idempotency rule для повторної escalation event.
- Notification contract не описує failure handling.
- ADR не містить обґрунтування sync versus async escalation.
- Component ownership частково застарілий.
- Migration strategy відсутня.
- Feature-flag lifecycle не визначений.
- Technical tasks не мають dependency list.
- Частина acceptance criteria суперечить compatibility constraint.

## Сесія DEV-1 — Requirement → Technical Clarification

### Завдання

Використайте canonical requirements для Critical Service Request і system context, щоб створити technical clarification report.

### Робочий workflow в Xplore

1. Витягніть факти, що прямо впливають на architecture, contracts і data.
2. Сформуйте technical questions за категоріями: API, data, events, integration, security, performance, operations.
3. Визначте питання, які потребують рішення Product Owner, Architect, Security або DevOps.
4. Не перетворюйте припущення на design decision.
5. Проведіть human review із технічним checklist.

### Шаблон technical clarification report

| ID | Категорія | Питання / прогалина | Наслідок | Owner | Статус |
|---|---|---|---|---|---|
| TC-01 | API | N/A | N/A | N/A | Open |

### Технічні питання для старту

- Де є source of truth для active 24/7 support entitlement?
- Чи має `priority=Critical` бути новим enum value чи окремою характеристикою?
- Чи потрібне окреме поле `criticalReason`?
- Хто обчислює service calendar та time-zone?
- Яка подія запускає escalation?
- Як уникнути дублювання notifications під час повторної доставки події?
- Як зберігається escalation history?
- Як забезпечується backward compatibility для existing clients?
- Чи потребують historical reports додаткового snapshot даних?

## Сесія DEV-2 — Requirement → Implementation Plan

### Завдання

Після отримання погоджених технічних рішень підготуйте implementation plan та technical backlog.

### Мінімальний scope design

| Область | Очікуваний напрям |
|---|---|
| API | Додати підтримку `Critical` без порушення поточних клієнтів |
| Data | Зберігати reason, entitlement evidence та escalation history |
| Ticket lifecycle | Позначати critical state і події lifecycle |
| SLA | Створювати окремий SLA timer за погодженим service calendar |
| Events | Публікувати явну escalation event з idempotency strategy |
| Notifications | Обробляти success, retry та terminal failure |
| Reporting | Додати critical-request metrics |
| Feature flag | Обмежити enablement погодженою customer cohort |

### Шаблон implementation plan

| Work item | Components | Залежності | Ризики | Definition of Done |
|---|---|---|---|---|
| N/A | N/A | N/A | N/A | N/A |

### Technical backlog rule

Кожна технічна задача має містити:

- purpose і traceability до requirement;
- affected components;
- API/data/event changes;
- dependencies;
- implementation notes;
- compatibility impact;
- тестові та operational handoff criteria;
- Definition of Done.

### ADR template

| Поле | Вміст |
|---|---|
| ADR ID | N/A |
| Context | N/A |
| Decision | N/A |
| Options considered | N/A |
| Consequences | N/A |
| Compatibility impact | N/A |
| Operational implications | N/A |
| Decision owner | N/A |
| Status | N/A |

## Сесія DEV-3 — Change Request → Technical Impact Analysis

### Baseline comparison

- **v1.0:** priority customer = будь-який enterprise customer.
- **v1.1:** priority customer = customer з активним 24/7 support entitlement.
- **Нове обмеження:** API-поля мають бути backward-compatible, а database change має виконуватися без downtime.

### Завдання

1. Визначте affected components і ownership.
2. Проаналізуйте API, data, events, integrations і reporting.
3. Оцініть compatibility, migration та feature-flag impact.
4. Сформуйте solution options для sync versus async escalation.
5. Підготуйте technical impact matrix.

### Шаблон technical impact matrix

| Area | Поточний стан | Потрібна зміна | Risk | Owner | Decision / action |
|---|---|---|---|---|---|
| API Gateway | N/A | N/A | N/A | N/A | N/A |
| Ticket Service | N/A | N/A | N/A | N/A | N/A |
| Customer Profile Service | N/A | N/A | N/A | N/A | N/A |
| SLA and Escalation Service | N/A | N/A | N/A | N/A | N/A |
| Notification Service | N/A | N/A | N/A | N/A | N/A |
| Reporting Service | N/A | N/A | N/A | N/A | N/A |
| Data model | N/A | N/A | N/A | N/A | N/A |
| Message Broker | N/A | N/A | N/A | N/A | N/A |

### Compatibility and migration checklist

- Чи сприймуть older API clients нове значення priority?
- Чи є default behavior для клієнтів без feature enablement?
- Чи є schema migration backward-compatible?
- Чи можлива staged rollout?
- Чи є idempotency для events і retries?
- Чи може partial deploy пошкодити data integrity?
- Чи доступний rollback без втрати history?
- Чи потрібна versioned event schema?

## Сесія DEV-4 — Approved Change → Updated Technical Pack

### Завдання

Після approval підготуйте updated technical pack:

1. Оновіть implementation plan.
2. Уточніть technical backlog.
3. Додайте API та data change notes.
4. Зафіксуйте ADR.
5. Оновіть compatibility and migration checklist.
6. Додайте handoff criteria для QA та DevOps.
7. Сформуйте implementation-readiness conclusion.

### Шаблон implementation-readiness conclusion

| Перевірка | Статус | Evidence / gap | Owner |
|---|---|---|---|
| Technical questions resolved | N/A | N/A | N/A |
| Components and ownership confirmed | N/A | N/A | N/A |
| API/data design reviewed | N/A | N/A | N/A |
| Compatibility covered | N/A | N/A | N/A |
| Migration planned | N/A | N/A | N/A |
| Feature flag defined | N/A | N/A | N/A |
| QA/DevOps handoff ready | N/A | N/A | N/A |

## Developer Capstone

### Ситуація

Для Critical Service Request необхідно додати регіональні SLA. Нові API-поля мають бути backward-compatible, а database change — виконуватися без downtime. Historical reports мають пояснювати SLA rule, що діяв на момент створення заявки.

### Виконайте

1. Сформуйте technical clarification questions.
2. Визначте affected components.
3. Підготуйте implementation plan.
4. Опишіть API, data та event changes.
5. Проаналізуйте compatibility і migration.
6. Оновіть ADR.
7. Проведіть implementation-readiness review.

### Фінальні артефакти Developer

- technical clarification report;
- component impact map;
- implementation plan;
- technical backlog;
- API and data change notes;
- compatibility and migration checklist;
- ADR;
- implementation-readiness conclusion;
- Developer AI Playbook.

## Developer AI Playbook

Додайте у власний playbook повторно придатні patterns:

- technical clarification із маркуванням unknowns;
- analysis компонентів і залежностей;
- декомпозиція requirement у technical work items;
- comparison API/data baseline;
- impact analysis для change request;
- compatibility and migration review;
- ADR draft із альтернативами та наслідками;
- implementation-readiness review.

## Самоперевірка

- Усі technical decisions мають owner і статус?
- Усі requirements мають traceability до technical tasks?
- Виявлені API, data, event та integration impacts?
- Compatibility і migration розглянуті окремо?
- Feature flag має lifecycle і rollback intent?
- Handoff містить достатні критерії для QA та DevOps?
- Висновок readiness базується на evidence, а не на припущеннях?
