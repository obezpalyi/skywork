# ServiceHub — лекторський варіант очікуваних результатів BA-треку

## Призначення документа

Цей документ є закритим лекторським матеріалом до **ServiceHub — Business Analyst Training Package** у межах курсу **AI-assisted Requirements and Change Management in SDLC**.

Він містить:

- еталонний склад результатів кожної з чотирьох BA-сесій;
- приклади заповнених артефактів;
- контрольні рішення, які тренер відкриває між сесіями;
- критерії достатності;
- допустимі альтернативи;
- типові помилки для розбору.

Документ не потрібно видавати слухачам до завершення відповідної вправи. Capstone навмисно не має готового розв’язання в цьому матеріалі.

## Як користуватися лекторським ключем

Для кожної сесії застосовується однакова послідовність:

1. Слухачі отримують лише матеріали, передбачені навчальним пакетом.
2. За допомогою Xplore формують первинну чернетку результату.
3. Виконують професійний human review.
4. Пояснюють, які частини результату є фактами, висновками, припущеннями та відкритими питаннями.
5. Тренер проводить розбір за цим документом.
6. Після розбору тренер відкриває canonical input для наступної сесії.

Еталон не є вимогою до дослівного формулювання. Альтернативний результат приймається, якщо він:

- не суперечить матеріалам;
- не перетворює припущення на факт;
- зберігає traceability;
- містить owner для відкритого рішення;
- є достатньо конкретним для наступного етапу SDLC;
- пройшов видимий human review.

# Сесія BA-1 — Source Materials → Requirements Pack

## 1. Очікуваний навчальний результат

Після сесії BA має продемонструвати, що Xplore допомагає швидко опрацювати великий масив розрізнених матеріалів, але не може самостійно закрити суперечності або прийняти бізнесове рішення.

Слухач має підготувати:

- facts register;
- assumptions and uncertainty register;
- conflict register;
- clarification questions, згруповані за stakeholder;
- первинний requirements table;
- glossary additions;
- перелік рішень, потрібних для переходу до backlog preparation.

## 2. Еталонний facts register

| ID | Факт | Джерело | Коментар лектора |
|---|---|---|---|
| F-01 | Клієнт Northwind просить окремий швидший шлях для критичних сервісних заявок | Kick-off meeting, Account Manager | Це зафіксована потреба, але не готова вимога |
| F-02 | Для частини клієнтів уже існує підвищений SLA | Kick-off meeting, Support Manager | Критерії цієї групи не визначені |
| F-03 | Інформація про клієнтів із підвищеним SLA ведеться в CRM | Kick-off meeting, Support Manager | Це кандидат на source of truth, але статус потрібно підтвердити |
| F-04 | Product Owner ще не визначив, чи буде зміна новим priority type або окремим процесом | Kick-off meeting, Product Owner | Це відкрите solution decision |
| F-05 | Менеджери мають бачити критичні звернення одразу | Kick-off meeting, Support Lead | «Одразу» потребує вимірюваного визначення |
| F-06 | Замовник очікує зміну в наступному релізі | Kick-off meeting, Account Manager | Очікування не дорівнює approved commitment |
| F-07 | У матеріалах згадано 15 хвилин як можливий час першої реакції | SLA workshop, Support Manager | Не можна фіксувати як approved value |
| F-08 | У поточному SLA для преміальних договорів згадано 30 хвилин | SLA workshop, Operations Lead | Конфліктує з F-07 |
| F-09 | Остаточне SLA залежить від типу контракту | SLA workshop, Product Owner | Потрібна policy або decision |
| F-10 | Потрібно врахувати позаробочий час і регіон клієнта | SLA workshop, Support Lead | Не визначено правило розрахунку |
| F-11 | Замовник хоче дозволити відповідальним співробітникам створювати Critical Service Request | Customer email | Не визначено роль або permission |
| F-12 | Замовник хоче бачити, хто прийняв заявку в роботу | Customer email | Не визначено event і спосіб відображення |
| F-13 | Замовник хоче отримувати повідомлення під час ескалації | Customer email | Не визначено recipients, channel і timing |
| F-14 | Замовник хоче щомісячний звіт | Customer email | Не визначено audience, fields і delivery method |
| F-15 | Визначення priority customer не фіналізоване | Chat, Product Owner | Це ключова невизначеність eligibility |

## 3. Еталонний assumptions and uncertainty register

| ID | Твердження | Класифікація | Правильна дія |
|---|---|---|---|
| A-01 | Усі enterprise-клієнти є priority customers | Непідтверджене припущення | Не включати до baseline; передати Product Owner |
| A-02 | CRM є остаточним source of truth для eligibility | Ймовірний висновок | Підтвердити у Customer Platform owner |
| A-03 | Critical — це нове значення поля priority | Solution assumption | Залишити як один із варіантів |
| A-04 | Critical request має окремий lifecycle | Solution assumption | З’ясувати, які status і transition справді потрібні |
| A-05 | 15 хвилин є погодженим SLA | Неправильне припущення | Зафіксувати конфлікт 15/30 хвилин |
| A-06 | Менеджери отримують email notification | Частково підтримане припущення | Email згадано лише загально; recipients і channels погодити |
| A-07 | Зміна точно входить до наступного релізу | Непідтверджене планове припущення | Попросити scope/release decision |
| A-08 | Existing tickets потрібно мігрувати | Відкрите питання | Винести на окреме рішення |

