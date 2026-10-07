# ServiceHub — Quality Assurance Training Package

## Призначення

Цей пакет призначений для треку **Quality Assurance** курсу **AI-assisted Requirements and Change Management in SDLC**. Він допомагає застосовувати Xplore для testability review, підготовки test pack, роботи з тестовими даними, аналізу регресійного впливу та оновлення тестового baseline.

Перед початком використайте документ **ServiceHub — Shared Core Training Package**.

## Рольова мета

До завершення треку слухач уміє:

- знаходити нетестовні, неповні та неоднозначні формулювання у вимогах;
- перетворювати погоджені вимоги на test conditions і тестові сценарії;
- планувати synthetic test data;
- забезпечувати traceability між вимогами, тестами та дефектами;
- аналізувати regression impact change request;
- формувати test-readiness conclusion на основі evidence.

## Canonical requirements extract

### Погоджені умови для вправ

Для початкових вправ використовуйте такі контрольні умови:

1. Critical Service Request можуть створювати лише користувачі клієнта з активним 24/7 support entitlement і дозволом `create_critical_request`.
2. Під час створення critical request користувач обирає priority `Critical`; поле reason є обов’язковим.
3. SLA першої реакції для critical request — 15 хвилин у межах service calendar клієнта.
4. Якщо Support Agent не підтвердив прийняття заявки в межах SLA, система створює escalation event.
5. Support Manager отримує in-app та email notification про escalation event.
6. Для кожної critical request зберігається escalation history.
7. Monthly report показує кількість critical request, порушення SLA та середній час першої реакції.
8. Existing non-critical tickets не мають змінювати свою поведінку.

### Acceptance criteria fragment

| ID | Acceptance criterion |
|---|---|
| AC-01 | Authorized requester може створити заявку з priority `Critical` лише для клієнта з активним 24/7 support entitlement |
| AC-02 | Система вимагає поле reason для Critical Service Request |
| AC-03 | Після успішного створення запиту заявка має статус `New` і позначку `Critical` |
| AC-04 | Якщо перша реакція не зафіксована за 15 хвилин service calendar, створюється escalation event |
| AC-05 | Support Manager отримує notification не пізніше ніж через 1 хвилину після створення escalation event |
| AC-06 | Monthly report містить agreed set of critical-request metrics |
| AC-07 | Existing non-critical request flow працює без функціональних змін |

## Навмисні проблеми для виявлення

- AC-06 не визначає повний набір report fields, період або audience.
- Не визначено поведінку за відсутності Support Manager.
- Не визначено UX для користувача без permission.
- Не визначено, як обробляється зміна entitlement під час already-open critical request.
- Не визначено точний time-zone source для service calendar.
- Не визначено error handling для Notification Service.
- Не зазначено, як перевіряється збереження escalation history.
- Не описано навантажувальні межі для одночасних critical requests.

## Сесія QA-1 — Requirement → Testability Review

### Завдання

Проведіть testability review для canonical requirements і acceptance criteria. Використайте Xplore для первинного пошуку неоднозначностей, але підтвердіть кожен висновок вручну.

### Шаблон testability report

| ID | Requirement / AC | Проблема | Ризик | Уточнення | Пріоритет |
|---|---|---|---|---|---|
| TR-01 | N/A | N/A | N/A | N/A | N/A |

### Орієнтири review

Перевірте:

- measurable expected results;
- preconditions;
- roles і permissions;
- positive, negative та boundary paths;
- time-based behavior;
- integration failure handling;
- data persistence;
- reporting verification;
- backward compatibility;
- observability evidence, потрібне для перевірки.

### Приклад prompt pattern

> Проаналізуй acceptance criteria. Для кожного пункту виділи: тестовану поведінку, відсутні передумови, неоднозначні терміни, потрібні boundary та negative scenarios. Не доповнюй вимогу припущеннями; позначай їх окремо як питання.

## Сесія QA-2 — Requirement → Test Pack

### Завдання

Створіть test pack для погоджених вимог. Він має охоплювати UI, API, інтеграційні, негативні та регресійні сценарії.

### Мінімальні test conditions

| Область | Test condition |
|---|---|
| Eligibility | Клієнт з активним / неактивним 24/7 support entitlement |
| Permissions | Користувач з `create_critical_request`, без нього, з неактуальним доступом |
| Data entry | Valid / empty / invalid `reason` |
| SLA | Реакція до, на межі та після 15 хвилин |
| Service calendar | Робочий час, позаробочий час, різні часові пояси |
| Escalation | Створення, дублювання, повторна доставка події |
| Notifications | Success, delay, failure, відсутній recipient |
| History | Збереження та відображення escalation history |
| Reporting | Період, показники, filters, zero-result case |
| Compatibility | Non-critical flow до та після зміни |

### Шаблон test case

