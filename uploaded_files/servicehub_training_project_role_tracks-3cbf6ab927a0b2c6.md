# Навчальний проєкт ServiceHub

Навчальний проєкт для курсу **AI-assisted Requirements and Change Management in SDLC** з окремими треками для Business Analyst, QA, Developer та DevOps спеціалістів.

## 1. Висновок щодо придатності проєкту

ServiceHub залишається придатним навчальним проєктом після розділення курсу на рольові треки.

Предметна область містить:

- бізнес-процеси та правила для BA;
- достатню кількість функціональних, інтеграційних і нефункціональних сценаріїв для QA;
- API, компоненти, дані, інтеграції та технічні залежності для Developer;
- середовища, deployment, monitoring, configuration та incident context для DevOps.

Змінювати основну предметну область або головний change request не потрібно. Потрібно змінити **структуру навчального пакета та спосіб проведення проєкту**:

1. додати окремий Developer package;
2. створити чотири рольові версії матеріалів;
3. замінити спільний capstone чотирма незалежними рольовими capstones;
4. додати canonical handoff-артефакти;
5. прибрати залежність однієї навчальної групи від результатів іншої;
6. розширити основний change request технічними й операційними наслідками.

## 2. Опис продукту

**ServiceHub** — B2B-портал управління сервісними запитами корпоративних клієнтів.

Система дозволяє:

1. авторизувати користувачів і управляти ролями;
2. створювати сервісні запити;
3. обирати категорію, продукт і пріоритет;
4. додавати опис, коментарі та вкладення;
5. відстежувати статус;
6. призначати заявку спеціалісту підтримки;
7. контролювати SLA;
8. надсилати email-сповіщення;
9. ескалювати прострочені заявки;
10. формувати звіти;
11. інтегруватися з CRM і системою сповіщень;
12. вести audit log;
13. підтримувати monitoring, alerting та операційний runbook.

## 3. Вихідний стан

На початку навчання:

- ServiceHub 1.4 працює у production;
- декілька корпоративних клієнтів використовують різні SLA;
- частина вимог описана у специфікації;
- частина рішень збереглася тільки в протоколах і листуванні;
- Jira backlog містить задачі різної якості;
- API documentation частково не відповідає поточній реалізації;
- тестова документація містить застарілі сценарії;
- deployment guide і runbook оновлювалися нерегулярно;
- monitoring не повністю покриває бізнес-критичні процеси;
- architecture decision log містить прогалини;
- новий change request сформульований мовою замовника й не має повного impact analysis.

## 4. Основний change request

### Critical Service Request

Початкове повідомлення замовника:

> Нам необхідно, щоб пріоритетні клієнти могли створювати критичні заявки. Такі заявки мають оброблятися швидше, автоматично ескалюватися та бути видимими відповідальним менеджерам. Бажано реалізувати це до наступного релізу.

### Початково невизначені бізнесові питання

- хто є пріоритетним клієнтом;
- хто може створити критичну заявку;
- чи потрібне підтвердження;
- який SLA застосовується;
- що означає автоматична ескалація;
- хто отримує сповіщення;
- що відбувається поза робочим часом;
- чи потрібні нові звіти;
- як обробляються вже створені заявки;
- чи входить зміна до найближчого release.

### Початково невизначені тестові питання

- які permission combinations потрібно перевірити;
- які boundary values застосовуються для SLA;
- які failure scenarios можливі;
- як тестувати часові пояси й позаробочий час;
- які інтеграції потрібно mock або stub;
- які дані потрібні для regression;
- які наявні тести стають застарілими.

### Початково невизначені технічні питання

- у якому компоненті визначається customer priority;
- чи змінюється API contract;
- чи потрібні нові поля в базі даних;
- чи потрібна міграція існуючих заявок;
- як забезпечити backward compatibility;
- чи використовується synchronous або event-driven escalation;
- як обробляються повторні події;
- чи потрібен feature flag;
- які зовнішні сервіси мають бути змінені;
- які technical constraints впливають на реалізацію.

### Початково невизначені операційні питання

- які середовища й конфігурації змінюються;
- чи потрібні нові secrets або endpoints;
- які metrics та alerts потрібно додати;
- як визначити operational failure;
- чи можливий zero-downtime deployment;
- які rollback triggers;
- як feature flag використовується під час release;
- чи змінюється capacity profile;
- які runbook procedures потрібно оновити.

## 5. Архітектурний контекст

ServiceHub має спрощену модульну архітектуру:

- Web Portal;
- API Gateway;
- Ticket Service;
- Customer Profile Service;
- SLA and Escalation Service;
- Notification Service;
- Reporting Service;
- Audit Service;
- relational database;
- message broker;
- CRM integration;
- Microsoft Teams integration;
- monitoring and logging platform.