## 4. Еталонний conflict register

| ID | Конфлікт або прогалина | Джерела | Вплив | Owner |
|---|---|---|---|---|
| C-01 | 15 хвилин проти 30 хвилин для першої реакції | SLA workshop | Неможливо сформувати testable SLA requirement | Product Owner + Support Manager |
| C-02 | Enterprise plan проти contract-based eligibility | Chat + SLA workshop | Невідомо, хто може використовувати critical flow | Product Owner |
| C-03 | Новий priority type проти окремого процесу | Kick-off meeting | Впливає на scope, UX і downstream artifacts | Product Owner + Technical Owner |
| C-04 | «Одразу» без вимірюваного часу | Kick-off meeting | Неможливо створити acceptance criterion | Support Manager |
| C-05 | «Наступний реліз» без approved scope | Kick-off meeting | Ризик хибного commitment | Product Owner / Delivery Manager |
| C-06 | Monthly report без складу даних | Customer email | Неможливо визначити report scope | Account Manager + Support Manager |

## 5. Еталонні clarification questions

### До Product Owner

1. Яке бізнесове визначення priority customer має використовувати ServiceHub?
2. Чи є Critical Service Request новим priority level у поточному процесі або окремим типом запиту?
3. Чи входить зміна до scope найближчого релізу? Якщо так, які capabilities є must-have?
4. Як потрібно обробляти already-created tickets після ввімкнення зміни?
5. Хто є decision owner для SLA, eligibility, reporting і notification scope?

### До Support Manager

1. Що вважається першою реакцією?
2. Який SLA застосовується до Critical Service Request?
3. SLA рахується у календарному часі, 24/7 чи за service calendar клієнта?
4. Яка подія запускає ескалацію?
5. Хто має отримувати ескалаційні повідомлення?
6. Що має відбуватися, якщо відповідальний менеджер недоступний?
7. Які показники мають бути у monthly report?

### До Account Manager / Customer Representative

1. Хто саме є «відповідальним співробітником» клієнта?
2. Чи потрібне окреме право для створення critical request?
3. Які канали повідомлень очікує клієнт?
4. Хто є аудиторією monthly report?
5. Чи потрібно клієнту бачити всю escalation history?

### До Customer Platform / CRM Owner

1. Де зберігається чинний entitlement клієнта?
2. Як ServiceHub може перевіряти eligibility?
3. Як швидко зміна entitlement стає доступною ServiceHub?
4. Що відбувається, якщо CRM тимчасово недоступна?

### До Delivery / Technical representatives

1. Які компоненти та інтеграції потенційно зачіпає change request?
2. Які обмеження backward compatibility вже відомі?
3. Чи є технічні залежності, що впливають на release feasibility?

## 6. Еталонний первинний requirements table

На BA-1 вимоги залишаються у статусі `Draft` або `To clarify`. Не можна підміняти відсутні рішення конкретними значеннями.

| ID | Тип | Формулювання | Джерело | Статус | Відкриті питання |
|---|---|---|---|---|---|
| BR-CR-01 | Business | ServiceHub має забезпечити прискорену обробку критичних сервісних запитів для погодженої категорії клієнтів | Kick-off + customer email | Draft | Eligibility, критерій «прискорена» |
| BR-CR-02 | Business | Відповідальні менеджери мають отримувати своєчасну видимість критичних заявок та їх ескалацій | Kick-off + customer email | Draft | Хто саме, channel, timing |
| BR-CR-03 | Business | Замовник має отримувати щомісячну інформацію про обробку critical requests | Customer email | Draft | Audience, fields, format |
| FR-CR-01 | Functional | Система має дозволяти уповноваженому користувачу eligible customer створити Critical Service Request | Customer email | To clarify | User role, permission, eligibility rule |
| FR-CR-02 | Functional | Система має застосовувати погоджене SLA rule до Critical Service Request | SLA workshop | To clarify | SLA value, calendar, region |
| FR-CR-03 | Functional | Система має створювати ескалацію, якщо визначена SLA condition не виконана | Customer email + SLA workshop | To clarify | Trigger, recipients, escalation outcome |
| FR-CR-04 | Functional | Система має показувати, хто прийняв Critical Service Request у роботу | Customer email | Draft | Event definition, UI placement |
| FR-CR-05 | Functional | Система має повідомляти погоджених recipients про escalation event | Customer email | To clarify | Recipients, channels, delivery time |
| FR-CR-06 | Functional | Система має надавати monthly report щодо Critical Service Request | Customer email | To clarify | Metrics, filters, delivery |
| NFR-CR-01 | Non-functional | Час доставки escalation notification має відповідати погодженому operational target | Customer email | To clarify | Target і спосіб вимірювання |
| NFR-CR-02 | Non-functional | Critical request processing має підтримувати погоджені service calendars і регіони | SLA workshop | To clarify | Правило time zone і calendar source |
| NFR-CR-03 | Non-functional | Рішення має зберігати audit-able history ключових дій із critical request | Висновок із потреби у видимості | Proposed | Які саме events і retention |