| Поле | Вміст |
|---|---|
| Test ID | N/A |
| Requirement / AC reference | N/A |
| Назва | N/A |
| Preconditions | N/A |
| Test data | N/A |
| Steps | N/A |
| Expected result | N/A |
| Type | N/A |
| Priority | N/A |
| Automation candidate | N/A |

### Шаблон coverage matrix

| Requirement / AC | UI | API | Integration | Negative | Boundary | Regression |
|---|---|---|---|---|---|---|
| AC-01 | N/A | N/A | N/A | N/A | N/A | N/A |

### Synthetic test data plan

| Dataset | Purpose | Key attributes | Safety requirement |
|---|---|---|---|
| TD-01 | Authorized priority customer | active entitlement, valid permission | Synthetic only |
| TD-02 | Ineligible enterprise customer | enterprise plan, no 24/7 entitlement | Synthetic only |
| TD-03 | Unauthorized requester | active entitlement, no permission | Synthetic only |
| TD-04 | Time-zone scenario | client calendar, time zone, support window | Synthetic only |
| TD-05 | Escalation failure scenario | notification failure flag | Synthetic only |

## Сесія QA-3 — Change Request → Regression Impact

### Baseline comparison

У baseline v1.0 priority customer визначався як enterprise customer. У baseline v1.1 priority customer визначається як клієнт з активним 24/7 support entitlement.

### Завдання

1. Порівняйте два baseline.
2. Визначте affected test cases, datasets, integrations і regression areas.
3. Позначте застарілі або недостатні тести.
4. Розділіть regression scope на must-run, risk-based і unchanged.
5. Підготуйте regression impact report.

### Шаблон regression impact report

| Affected area | Зміна | Existing tests | Рішення щодо тестів | Ризик |
|---|---|---|---|---|
| Eligibility | N/A | N/A | N/A | N/A |
| Permissions | N/A | N/A | N/A | N/A |
| SLA | N/A | N/A | N/A | N/A |
| Reports | N/A | N/A | N/A | N/A |
| Integrations | N/A | N/A | N/A | N/A |
| Non-critical flow | N/A | N/A | N/A | N/A |

### Defect чи change request?

Класифікуйте ситуації:

| Ситуація | Рішення |
|---|---|
| Реалізований permission check не відповідає погодженому AC-01 | Defect |
| Замовник просить додати SMS сповіщення після approval поточного scope | Change Request |
| У вимозі не визначено behavior для відсутнього recipient | Clarification / requirement gap |
| Existing non-critical flow перестав працювати після зміни | Defect |
| Замовник змінює метрику звіту після тестового baseline | Change Request |

## Сесія QA-4 — Approved Change → Updated QA Pack

### Нове обмеження

Critical Service Request мають працювати для клієнтів у кількох часових поясах, але acceptance criteria не оновлені.

### Завдання

1. Сформуйте testability questions до зміни.
2. Оновіть test conditions для service calendar і time zone.
3. Перевірте вплив на test data, automated tests і regression checklist.
4. Оновіть coverage matrix.
5. Підготуйте test-readiness conclusion.

### Шаблон test-readiness conclusion

| Перевірка | Статус | Evidence / gap | Власник |
|---|---|---|---|
| Requirements testable | N/A | N/A | N/A |
| Test conditions complete | N/A | N/A | N/A |
| Test data ready | N/A | N/A | N/A |
| Integration environment ready | N/A | N/A | N/A |
| Regression scope approved | N/A | N/A | N/A |
| Blocking gaps resolved | N/A | N/A | N/A |

## QA Capstone

### Ситуація

Погоджена зміна додає регіональні SLA для Critical Service Request. Для частини клієнтів service calendar залежить від contract region, а historical reports мають зберігати SLA rule, що діяв у момент створення заявки.

### Виконайте

1. Проведіть testability review.
2. Побудуйте test design.
3. Сплануйте synthetic test data.
4. Визначте regression scope.
5. Знайдіть застарілі тести.
6. Класифікуйте defect/change request/clarification.
7. Сформуйте test-readiness conclusion.

### Фінальні артефакти QA

- testability report;
- test pack;
- synthetic test data plan;
- coverage matrix;
- regression impact report;
- updated test baseline;
- test-readiness conclusion;
- QA AI Playbook.

## QA AI Playbook

Додайте у власний playbook повторно придатні способи роботи:

- testability review із маркуванням requirement gaps;
- перетворення acceptance criteria на test conditions;
- генерація negative і boundary scenarios;
- пошук прогалин coverage;
- формування synthetic test-data matrix;
- порівняння requirements baseline;
- пошук regression impact;
- review defect description на reproduction quality.

## Самоперевірка

- Кожен тест має traceability до requirement або AC?
- Expected results вимірювані?
- Є negative, boundary та integration scenarios?
- Test data безпечні й достатні для permission combinations?
- Regression scope враховує залежні сервіси?
- Застарілі тести позначені або оновлені?
- Test readiness базується на evidence, а не на припущенні?