Ця схема є навчальною. Вона має бути достатньо детальною для impact analysis, але не вимагати від слухача вивчення повного production-коду.

## 6. Принцип незалежності рольових треків

Оскільки BA, QA, Developer та DevOps проходять окремі сесії, результат одного треку не може бути обов’язковим входом для іншого.

Для кожної контрольної точки тренер готує **canonical handoff artifact**:

- погоджений requirements pack;
- погоджені acceptance criteria;
- структурований change request;
- approved decision record;
- canonical Jira backlog;
- canonical technical design summary;
- canonical test baseline;
- canonical release baseline.

Рольова група спочатку створює власний результат, порівнює його з контрольним checklist, а потім отримує canonical artifact для наступної вправи.

Це дозволяє:

- проводити треки в будь-якому порядку;
- запускати тільки один обраний трек;
- не переносити помилки однієї групи в іншу;
- зберігати спільну логіку ServiceHub;
- порівнювати рольові результати з одним еталонним baseline.

## 7. Структура навчального пакета

### 7.1. Shared Core Package

Доступний усім трекам:

- Product Overview;
- Project Charter;
- business goals;
- stakeholder map;
- glossary;
- user-role model;
- current ticket-handling process;
- system context diagram;
- integration map;
- current requirements baseline;
- основний change request;
- change log;
- decision log;
- data-handling rules;
- version map;
- список навмисних конфліктів для тренера.

### 7.2. BA Package

Містить:

- протокол kick-off meeting;
- протокол SLA workshop;
- листування із замовником;
- повідомлення в чаті;
- презентацію з бізнес-очікуваннями;
- Business Requirements Document;
- Software Requirements Specification;
- functional і non-functional requirements;
- business rules;
- scope та out of scope;
- requirements version history;
- Jira epic і backlog;
- Definition of Ready;
- шаблон requirements table;
- шаблон functional impact matrix;
- шаблон decision record;
- шаблон BA handoff.

Навмисні проблеми:

- суперечливі SLA values;
- дублікати;
- рішення без owner;
- requirement без source;
- acceptance criteria без negative scenario;
- терміни з різним значенням;
- невизначена роль approver;
- усна домовленість, не перенесена до baseline.

### 7.3. QA Package

Містить:

- canonical requirements pack;
- acceptance criteria;
- business-rule matrix;
- дві версії requirements baseline;
- test strategy;
- test plan;
- functional test cases;
- API test checklist;
- integration scenarios;
- regression checklist;
- coverage matrix;
- synthetic test-data examples;
- defect reports;
- environment and test-data constraints;
- test execution summary;
- шаблон testability report;
- шаблон regression impact report;
- шаблон test-readiness conclusion.

Навмисні проблеми:

- вимоги без measurable expected result;
- застарілі test cases;
- відсутні negative і boundary scenarios;
- дублікати тестів;
- тести без traceability;
- некоректно класифікований defect;
- test data, що не покриває permission combinations;
- regression checklist, який не враховує інтеграції.

### 7.4. Developer Package

Містить:

- canonical requirements pack;
- canonical Jira backlog;
- component map;
- architecture overview;
- sequence diagram поточного процесу;
- OpenAPI fragment;
- current data model;
- event catalog;
- integration contracts;
- dependency inventory;
- feature-flag policy;
- migration guidelines;
- coding and technical-documentation standards;
- sample technical tasks;
- current ADR;
- known technical debt list;
- compatibility constraints;
- шаблон technical clarification report;
- шаблон implementation plan;
- шаблон technical impact matrix;
- шаблон ADR;
- шаблон implementation-readiness checklist.

Навмисні проблеми:

- API contract не містить нового priority type;
- data model не підтримує escalation history;
- не визначено idempotency rule;
- notification contract не містить failure handling;
- ADR не пояснює вибір sync versus async interaction;
- component ownership частково застарілий;
- migration strategy відсутня;
- feature-flag lifecycle не визначений;
- technical task не має dependency list;
- acceptance criteria суперечать compatibility constraint.

### 7.5. DevOps Package

Містить:

- canonical requirements pack;
- canonical technical design summary;
- service catalog;
- ownership matrix;
- environment topology;
- CI/CD process overview;
- deployment guide;
- configuration inventory;
- IaC fragments;
- secrets-handling rules;
- monitoring dashboard description;
- current metrics and alerts;
- SLI/SLO definitions;
- capacity assumptions;
- rollback procedure;
- operational readiness checklist;
- runbook;
- previous release notes;
- production incident description;
- incident postmortem;
- шаблон operational impact matrix;
- шаблон deployment plan;
- шаблон rollback plan;
- шаблон go/no-go recommendation.