`NFR-CR-03` є допустимою аналітичною рекомендацією, але не confirmed requirement. Сильний результат має явно позначити її як `Proposed`.

## 7. Еталонні glossary additions

| Термін | Робоче визначення після BA-1 | Статус |
|---|---|---|
| Critical Service Request | Сервісна заявка, для якої очікується окрема або посилена логіка пріоритету, SLA та ескалації | Draft |
| Priority Customer | Клієнт, який відповідає ще не погодженому eligibility rule | To clarify |
| First Response | Дія, яка зупиняє timer першої реакції; точне визначення відсутнє | To clarify |
| Escalation Event | Подія, що виникає за невиконання погодженої SLA condition | Draft |
| Responsible Manager | Отримувач видимості або notification; роль і selection rule не визначені | To clarify |
| Service Calendar | Календар, за яким обчислюється SLA для конкретного клієнта або договору | Draft |

## 8. Результат, достатній для завершення BA-1

Сесію можна вважати виконаною, якщо слухач:

- знайшов щонайменше два основні конфлікти: SLA та eligibility;
- не зафіксував 15 хвилин або enterprise plan як approved fact;
- сформував питання до кількох stakeholders;
- розділив business, functional і non-functional requirements;
- зберіг source traceability;
- позначив непідтверджені вимоги правильним статусом;
- продемонстрував, які твердження Xplore були виправлені під час human review.

## 9. Типові помилки для розбору

- Xplore «обирає» 15 хвилин, бо це найконкретніше число.
- Усі enterprise-клієнти автоматично стають priority customers.
- Customer request одразу перетворюється на approved specification.
- Вимоги описують конкретну технічну реалізацію без business decision.
- Clarification questions не мають адресата.
- Джерело вказане як «документація», без конкретного матеріалу.
- Open questions губляться після генерації красивої таблиці.

## 10. Canonical input, який тренер відкриває перед BA-2

Для наступної сесії вважати погодженими такі рішення:

1. Priority customer — клієнт з активним `24/7 support entitlement`.
2. Critical Service Request може створити користувач із permission `create_critical_request`.
3. `Critical` реалізується як окреме значення priority у поточному ticket flow.
4. Для critical request поле `reason` є обов’язковим.
5. SLA першої реакції — 15 хвилин у межах service calendar клієнта.
6. Якщо перша реакція не зафіксована у межах SLA, система створює escalation event.
7. Support Manager отримує in-app та email notification не пізніше ніж через одну хвилину після escalation event.
8. Система зберігає escalation history.
9. Monthly report містить кількість critical requests, кількість SLA breaches і середній час першої реакції.
10. Existing non-critical ticket flow не змінюється.

# Сесія BA-2 — Requirement → Delivery-ready Backlog Item

## 1. Очікуваний навчальний результат

BA має перетворити погоджений requirements pack на зрозумілу структуру backlog, не втративши бізнесову мету, negative scenarios, dependencies та traceability.

Еталонний backlog складається з epic і п’яти пов’язаних delivery items. Допустимий інший поділ, якщо задачі мають coherent scope та не дублюють одна одну.

## 2. Еталонний epic

### SH-410 — Enable Critical Service Request flow for eligible customers

**Business objective:** забезпечити контрольовану прискорену обробку критичних звернень клієнтів з активним 24/7 support entitlement.

**Business value:**

- швидша реакція на критичні проблеми;
- прозора ескалація;
- видимість для Support Manager;
- вимірювання якості обробки;
- збереження поточного non-critical flow.

**In scope:**

- eligibility та permission;
- створення critical request;
- SLA timer;
- escalation event;
- manager notifications;
- escalation history;
- monthly reporting.

**Out of scope:**

- SMS notification;
- новий загальний ticket lifecycle;
- автоматична зміна priority existing tickets;
- зміна SLA для non-critical tickets;
- Microsoft Teams notification.

## 3. Еталонний Jira backlog

### SH-412 — Create a Critical Service Request

| Поле | Еталонний зміст |
|---|---|
| User story | Як уповноважений користувач клієнта з активним 24/7 support entitlement, я хочу створити Critical Service Request, щоб критична проблема була опрацьована за спеціальним SLA |
| Business value | Забезпечити доступ до critical flow лише погодженій категорії користувачів |
| Scope | Eligibility check, permission check, priority `Critical`, mandatory `reason`, створення ticket |
| Out of scope | Escalation, manager notification, reporting |
| Dependencies | Customer Profile/entitlement source; permission model |
| Traceability | BR-CR-01, FR-CR-01, approved decisions 1–4 |

**Acceptance criteria:**

1. Given клієнт має active 24/7 support entitlement і користувач має `create_critical_request`, when користувач заповнює всі обов’язкові поля та вибирає `Critical`, then система створює заявку зі статусом `New` і priority `Critical`.
2. Given priority `Critical`, when поле `reason` порожнє, then система не створює заявку та показує validation message.
3. Given клієнт не має active 24/7 support entitlement, when користувач намагається створити critical request, then critical option недоступна або запит відхиляється за погодженою UX-поведінкою.
4. Given користувач не має permission, when він намагається створити critical request, then операція не виконується.
5. Створення non-critical request для тих самих користувачів працює без зміни поточної поведінки.

**Open issue для refinement:** погодити точну UX-поведінку для ineligible або unauthorized user.

