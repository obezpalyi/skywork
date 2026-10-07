# ServiceHub — DevOps Training Package

## Призначення

Цей пакет призначений для треку **DevOps** курсу **AI-assisted Requirements and Change Management in SDLC**. Він навчає використовувати Xplore для аналізу operational requirements, впливу змін на середовища й конфігурації, підготовки observability, deployment і rollback матеріалів та operational-readiness review.

Xplore використовується як засіб analysis і documentation support. Він не виконує production-зміни автономно та не замінює рішення відповідальних інженерів.

Перед початком використайте документ **ServiceHub — Shared Core Training Package**.

## Рольова мета

До завершення треку слухач уміє:

- перетворювати approved requirements і technical design на operational requirements;
- визначати environment, configuration, capacity, security та observability impact;
- готувати deployment і rollback plans;
- оновлювати runbooks за результатами змін та інцидентів;
- формувати release evidence і go/no-go recommendation;
- перевіряти результат Xplore operational checklist.

## Service operations context

### Середовища

| Середовище | Призначення | Особливість |
|---|---|---|
| Development | Інтеграція ранніх змін | Синтетичні дані, спрощені інтеграції |
| Test | Функціональне та інтеграційне тестування | Наближені configuration values |
| Staging | Pre-release validation | Обмежені external integrations |
| Production | Customer-facing service | Progressive delivery, audit and monitoring |

### CI/CD outline

1. Code and IaC changes проходять automated checks.
2. Artifact створюється та versioned.
3. Deployment виконується в Development, Test, Staging, Production.
4. Перед production потрібні release evidence та approval.
5. Feature flags можуть керувати enablement customer-facing flow.
6. Rollback procedure застосовується за заздалегідь визначеними triggers.

### Service catalog fragment

| Service | Owner | Tier | Operational dependency |
|---|---|---|---|
| Ticket Service | Service Delivery Team | Tier 1 | Relational database, Message Broker |
| Customer Profile Service | Customer Platform Team | Tier 1 | CRM Integration |
| SLA and Escalation Service | Service Delivery Team | Tier 1 | Message Broker, clock/time source |
| Notification Service | Communication Platform Team | Tier 2 | Email provider, in-app channel |
| Reporting Service | Data Platform Team | Tier 2 | Reporting database |
| Microsoft Teams integration | Collaboration Team | Tier 2 | Teams API |

## Current observability baseline

### Existing metrics

- HTTP error rate;
- API latency;
- Ticket Service availability;
- message broker queue depth;
- SLA breach count;
- Notification Service failures;
- deployment success rate.

### Existing alerts

- Ticket Service availability below threshold;
- message broker queue depth above threshold;
- Notification Service error rate above threshold;
- SLA breach count above daily threshold.

### Known gaps

- Немає бізнесової метрики для Critical Service Request.
- Alert threshold для SLA не узгоджений із critical SLA.
- Rollback procedure не враховує data migration.
- Runbook не описує feature-flag rollback.
- Configuration відрізняється між середовищами без пояснення.
- Ownership matrix частково застаріла.
- Post-deployment checks неповні.
- Incident postmortem містить невиконаний action item.

## Сесія OPS-1 — Requirement → Operational Requirements

### Завдання

Використайте canonical requirements і service catalog, щоб сформувати operational requirements report для Critical Service Request.

### Робочий workflow в Xplore

1. Витягніть вимоги, що мають environment, configuration, monitoring, deployment або incident implications.
2. Розділіть confirmed requirements, assumptions і operational questions.
3. Визначте service owners і потрібні handoffs.
4. Сформуйте operational acceptance criteria.
5. Проведіть human review перед затвердженням висновків.

### Шаблон operational requirements report

| ID | Operational requirement / question | Evidence | Owner | Status |
|---|---|---|---|---|
| OR-01 | N/A | N/A | N/A | Open |

### Обов’язкові напрями аналізу

- service ownership;
- environment configuration;
- secrets і endpoints;
- feature-flag operational controls;
- capacity and performance;
- metrics, logs, traces, dashboards;
- alerts and escalation;
- release gates;
- rollback triggers;
- support and incident procedures.

## Сесія OPS-2 — Change Request → Operational Impact

### Завдання

Проаналізуйте CR-014 з погляду topology, configuration, observability і capacity.

### Шаблон operational impact matrix

| Area | Поточний стан | Потрібна зміна | Ризик | Owner | Evidence / action |
|---|---|---|---|---|---|
| Environments | N/A | N/A | N/A | N/A | N/A |
| Configuration | N/A | N/A | N/A | N/A | N/A |
| Secrets / endpoints | N/A | N/A | N/A | N/A | N/A |
| IaC | N/A | N/A | N/A | N/A | N/A |
| Metrics | N/A | N/A | N/A | N/A | N/A |
| Alerts | N/A | N/A | N/A | N/A | N/A |
| Dashboards | N/A | N/A | N/A | N/A | N/A |
| Capacity | N/A | N/A | N/A | N/A | N/A |
| Runbook | N/A | N/A | N/A | N/A | N/A |

### Observability change list

Підготуйте change list щонайменше для таких сигналів:

| Signal | Purpose | Source | Indicative threshold / condition | Response owner |
|---|---|---|---|---|
| Critical request created | Відстежити adoption та volume | Ticket Service event | N/A | Support Manager |
| Critical SLA at risk | Виявити ризик до breach | SLA and Escalation Service | Погоджується зі SLA policy | Support Manager |
| Critical SLA breached | Підтвердити operational failure | SLA and Escalation Service | Any breach | Support Manager |
| Escalation event delivery failure | Захистити notification path | Message broker / Notification Service | Defined retry exhaustion | Communication Platform Team |
| Feature flag enablement | Контролювати rollout | Feature-flag audit log | Any change | Service Delivery Team |

### Питання, які не можна пропускати

- Чи всі середовища мають потрібні configuration values?
- Чи зберігаються secrets безпечно?
- Чи узгоджені alert thresholds із business SLA?
- Чи відрізняється production traffic profile?
- Чи є ознаки деградації, які вимагають rollback?
- Чи може change спрацювати частково через unavailable integration?
- Чи достатньо logs і traces для triage incident?

## Сесія OPS-3 — Approved Change → Deployment and Rollback Plan

### Approved technical design assumptions

- Critical flow керується feature flag.
- API і database change виконуються backward-compatible.
- Escalation history додається через versioned schema migration.
- Notification retry має обмежену кількість спроб і terminal failure event.
- Rollout відбувається поетапно для погодженої customer cohort.

### Шаблон deployment plan

| Етап | Дія | Передумови | Validation evidence | Owner | Stop / rollback trigger |
|---|---|---|---|---|---|
| 1 | N/A | N/A | N/A | N/A | N/A |

### Шаблон rollback plan

| Trigger | Decision owner | Rollback action | Data consideration | Verification |
|---|---|---|---|---|
| N/A | N/A | N/A | N/A | N/A |

### Release checklist

- IaC і configuration changes reviewed;
- feature flag має owner, enablement scope і removal plan;
- schema migration перевірена на compatibility;
- dashboards і alerts доступні до enablement;
- on-call ownership підтверджено;
- release communication prepared;
- rollback plan погоджено;
- post-deployment checks визначено;
- residual risks accepted відповідальним owner.

## Сесія OPS-4 — Release or Incident → Updated Operations Pack

### Нове обмеження

Microsoft Teams integration не готова, а release має керуватися feature flag із можливістю швидкого rollback.

### Incident context

Під час попереднього релізу email notifications затримувалися через накопичення повідомлень у черзі. Postmortem містив action item: «додати alert на delay critical notifications», але він не був виконаний.

### Завдання

1. Оцініть release impact за новим обмеженням.
2. Визначте, які notification expectations змінюються тимчасово.
3. Оновіть monitoring, alerts і dashboard requirements.
4. Доповніть runbook діями для feature-flag rollback.
5. Оновіть deployment/rollback plans.
6. Сформуйте go/no-go recommendation із evidence.

### Шаблон go/no-go recommendation

| Area | Статус | Evidence | Risk / mitigation | Owner |
|---|---|---|---|---|
| Configuration ready | N/A | N/A | N/A | N/A |
| Migration ready | N/A | N/A | N/A | N/A |
| Observability ready | N/A | N/A | N/A | N/A |
| On-call ready | N/A | N/A | N/A | N/A |
| Rollback ready | N/A | N/A | N/A | N/A |
| Known gaps accepted | N/A | N/A | N/A | N/A |

## DevOps Capstone

### Ситуація

Approved technical design додає регіональні SLA для Critical Service Request. Service calendar визначається за contract region. Microsoft Teams integration недоступна в момент релізу; перший rollout має відбутися через feature flag для обмеженої customer cohort.

### Виконайте

1. Сформуйте operational requirements.
2. Проведіть environment і configuration impact analysis.
3. Спроєктуйте metrics, alerts і dashboard changes.
4. Підготуйте deployment plan.
5. Підготуйте rollback plan.
6. Оновіть runbook із incident lessons.
7. Сформуйте go/no-go evidence.

### Фінальні артефакти DevOps

- operational requirements report;
- operational impact matrix;
- observability change list;
- deployment plan;
- rollback plan;
- updated runbook;
- release-readiness checklist;
- go/no-go recommendation;
- DevOps AI Playbook.

## DevOps AI Playbook

Додайте у власний playbook повторно придатні patterns:

- extraction operational implications from requirements;
- конфігураційний і environment impact review;
- observability gap analysis;
- draft deployment and rollback plan;
- runbook review після change або incident;
- comparison release baseline;
- preparation of go/no-go evidence;
- перевірка completeness operational handoff.

## Самоперевірка

- Operational requirements відокремлені від непідтверджених припущень?
- Є owner для кожного критичного change або ризику?
- Monitoring покриває customer impact, а не лише технічну доступність?
- Alert thresholds мають зв’язок із SLA?
- Deployment plan містить preconditions, evidence і stop criteria?
- Rollback враховує data migration і feature flag?
- Runbook містить дії для triage, escalation та rollback?
- Go/no-go висновок містить чіткі докази й відомі ризики?
