# ServiceHub — Business Analyst Training Package

## Призначення

Цей пакет призначений для треку **Business Analyst** курсу **AI-assisted Requirements and Change Management in SDLC**. Він допомагає практикувати використання Xplore для аналізу розрізнених матеріалів, підготовки вимог, виявлення суперечностей, роботи з Jira backlog та керування змінами.

Перед початком використайте документ **ServiceHub — Shared Core Training Package**.

## Рольова мета

До завершення треку слухач уміє за допомогою AI-assisted workflow:

- отримати структуровані вимоги з матеріалів замовника;
- знайти конфлікти, прогалини та неузгоджені терміни;
- сформувати delivery-ready Jira items;
- побудувати traceability;
- перетворити customer change request на business impact і decision pack;
- оновити requirements baseline після approval.

## Вхідні матеріали

### Kick-off meeting excerpt

> Account Manager: Клієнт Northwind просить окремий, швидший шлях для критичних сервісних заявок.  
> Support Manager: Для деяких клієнтів уже є підвищений SLA, але список ведеться в CRM.  
> Product Owner: Потрібно зрозуміти, чи це лише новий priority type, чи окремий процес.  
> Support Lead: Важливо, щоб менеджери бачили критичні звернення одразу.  
> Account Manager: Замовник очікує зміни в наступному релізі.

### SLA workshop excerpt

> Support Manager: Для priority customers час першої реакції має бути 15 хвилин.  
> Operations Lead: У поточному SLA для преміальних договорів фігурує 30 хвилин.  
> Product Owner: Остаточне значення залежить від типу контракту.  
> Support Lead: Потрібно врахувати позаробочий час і регіон клієнта.

### Customer email excerpt

> Просимо дозволити нашим відповідальним співробітникам створювати Critical Service Request. Нам важливо бачити, хто її прийняв у роботу, отримувати повідомлення при ескалації та мати звіт за місяць.

### Chat message excerpt

> Sales: «Priority customer» — це, здається, будь-який клієнт із enterprise-планом.  
> Account Manager: Не завжди: деякі enterprise-контракти не містять 24/7 support.  
> Product Owner: Це рішення ще не фіналізоване.

## Виявлені ризики якості матеріалів

У матеріалах навмисно містяться проблеми. Їх не слід вирішувати припущенням.

- 15 і 30 хвилин фігурують як можливий час першої реакції.
- Визначення priority customer не погоджене.
- Не визначено, хто саме може створювати Critical Service Request.
- Не описано lifecycle critical request.
- Не визначено recipients, канали й умови ескалаційних повідомлень.
- Немає погодженого рішення про monthly report.
- «Наступний реліз» не містить дати, scope або пріоритету.
- «Швидший шлях» не є перевірюваною вимогою.

## Сесія BA-1 — Source Materials → Requirements Pack

### Завдання

На основі вхідних матеріалів створіть первинний requirements pack для CR-014.

### Робочий workflow в Xplore

1. Завантажте доступні матеріали як єдиний робочий контекст.
2. Попросіть сформувати список фактів із посиланням на джерело.
3. Окремо сформуйте список невизначеностей, суперечностей і рішень без owner.
4. Згенеруйте уточнювальні запитання, згруповані за stakeholder.
5. Створіть чернетку бізнесових, функціональних і нефункціональних вимог.
6. Виконайте human review: відредагуйте мову, приберіть вигадані деталі, позначте залежності.

### Шаблон requirements table

| ID | Тип | Формулювання | Джерело | Статус | Відкриті питання |
|---|---|---|---|---|---|
| BR-CR-01 | Business requirement | N/A | N/A | Draft | N/A |
| FR-CR-01 | Functional requirement | N/A | N/A | Draft | N/A |
| NFR-CR-01 | Non-functional requirement | N/A | N/A | Draft | N/A |

### Мінімальний результат

- facts and assumptions register;
- список clarification questions;
- requirements table;
- glossary additions;
- список неузгоджених термінів.

## Сесія BA-2 — Requirement → Delivery-ready Backlog Item

### Проблемний backlog fragment

| Key | Назва | Проблема |
|---|---|---|
| SH-412 | Add critical tickets | Не містить scope, roles, критеріїв або джерела |
| SH-413 | Escalation | Не визначає trigger, recipient або expected outcome |
| SH-414 | Notifications | Дублює частину SH-413 і не має acceptance criteria |
| SH-415 | Report | Не визначає audience, period або data fields |

### Завдання

Перетворіть погоджені вимоги у coherent Jira backlog fragment.

Для кожної задачі визначте:

- бізнесову цінність;
- scope та out of scope;
- залежності;
- acceptance criteria;
- negative scenarios;
- Definition of Ready;
- traceability до requirement або decision.