### SH-413 — Apply SLA and create escalation event

| Поле | Еталонний зміст |
|---|---|
| User story | Як Support Manager, я хочу, щоб critical request автоматично контролювалася за погодженим SLA, щоб пропущена перша реакція своєчасно ескалувалася |
| Business value | Зменшити ризик непоміченої критичної заявки |
| Scope | 15-minute first-response SLA, service calendar, timer, escalation event |
| Out of scope | Notification delivery UI, reporting |
| Dependencies | SH-412; service calendar source; SLA and Escalation Service |
| Traceability | FR-CR-02, FR-CR-03, approved decisions 5–6 |

**Acceptance criteria:**

1. Після створення critical request система визначає SLA due time як 15 хвилин у межах service calendar клієнта.
2. Якщо перша реакція зафіксована до SLA due time, escalation event не створюється.
3. Якщо перша реакція не зафіксована до SLA due time, система створює одну escalation event.
4. Повторна обробка тієї самої умови не створює duplicate business escalation.
5. Non-critical SLA calculation не змінюється.

### SH-414 — Notify Support Manager and retain escalation history

| Поле | Еталонний зміст |
|---|---|
| User story | Як Support Manager, я хочу отримати повідомлення та бачити історію ескалацій, щоб своєчасно реагувати й мати контекст |
| Business value | Підвищити керованість critical requests |
| Scope | In-app та email notification; escalation history |
| Out of scope | SMS; Teams; customer notification |
| Dependencies | SH-413; recipient mapping; Notification Service |
| Traceability | BR-CR-02, FR-CR-05, proposed audit requirement, approved decisions 7–8 |

**Acceptance criteria:**

1. Після створення escalation event визначений Support Manager отримує in-app та email notification.
2. Notification initiation відбувається так, щоб погоджений delivery target становив не більше однієї хвилини від escalation event.
3. Escalation history містить щонайменше timestamp, event type, ticket reference і notification status.
4. Повторна доставка технічної події не створює duplicate business record.
5. Якщо email channel недоступний, in-app history зберігає failure status; детальна retry policy є технічним/операційним рішенням.

### SH-415 — Provide monthly Critical Service Request report

| Поле | Еталонний зміст |
|---|---|
| User story | Як Support Manager, я хочу щомісячно аналізувати critical requests, щоб контролювати обсяг і виконання SLA |
| Business value | Забезпечити вимірюваність нового процесу |
| Scope | Count of critical requests, SLA breaches, average first-response time; monthly period |
| Out of scope | Predictive analytics; customer billing; custom BI dashboard |
| Dependencies | Ticket, SLA та reporting data |
| Traceability | BR-CR-03, FR-CR-06, approved decision 9 |

**Acceptance criteria:**

1. За вибраний календарний місяць report показує кількість створених critical requests.
2. Report показує кількість critical requests із first-response SLA breach.
3. Report показує середній first-response time для critical requests.
4. Report не включає non-critical requests до critical metrics.
5. Якщо за період немає critical requests, report показує нульові значення, а не помилку.

**Open issue для refinement:** audience, export format і time-zone boundary звітного місяця.

### SH-416 — Protect existing non-critical ticket flow

| Поле | Еталонний зміст |
|---|---|
| Task purpose | Підтвердити відсутність функціональних змін у non-critical flow |
| Business value | Знизити ризик регресії для поточних клієнтів |
| Scope | Traceability до affected non-critical scenarios та regression expectations |
| Dependencies | SH-412—SH-415 |
| Traceability | Approved decision 10 |

**Acceptance criteria:**

1. Current Low, Normal і High priorities залишаються доступними за попередніми правилами.
2. Поточні SLA для non-critical requests не змінюються.
3. Existing integrations продовжують отримувати підтримуваний ticket representation.
4. Ввімкнення critical flow не змінює already-created non-critical tickets.

## 4. Еталонна traceability matrix

| Requirement / decision | Jira item |
|---|---|
| BR-CR-01 | SH-410, SH-412, SH-413 |
| BR-CR-02 | SH-410, SH-414 |
| BR-CR-03 | SH-410, SH-415 |
| FR-CR-01 | SH-412 |
| FR-CR-02 | SH-413 |
| FR-CR-03 | SH-413 |
| FR-CR-05 | SH-414 |
| FR-CR-06 | SH-415 |
| Preserve non-critical flow | SH-416 та acceptance criteria в SH-412/413 |

## 5. Definition of Ready для еталонного backlog

Backlog item є ready, якщо:

- має business value;
- має traceability до approved requirement або decision;
- scope і out of scope визначені;
- acceptance criteria перевірювані;
- основні negative scenarios описані;
- dependencies і owner відомі;
- open questions не блокують розуміння основної поведінки;
- QA, Developer і DevOps можуть почати рольовий analysis без усного відновлення контексту.

`SH-412` і `SH-415` можуть залишатися `Conditionally Ready`, доки не погоджено UX error behavior та report audience/format.

## 6. Результат, достатній для завершення BA-2

- Backlog не є механічною копією початкових SH-412—SH-415.
- Scope розкладено без критичного дублювання.
- Eligibility і permission розділені логічно, але залишаються traceable.
- SLA trigger має measurable criterion.
- Negative behavior включено.
- Existing non-critical flow захищено.
- Відкриті питання не приховані.
- У кожного Jira item є source або requirement reference.