Навмисні проблеми:

- monitoring не має бізнесової метрики критичних заявок;
- alert threshold не узгоджений із SLA;
- rollback procedure не враховує data migration;
- runbook не містить feature-flag rollback;
- environment configuration відрізняється без пояснення;
- service ownership застарілий;
- post-deployment checks неповні;
- incident postmortem містить action item, який не був виконаний.

### 7.6. Trainer Control Package

Недоступний слухачам до відповідної контрольної точки:

- source-of-truth map;
- перелік навмисних суперечностей;
- очікувані clarification questions;
- canonical requirements pack;
- canonical backlog;
- approved decision record;
- canonical technical design summary;
- canonical QA baseline;
- canonical operational baseline;
- evaluation rubrics;
- рольові solution keys;
- список acceptable alternative decisions;
- сценарії додаткових обмежень;
- журнал матеріалів, які відкриваються на кожному занятті.

## 8. Рольові workflows у ServiceHub

### BA

1. Source Materials → Requirements Pack
2. Requirement → Delivery-ready Backlog Item
3. Change Request → Business Impact and Decision Pack
4. Approved Change → Updated Requirements Baseline

### QA

1. Requirement → Testability Review
2. Requirement → Test Pack
3. Change Request → Regression Impact
4. Approved Change → Updated QA Pack

### Developer

1. Requirement → Technical Clarification
2. Requirement → Implementation Plan
3. Change Request → Technical Impact Analysis
4. Approved Change → Updated Technical Pack

### DevOps

1. Requirement → Operational Requirements
2. Change Request → Operational Impact
3. Approved Change → Deployment and Rollback Plan
4. Release or Incident → Updated Operations Pack

## 9. Розвиток проєкту в кожному треку

### Business Analyst Track

| Заняття | Вхід | Основний результат |
|---|---|---|
| BA-1 | Неструктуровані матеріали замовника | Requirements pack |
| BA-2 | Погоджена вимога та проблемний backlog | Quality report, Jira tasks і traceability |
| BA-3 | Неповний Critical Service Request | Functional impact і decision pack |
| BA-4 | Approval та нове обмеження | Updated requirements baseline і BA handoff |

### Quality Assurance Track

| Заняття | Вхід | Основний результат |
|---|---|---|
| QA-1 | Canonical requirements і acceptance criteria | Testability report |
| QA-2 | Погоджена baseline | Test pack, test data і coverage matrix |
| QA-3 | Baseline до та після change request | Regression impact report |
| QA-4 | Approved change та нове обмеження | Updated QA pack і test-readiness conclusion |

### Developer Track

| Заняття | Вхід | Основний результат |
|---|---|---|
| DEV-1 | Canonical requirements і system context | Technical clarification report |
| DEV-2 | Погоджена вимога й architecture package | Implementation plan, technical backlog і ADR |
| DEV-3 | Change request та дві baseline versions | Technical impact matrix і solution options |
| DEV-4 | Approved decision та production constraint | Updated technical pack і implementation-readiness conclusion |

### DevOps Track

| Заняття | Вхід | Основний результат |
|---|---|---|
| OPS-1 | Canonical requirements, service catalog і runbook | Operational requirements report |
| OPS-2 | Change request, topology та configuration | Operational impact і observability changes |
| OPS-3 | Approved technical design | Deployment, rollback і release checklist |
| OPS-4 | Нове обмеження та incident postmortem | Operational readiness pack і go/no-go recommendation |

## 10. Рольові capstones

### BA Capstone

Слухач отримує новий customer message і:

1. витягує бізнесову потребу;
2. формує clarification questions;
3. створює requirements pack;
4. готує Jira tasks;
5. виконує functional impact analysis;
6. формує decision record;
7. оновлює baseline після approval.

**Результат:** повний BA change-management pack.

### QA Capstone

Слухач отримує вимогу, попередню test baseline та approved change і:

1. виконує testability review;
2. створює test design;
3. готує test data;
4. визначає regression scope;
5. знаходить застарілі тести;
6. класифікує defect/change request;
7. формує test-readiness conclusion.

**Результат:** повний QA change-impact pack.

### Developer Capstone

Слухач отримує approved requirement, architecture package та нове технічне обмеження і:

1. формує technical questions;
2. визначає affected components;
3. готує implementation plan;
4. описує API та data changes;
5. аналізує compatibility і migration;
6. оновлює ADR;
7. проводить implementation-readiness review.

**Результат:** повний technical delivery pack.

### DevOps Capstone

Слухач отримує approved technical design, topology, deployment baseline і incident context та:

1. визначає operational requirements;
2. оцінює environment і configuration impact;
3. проєктує monitoring та alerts;
4. готує deployment і rollback plans;
5. оновлює runbook;
6. формує go/no-go evidence;
7. проводить operational-readiness review.

**Результат:** повний operational delivery pack.

## 11. Додаткові change requests

Для самостійної практики використовуються:

1. корпоративний SSO;
2. збільшення максимального розміру вкладень;
3. retention policy для вкладень;
4. Microsoft Teams notifications;
5. dashboard із показниками SLA;
6. доступ до заявок дочірніх компаній;
7. SLA за регіоном і часовим поясом;
8. bulk update заявок;
9. audit export для compliance;
10. API rate limiting для зовнішніх клієнтів.

Кожен change request має чотири рольові картки із різними питаннями й очікуваними артефактами.

## 12. Додаткове обмеження перед capstone

Для різних треків тренер використовує окреме ускладнення.

### BA

Замовник змінює визначення «пріоритетного клієнта» після попереднього approval.

### QA

Критичні заявки мають працювати в декількох часових поясах, але acceptance criteria не оновлені.

### Developer

Нові API-поля мають бути backward-compatible, а database change — виконуватися без downtime.

### DevOps

Microsoft Teams integration не готова, а release має керуватися feature flag із можливістю швидкого rollback.

Це дозволяє повторно пройти impact analysis у межах конкретної ролі.

## 13. Організація навчальних груп

Рекомендований розмір однорідної рольової групи — 4–12 слухачів.

У межах групи учасники працюють:

- індивідуально;
- у парах reviewer/author;
- у малих підгрупах над різними варіантами рішення.

Тренер виконує ролі:

- замовника або власника вимоги;
- власника прихованої інформації;
- approver;
- представника суміжної ролі;
- фінального reviewer.

Слухачі не змінюють професійну роль під час основних вправ. Потреби суміжних ролей представлені через handoff criteria, canonical artifacts і запитання до відповідних owners.

## 14. Підсумкові артефакти проєкту

### BA

- requirements pack;
- requirements quality report;
- Jira backlog fragment;
- functional impact matrix;
- decision record;
- updated requirements baseline;
- traceability matrix;
- BA AI Playbook.

### QA

- testability report;
- test pack;
- synthetic test data;
- coverage matrix;
- regression impact report;
- updated test baseline;
- test-readiness conclusion;
- QA AI Playbook.

### Developer

- technical clarification report;
- component impact map;
- implementation plan;
- technical backlog;
- API and data change notes;
- compatibility and migration checklist;
- ADR;
- implementation-readiness conclusion;
- Developer AI Playbook.

### DevOps

- operational requirements report;
- operational impact matrix;
- observability change list;
- deployment plan;
- rollback plan;
- updated runbook;
- release-readiness checklist;
- go/no-go recommendation;
- DevOps AI Playbook.

## 15. Критерії успішності навчального проєкту

Результат вважається якісним, якщо слухач:

- використовує правильний рольовий контекст;
- не вигадує відсутні дані;
- маркує факти, висновки, припущення та питання;
- виявляє ключові прогалини;
- зберігає traceability до вимоги або change request;
- визначає вплив на власні рольові артефакти;
- враховує суміжні handoff criteria;
- перевіряє результат Xplore професійним checklist;
- фіксує рішення людини;
- оновлює всі affected artifacts після approval.

## 16. Використання у сертифікаційному тесті

Онлайн-тест не повинен перевіряти запам’ятовування фактів про ServiceHub.

Тест використовує короткі нові ситуації з іншої умовної системи, але повторює професійну логіку відповідного треку:

- спільні питання про AI-workflows, джерела, невизначеність, безпеку та human review;
- BA-питання про вимоги, Jira readiness і change-management;
- QA-питання про testability, coverage і regression impact;
- Developer-питання про technical clarification, component impact і implementation readiness;
- DevOps-питання про operational impact, deployment, rollback і release readiness.

## 17. Перелік змін порівняно з початковою версією проєкту

До навчального проєкту внесено такі зміни:

1. Додано Developer як окрему цільову роль.
2. Створено окремий Developer Package.
3. Додано технічні артефакти: architecture overview, component map, API contract, data model, ADR і implementation plan.
4. Спільну змішану команду замінено однорідними рольовими групами.
5. Один командний capstone замінено чотирма рольовими capstones.
6. Додано canonical handoff artifacts.
7. Усунуто залежність між календарем і результатами різних треків.
8. Розширено change request питаннями compatibility, migration, feature flags та technical dependencies.
9. Розділено функціональний, тестовий, технічний і операційний impact analysis.
10. Сертифікаційні кейси розділено на спільну й рольову частини.