### Шаблон Jira item

| Поле | Вміст |
|---|---|
| Summary | N/A |
| User story / task description | N/A |
| Business value | N/A |
| Scope | N/A |
| Out of scope | N/A |
| Acceptance criteria | N/A |
| Negative scenarios | N/A |
| Dependencies | N/A |
| Source / traceability | N/A |
| Open questions | N/A |

### BA quality checklist

- Чи можна однозначно встановити джерело кожної вимоги?
- Чи відокремлено requirement від solution?
- Чи є measurable expected outcome?
- Чи описані exception і negative scenarios?
- Чи зрозумілий owner для відкритого рішення?
- Чи є залежності й межі scope?
- Чи немає дублювання між Jira tasks?

## Сесія BA-3 — Change Request → Business Impact and Decision Pack

### Завдання

Для CR-014 сформуйте functional impact і decision pack. Customer message не є готовою вимогою; її потрібно нормалізувати.

### Шаблон functional impact matrix

| Область | Поточний стан | Очікувана зміна | Impact | Owner | Потрібне рішення |
|---|---|---|---|---|---|
| Customer eligibility | N/A | N/A | N/A | N/A | N/A |
| Request creation | N/A | N/A | N/A | N/A | N/A |
| SLA | N/A | N/A | N/A | N/A | N/A |
| Escalation | N/A | N/A | N/A | N/A | N/A |
| Notifications | N/A | N/A | N/A | N/A | N/A |
| Reporting | N/A | N/A | N/A | N/A | N/A |
| Existing tickets | N/A | N/A | N/A | N/A | N/A |

### Шаблон decision record

| Поле | Вміст |
|---|---|
| Decision ID | N/A |
| Контекст | N/A |
| Потрібне рішення | N/A |
| Варіанти | N/A |
| Рекомендований варіант | N/A |
| Business impact | N/A |
| Ризики | N/A |
| Decision owner | N/A |
| Approval status | N/A |
| Follow-up actions | N/A |

### Обмеження

Не фіксуйте як рішення:

- конкретне SLA value;
- eligibility rule;
- синхронну або асинхронну реалізацію ескалації;
- конкретних отримувачів сповіщень;
- дату релізу.

Ці пункти мають залишатися questions або decision options, доки не підтверджені owner.

## Сесія BA-4 — Approved Change → Updated Requirements Baseline

### Нове обмеження

Після попереднього approval замовник змінює визначення priority customer: до нього входять не всі enterprise-клієнти, а лише клієнти з активним 24/7 support entitlement.

### Завдання

1. Визначте affected requirements, backlog items і business rules.
2. Оновіть requirements baseline з новою версією.
3. Позначте застарілі формулювання та залежні acceptance criteria.
4. Підготуйте BA handoff для QA, Developer і DevOps.
5. Додайте change log entry.

### BA handoff template

| Блок | Що передати |
|---|---|
| Approved business rules | Погоджені правила та version |
| Functional scope | Сценарії та exception flows |
| Acceptance criteria | Перевірювані умови |
| Open decisions | Owner, status, deadline |
| Dependencies | Суміжні команди та артефакти |
| Traceability | Requirement, backlog, decision IDs |
| Change summary | Що змінилось порівняно з baseline |

## BA Capstone

### Ситуація

Клієнт просить додати регіональні SLA для Critical Service Request і повідомляє, що для частини договорів SLA має відліковуватися лише в локальний робочий час клієнта.

### Виконайте

1. Витягніть бізнесову потребу з customer message.
2. Складіть clarification questions.
3. Підготуйте requirements pack.
4. Створіть delivery-ready Jira tasks.
5. Проведіть functional impact analysis.
6. Сформуйте decision record.
7. Оновіть baseline після отримання умовного approval.

### Фінальні артефакти BA

- requirements pack;
- requirements quality report;
- Jira backlog fragment;
- functional impact matrix;
- decision record;
- updated requirements baseline;
- traceability matrix;
- BA AI Playbook.

## BA AI Playbook

Слухач формує власний короткий playbook із повторно придатними prompt patterns:

- витяг фактів із посиланням на джерело;
- пошук суперечностей;
- генерація clarification questions;
- review вимог на completeness і testability;
- підготовка Jira tasks;
- порівняння двох baseline versions;
- побудова impact matrix;
- перевірка handoff completeness.

## Самоперевірка перед передаванням результату

- Усі факти мають source reference?
- Припущення та питання чітко позначені?
- Вимоги є перевірюваними та несуперечливими?
- Acceptance criteria мають positive і negative scenarios?
- Change impact охоплює requirements, backlog, rules і рішення?
- Updated baseline містить version, change log і traceability?
- Результат може використати інша роль без усного пояснення?