## 7. Допустимі альтернативи

Тренер може прийняти:

- окрему задачу для eligibility та окрему для request creation;
- окремі задачі для in-app і email notifications;
- reporting як окремий epic, якщо слухач аргументує scope;
- non-critical regression не як Jira task, а як explicit cross-cutting acceptance criteria;
- інший формат user story, якщо зміст залишається delivery-ready.

## 8. Типові помилки

- Кожен абзац вимоги стає окремою Jira task без end-to-end value.
- Notifications дублюються в escalation task і notification task.
- Acceptance criteria описують технічну реалізацію замість поведінки.
- Не включено unauthorized або ineligible scenario.
- Monthly report залишається одним словом «Report».
- Backward compatibility не відображена в backlog.
- Xplore генерує зайві ролі, поля або канали, яких немає в рішеннях.

## 9. Canonical input, який тренер відкриває перед BA-3

Перед BA-3 вважати backlog structure прийнятою. Водночас такі рішення ще не повинні сприйматися як незмінні:

- eligibility policy;
- SLA policy;
- notification recipients;
- report composition;
- release scope.

Мета BA-3 — показати, як структурувати business impact і decision governance, а не повторно переписати Jira tickets.

# Сесія BA-3 — Change Request → Business Impact and Decision Pack

## 1. Очікуваний навчальний результат

BA має показати повний business impact change request і підготувати рішення до approval. На цьому етапі важливо не змішувати:

- виявлений impact;
- рекомендоване рішення;
- остаточне approved decision.

## 2. Еталонна normalized change request card

| Поле | Еталонний зміст |
|---|---|
| Change ID | CR-014 |
| Назва | Introduce Critical Service Request for eligible customers |
| Business need | Забезпечити швидшу, контрольовану та видиму обробку критичних клієнтських звернень |
| Requester | Northwind / Account Manager |
| Affected users | Authorized Corporate Requester, Support Agent, Support Manager |
| Expected capabilities | Create critical request, apply critical SLA, escalate missed response, notify manager, report outcomes |
| Business outcome | Знизити ризик несвоєчасної реакції на критичні інциденти та забезпечити прозорість SLA |
| Target release | Requested for next release; not approved until release decision |
| Current status | Analysis / pending business decisions |
| Out of scope | SMS, Teams notification, automatic reprioritization of existing tickets, changes to non-critical SLA |

## 3. Еталонна functional impact matrix

| Область | Поточний стан | Очікувана зміна | Impact | Owner | Потрібне рішення |
|---|---|---|---|---|---|
| Customer eligibility | Немає формалізованого critical eligibility у ServiceHub | Eligibility має визначатися за customer entitlement | Business rules, CRM data, access | Product Owner | Остаточний eligibility rule і source of truth |
| Request creation | Priority values Low/Normal/High | Додати controlled Critical option і mandatory reason | UI, permissions, validation, audit | Product Owner | UX для unauthorized/ineligible users |
| SLA | Різні SLA за контрактами | Додати 15-minute first-response SLA за service calendar | SLA policy, time calculation, reporting | Support Manager | Визначення first response і calendar source |
| Escalation | Загальна логіка прострочених заявок | Створювати escalation event за missed critical SLA | Process, ownership, history | Support Manager | Escalation levels і response expectations |
| Notifications | Стандартні email notifications | Додати in-app та email для Support Manager | Recipient mapping, timing, failure handling | Support Manager | Recipient fallback і business response |
| Reporting | Немає окремої critical аналітики | Додати monthly critical metrics | Report scope, data ownership, historical interpretation | Support Manager | Audience, export, period boundary |
| Existing tickets | Поточні tickets продовжують lifecycle | Не змінювати existing non-critical tickets | Regression і compatibility expectation | Product Owner | Чи застосовується change до already-open eligible tickets |
| Support operations | Менеджер працює за загальними queues | Потрібна швидка видимість critical queue | Workload, procedures, training | Support Manager | Operational ownership і coverage |
| Documentation | Baseline не описує critical flow | Оновити requirements, glossary, backlog, support materials | Governance і traceability | Business Analyst | Versioning та owners |

## 4. Decision pack

### DR-014-01 — Priority Customer Eligibility

| Поле | Еталонний зміст |
|---|---|
| Контекст | Enterprise plan сам по собі не гарантує 24/7 support |
| Потрібне рішення | Яке правило визначає доступ до Critical Service Request |
| Варіант A | Усі enterprise-клієнти |
| Варіант B | Лише клієнти з active 24/7 support entitlement |
| Варіант C | Manual allowlist у ServiceHub |
| Рекомендація BA | Варіант B |
| Обґрунтування | Прив’язує capability до чинного договірного entitlement і зменшує ризик несанкціонованого використання |
| Ризики | Якість CRM data; затримка синхронізації; entitlement changes |
| Owner | Product Owner |
| Статус до BA-4 | Proposed / pending approval |

### DR-014-02 — First-response SLA

| Поле | Еталонний зміст |
|---|---|
| Контекст | У матеріалах присутні 15 і 30 хвилин |
| Потрібне рішення | SLA value і calendar rule |
| Варіант A | 15 календарних хвилин 24/7 |
| Варіант B | 15 хвилин у service calendar клієнта |
| Варіант C | Значення за contract tier |
| Рекомендація BA | Варіант B як робочий контрольний сценарій |
| Обґрунтування | Узгоджується з потребою врахувати регіон і позаробочий час |
| Ризики | Неоднозначність time-zone source; складні boundary cases |
| Owner | Support Manager + Product Owner |
| Статус до BA-4 | Proposed / pending approval |

### DR-014-03 — Escalation Notification Scope

| Поле | Еталонний зміст |
|---|---|
| Потрібне рішення | Хто й через які канали отримує повідомлення |
| Варіант A | Support Manager: in-app + email |
| Варіант B | Support Manager і Account Manager: in-app + email |
| Варіант C | Dynamic recipients за contract |
| Рекомендація BA | Варіант A для першого release |
| Business impact | Найменший scope, чіткий operational owner |
| Ризики | Недоступний manager; email delay |
| Owner | Support Manager |
| Статус до BA-4 | Proposed / pending approval |

### DR-014-04 — Monthly Report Scope

| Поле | Еталонний зміст |
|---|---|
| Потрібне рішення | Мінімальний склад monthly report |
| Варіант A | Count, SLA breaches, average first-response time |
| Варіант B | Варіант A + detailed ticket list |
| Варіант C | Interactive dashboard |
| Рекомендація BA | Варіант A для першого release |
| Business impact | Дає базову вимірюваність без розширення scope |
| Ризики | Непогоджений audience і period time zone |
| Owner | Support Manager |
| Статус до BA-4 | Proposed / pending approval |

### DR-014-05 — Release Scope

| Поле | Еталонний зміст |
|---|---|
| Потрібне рішення | Який minimum viable scope входить до найближчого release |
| Рекомендований scope | Eligibility, permission, creation, SLA, single-level escalation, manager notification, history, minimal report |
| Відкладено | SMS, Teams, multi-level escalation, custom analytics |
| Ризики | Залежності від CRM, service calendar та notification readiness |
| Owner | Product Owner / Delivery Manager |
| Статус до BA-4 | Pending feasibility and approval |

## 5. Еталонний change impact summary

Сильний висновок BA має звучати приблизно так:

> CR-014 є не локальною зміною поля priority, а наскрізною зміною customer eligibility, request creation, SLA control, escalation, notification, reporting та support operations. До approval потрібно закрити щонайменше eligibility, SLA/calendar, recipient, report та release-scope decisions. Реалізацію не слід вважати ready лише на підставі customer message.

## 6. Результат, достатній для завершення BA-3

- Change request нормалізований без втрати customer intent.
- Impact охоплює не лише UI, а й process, data, reporting та operations.
- Кожне рішення має options, recommendation, owner і status.
- Recommendation не подана як approved fact.
- Out of scope визначено.
- Release expectation відокремлено від release commitment.
- Є список artifacts, які потрібно оновити після approval.

## 7. Допустимі альтернативи

- Інша рекомендація щодо eligibility або report scope, якщо вона аргументована.
- Окремий decision record для first-response definition.
- Об’єднання notification і escalation decisions, якщо owner і consequences залишаються прозорими.
- Використання RACI або stakeholder impact map додатково до functional impact matrix.

## 8. Типові помилки

- Impact matrix містить лише перелік компонентів системи.
- Recommendation автоматично отримує статус `Approved`.
- У decision record немає decision owner.
- Не показано наслідків для existing tickets і support operations.
- Дата релізу вигадана.
- BA приймає технічне рішення sync/async замість фіксації business expectation.
- Після використання Xplore немає перевірки повноти affected artifacts.

## 9. Canonical approval, який тренер відкриває перед BA-4

Вважати погодженим:

- priority customer = клієнт з active 24/7 support entitlement;
- creator має permission `create_critical_request`;
- Critical є окремим priority value у поточному flow;
- `reason` є обов’язковим;
- first-response SLA = 15 хвилин у service calendar клієнта;
- missed SLA створює single-level escalation event;
- Support Manager отримує in-app та email notification;
- escalation history зберігається;
- minimal monthly report містить count, SLA breaches і average first-response time;
- current non-critical flow не змінюється;
- рішення входить до планового release scope за умови technical, QA та operational readiness.

# Сесія BA-4 — Approved Change → Updated Requirements Baseline

## 1. Очікуваний навчальний результат

BA має показати, що approval не завершує роботу зі зміною. Після рішення потрібно синхронно оновити baseline, business rules, backlog, acceptance criteria, traceability і handoff.

Нове обмеження сесії:

> Priority customer — не будь-який enterprise-клієнт, а лише клієнт з active 24/7 support entitlement.

## 2. Affected artifact register

| Artifact | Affected element | Потрібна дія |
|---|---|---|
| Glossary | Priority Customer | Замінити enterprise-based definition на entitlement-based |
| Business rules | Eligibility | Додати active entitlement rule |
| Requirements baseline | BR-CR-01, FR-CR-01 | Оновити формулювання й version |
| Jira backlog | SH-412 | Оновити eligibility acceptance criteria |
| Traceability matrix | Eligibility links | Перевірити зв’язки requirement → backlog → test |
| Decision log | DR-014-01 | Позначити Approved і зафіксувати дату/owner у реальному середовищі |
| Test handoff | Permission and entitlement combinations | Додати negative та change-of-entitlement scenarios |
| Technical handoff | Source of truth та availability | Додати integration questions |
| Operational handoff | CRM dependency | Додати monitoring/failure implications |
| Training/support materials | User eligibility explanation | Оновити після final UX decision |

## 3. Еталонна updated baseline

### Business requirements

| ID | Version | Approved formulation | Status |
|---|---|---|---|
| BR-CR-01 | 1.1 | ServiceHub має забезпечити прискорену обробку Critical Service Request для клієнтів з active 24/7 support entitlement | Approved |
| BR-CR-02 | 1.0 | Support Manager має отримувати своєчасну видимість critical escalation і контекст для реагування | Approved |
| BR-CR-03 | 1.0 | ServiceHub має забезпечити щомісячне вимірювання обсягу critical requests і виконання first-response SLA | Approved |

### Functional requirements

| ID | Version | Approved formulation | Status |
|---|---|---|---|
| FR-CR-01 | 1.1 | Система має дозволяти створення Critical Service Request лише тоді, коли клієнт має active 24/7 support entitlement, а користувач має permission `create_critical_request` | Approved |
| FR-CR-02 | 1.0 | Для Critical Service Request система має встановити first-response SLA 15 хвилин у межах service calendar клієнта | Approved |
| FR-CR-03 | 1.0 | Якщо first response не зафіксована до SLA due time, система має створити одну escalation event | Approved |
| FR-CR-04 | 1.0 | Система має відображати користувача, який зафіксував first response | Approved |
| FR-CR-05 | 1.0 | Після escalation event система має ініціювати in-app та email notification для Support Manager | Approved |
| FR-CR-06 | 1.0 | Monthly report має містити count of critical requests, number of first-response SLA breaches і average first-response time | Approved |
| FR-CR-07 | 1.0 | Система має зберігати escalation history для Critical Service Request | Approved |
| FR-CR-08 | 1.0 | Додавання critical flow не має змінювати поведінку current non-critical requests | Approved |

### Business rules

| ID | Rule | Status |
|---|---|---|
| BRULE-CR-01 | Enterprise plan сам по собі не надає право створювати Critical Service Request | Approved |
| BRULE-CR-02 | Customer eligibility визначається active 24/7 support entitlement | Approved |
| BRULE-CR-03 | User eligibility потребує permission `create_critical_request` | Approved |
| BRULE-CR-04 | Поле `reason` є обов’язковим для priority `Critical` | Approved |
| BRULE-CR-05 | Eligibility перевіряється в момент створення request | Approved for training baseline |
| BRULE-CR-06 | Existing non-critical requests не перекласифіковуються автоматично | Approved |

`BRULE-CR-05` слід окремо обговорити: у реальному проєкті timing eligibility check має бути явно підтверджений owner. У навчальному baseline він потрібен, щоб забезпечити однозначний handoff.

## 4. Застарілі формулювання

| Попереднє формулювання | Статус | Причина |
|---|---|---|
| Priority customer — будь-який enterprise customer | Superseded | Не відповідає approved entitlement rule |
| Enterprise plan надає доступ до Critical priority | Rejected | Надто широке eligibility |
| CRM list без contract entitlement є достатнім доказом eligibility | To clarify / not approved | Source-of-truth behavior потребує технічного підтвердження |

Застарілі формулювання не потрібно видаляти безслідно. Вони мають залишитися у version history або decision log із позначкою статусу.

## 5. Оновлені acceptance criteria для eligibility

1. Given клієнт має active 24/7 support entitlement і користувач має `create_critical_request`, when він створює заявку з priority `Critical` та заповнює `reason`, then система приймає заявку.
2. Given клієнт має enterprise plan, але не має active 24/7 support entitlement, when користувач намагається створити critical request, then система не дозволяє операцію.
3. Given клієнт має active entitlement, але користувач не має permission, when він намагається створити critical request, then система не дозволяє операцію.
4. Given клієнт не має active entitlement і користувач не має permission, then critical flow недоступний.
5. Eligibility перевіряється в момент створення request.
6. Existing non-critical flow залишається доступним відповідно до попередніх правил.

## 6. Еталонний change log entry

| Поле | Значення |
|---|---|
| Change ID | CR-014 |
| Baseline version | Requirements baseline 1.1 |
| Change summary | Eligibility для Critical Service Request змінено з непідтвердженого enterprise-based підходу на active 24/7 support entitlement |
| Reason | Enterprise plan не завжди містить 24/7 support |
| Affected requirements | BR-CR-01, FR-CR-01 |
| Affected business rules | BRULE-CR-01—03, BRULE-CR-05 |
| Affected backlog | SH-412; cross-cutting regression expectations |
| Decision reference | DR-014-01 |
| Approval | Approved in training scenario |
| Follow-up | QA coverage, CRM integration clarification, operational monitoring of eligibility dependency |

## 7. Еталонна traceability matrix після оновлення

| Business need / rule | Requirement | Jira | Очікуваний downstream handoff |
|---|---|---|---|
| Critical access only for eligible customer | BR-CR-01, FR-CR-01, BRULE-CR-02 | SH-412 | QA permission/entitlement matrix; Developer source-of-truth analysis; DevOps dependency monitoring |
| Authorized creator | FR-CR-01, BRULE-CR-03 | SH-412 | QA access scenarios; Developer authorization impact |
| Critical SLA | FR-CR-02 | SH-413 | QA boundary/time-zone tests; Developer SLA calculation; DevOps SLA alerts |
| Escalation | FR-CR-03, FR-CR-07 | SH-413, SH-414 | QA event/history tests; Developer idempotency; DevOps queue monitoring |
| Manager notification | FR-CR-05 | SH-414 | QA failure scenarios; Developer retry handling; DevOps alerting |
| Monthly metrics | BR-CR-03, FR-CR-06 | SH-415 | QA report coverage; Developer data design; DevOps dashboard alignment |
| Preserve current behavior | FR-CR-08 | SH-416 | Cross-role regression and compatibility |

## 8. Еталонний BA handoff

### Approved business rules

- Customer eligibility базується на active 24/7 support entitlement.
- User має мати `create_critical_request`.
- `reason` є обов’язковим.
- First-response SLA становить 15 хвилин у service calendar клієнта.
- Missed SLA створює одну escalation event.
- Support Manager отримує in-app та email notification.
- Existing non-critical flow не змінюється.

### Handoff для QA

Перевірити:

- entitlement active/inactive;
- permission present/absent;
- усі чотири комбінації entitlement × permission;
- empty reason;
- first response before/on/after SLA boundary;
- service calendar і time-zone behavior;
- duplicate escalation prevention;
- notification success/failure;
- escalation history;
- non-critical regression;
- monthly report metrics.

### Handoff для Developer

Уточнити та відобразити у technical design:

- source of truth для entitlement;
- behavior за unavailable або stale entitlement data;
- API representation priority `Critical`;
- mandatory `reason`;
- SLA calculation ownership;
- event idempotency;
- escalation history model;
- backward compatibility;
- historical reporting data.

### Handoff для DevOps

Врахувати:

- CRM/customer-profile dependency;
- configuration для critical feature;
- metrics critical request volume;
- alerts щодо SLA at risk/breached;
- notification delivery failures;
- feature-flag enablement;
- post-deployment checks;
- rollback triggers;
- runbook changes.

### Open decisions, які не слід приховувати

- точна UX-поведінка для unauthorized/ineligible user;
- behavior за unavailable entitlement source;
- report audience/export format;
- handling entitlement changes для already-open critical request;
- detailed notification retry policy;
- feature-flag rollout cohort.

## 9. Результат, достатній для завершення BA-4

- Оновлено не лише одну вимогу, а всі affected artifacts.
- Старе визначення не видалене без version history.
- Updated acceptance criteria відображають entitlement і permission.
- Traceability веде до backlog та downstream handoffs.
- Open decisions збережені.
- QA, Developer і DevOps отримують різний, рольово релевантний handoff.
- Видно, які частини результату створив Xplore, а які перевірив і погодив BA.

## 10. Типові помилки

- Замінено слово `enterprise` на `24/7`, але impact analysis не виконаний.
- Не оновлено acceptance criteria та Jira.
- Старе правило зникло без decision/version history.
- BA handoff є копією requirements baseline без рольового фокусу.
- Не враховано failure або stale-data behavior для entitlement source.
- Усі open questions помилково позначено `Resolved`.
- Xplore створює «чистий» baseline, у якому втрачено історію зміни.

# Підсумкова матриця результатів чотирьох сесій

| Сесія | Що створює слухач | Що перевіряє тренер | Що відкривається далі |
|---|---|---|---|
| BA-1 | Facts, conflicts, questions, draft requirements, glossary | Source fidelity, uncertainty handling, quality of questions | Canonical approved requirements |
| BA-2 | Epic, delivery-ready Jira items, AC, traceability, DoR status | Scope quality, testability, negative paths, dependencies | Accepted backlog baseline |
| BA-3 | Normalized CR, impact matrix, decision pack | Completeness of impact, governance, owners, separation of proposal and approval | Canonical approval |
| BA-4 | Updated baseline, business rules, change log, traceability, role handoffs | Consistency across affected artifacts and handoff quality | Capstone input |

# Загальні критерії оцінювання BA

Результат кожної сесії оцінюється за вісьмома критеріями:

| Критерій | Ознака якісного результату |
|---|---|
| Source fidelity | Факти можна простежити до конкретного матеріалу |
| Uncertainty management | Припущення, конфлікти та питання не маскуються |
| Requirement quality | Формулювання однозначні, ціннісні та перевірювані |
| Traceability | Є зв’язок між need, requirement, decision, backlog і change |
| Impact completeness | Враховано процес, правила, users, data, reporting та operations |
| Decision governance | Є options, recommendation, owner і status |
| Baseline consistency | Після approval оновлено всі affected artifacts |
| Human review | BA може пояснити, що було виправлено після відповіді Xplore |

# Межа використання цього ключа

Цей документ визначає canonical learning outcome, але не є production specification ServiceHub. У реальному проєкті значення SLA, eligibility policy, integration behavior, security rules, release scope та owners мають підтверджуватися фактичними корпоративними джерелами й уповноваженими decision owners.
