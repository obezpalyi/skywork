# ServiceHub — Shared Core Training Package

## Призначення пакета

Цей пакет є спільним стартовим контекстом для навчальної програми **AI-assisted Requirements and Change Management in SDLC**. Він використовується в окремих треках Business Analyst, Quality Assurance, Developer і DevOps.

Пакет не передбачає спільних занять. Кожна рольова група використовує однаковий контекст ServiceHub, але виконує власні вправи, працює з окремим рольовим пакетом і створює лише профільні результати.

## Правила роботи з матеріалами

Під час усіх вправ слухачі працюють за таким підходом:

1. Відокремлюють факти з наданих матеріалів від припущень.
2. Не додають відсутні деталі без явного маркування.
3. Формують уточнювальні запитання, коли інформації недостатньо.
4. Використовують Xplore для прискорення аналізу, структурування, порівняння та підготовки чернеток.
5. Перевіряють результати професійним checklist перед передаванням далі.
6. Фіксують рішення людини та оновлюють усі артефакти, на які впливає approved change.

## Продуктовий контекст

**ServiceHub** — B2B-портал для управління сервісними запитами корпоративних клієнтів.

Система підтримує:

- авторизацію користувачів і ролі;
- створення сервісних запитів;
- вибір категорії, продукту та пріоритету;
- опис, коментарі й вкладення;
- відстеження статусу;
- призначення заявки спеціалісту підтримки;
- SLA-контроль;
- email-сповіщення;
- ескалацію прострочених заявок;
- звіти;
- інтеграцію з CRM і Microsoft Teams;
- audit log;
- monitoring, alerting та operational runbooks.

## Модель ролей

| Роль | Основна відповідальність |
|---|---|
| Corporate Requester | Створює та відстежує сервісні запити |
| Support Agent | Обробляє, уточнює та виконує запити |
| Support Manager | Контролює SLA, ескалації та командне навантаження |
| Account Manager | Веде комунікацію з пріоритетними клієнтами |
| System Administrator | Адмініструє доступи й конфігурацію |
| Product Owner | Приймає бізнесові рішення щодо scope та пріоритетів |
| Delivery Team | Реалізує, тестує, розгортає та супроводжує зміни |

## Поточний стан ServiceHub 1.4

На старті навчального проєкту ServiceHub вже працює у production, але документація та робочі артефакти неповні:

- різні корпоративні клієнти працюють за різними SLA;
- частина вимог доступна у специфікації, частина — лише в протоколах і листуванні;
- Jira backlog містить задачі різної якості;
- API-документація не повністю відповідає реалізації;
- тестова документація має застарілі сценарії;
- deployment guide і runbook оновлювалися нерегулярно;
- monitoring не повністю покриває бізнес-критичні процеси;
- architecture decision log має прогалини.

## Системний контекст

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

Ця схема достатня для requirements, test, technical та operational impact analysis. Вона не передбачає вивчення повного production-коду.

## Базовий процес обробки заявки

1. Corporate Requester створює заявку в Web Portal.
2. API Gateway передає запит у Ticket Service.
3. Ticket Service перевіряє дані клієнта через Customer Profile Service.
4. Для заявки застосовується відповідний SLA.
5. Support Agent отримує заявку для обробки.
6. Notification Service надсилає сповіщення.
7. SLA and Escalation Service контролює час реакції та ескалації.
8. Події фіксуються в Audit Service.
9. Reporting Service агрегує дані для звітів.
10. Monitoring platform збирає технічні й операційні сигнали.

## Основний change request

### Critical Service Request

Початкове повідомлення замовника:

> Нам необхідно, щоб пріоритетні клієнти могли створювати критичні заявки. Такі заявки мають оброблятися швидше, автоматично ескалюватися та бути видимими відповідальним менеджерам. Бажано реалізувати це до наступного релізу.

### Відомі невизначеності

| Напрям | Що ще не визначено |
|---|---|
| Бізнес | Визначення пріоритетного клієнта, creator permissions, approval, SLA, recipients сповіщень, scope найближчого release |
| QA | Permission combinations, SLA boundary values, failure scenarios, time zones, потрібні mocks, regression scope |
| Development | Component ownership, API і data changes, migration, compatibility, escalation pattern, idempotency, feature flag |
| Operations | Environment/configuration impact, secrets/endpoints, metrics/alerts, zero-downtime, rollback triggers, capacity, runbook changes |

## Спільні терміни

| Термін | Робоче визначення |
|---|---|
| Critical Service Request | Заявка з особливим рівнем терміновості та окремою логікою обробки |
| Priority Customer | Клієнт, для якого застосовуються підвищені умови обслуговування; точні критерії потребують підтвердження |
| Baseline | Погоджена версія артефактів, що використовується як контрольна точка |
| Change Request | Запит на зміну продукту, процесу, вимоги, технічного або операційного рішення |
| Impact Analysis | Аналіз того, які артефакти, компоненти, тести, середовища або процедури мають бути змінені |
| Canonical Handoff Artifact | Контрольний погоджений артефакт, який тренер відкриває після виконання вправи |

## Універсальний AI-assisted workflow

Усі рольові треки використовують спільний цикл:

1. **Зрозуміти контекст** — зібрати доступні факти та позначити невизначеності.
2. **Сформувати робочий результат** — використати Xplore для extraction, analysis, generation або comparison.
3. **Перевірити результат** — застосувати рольовий checklist.
4. **Прийняти рішення** — зафіксувати human decision, owner і статус.
5. **Оновити baseline** — синхронізувати пов’язані артефакти після approval.
6. **Підготувати handoff** — передати результат у зрозумілій, перевірюваній формі.

## Change log

| ID | Назва | Статус | Власник рішення |
|---|---|---|---|
| CR-014 | Critical Service Request | In analysis | Product Owner |
| CR-015 | Corporate SSO | Practice scenario | Product Owner |
| CR-016 | Attachment size increase | Practice scenario | Product Owner |
| CR-017 | Attachment retention policy | Practice scenario | Compliance Owner |
| CR-018 | Microsoft Teams notifications | Practice scenario | Support Manager |
| CR-019 | SLA dashboard | Practice scenario | Support Manager |
| CR-020 | Subsidiary access | Practice scenario | Product Owner |
| CR-021 | Regional and time-zone SLA | Practice scenario | Support Manager |
| CR-022 | Bulk ticket update | Practice scenario | Product Owner |
| CR-023 | Audit export | Practice scenario | Compliance Owner |
| CR-024 | External API rate limiting | Practice scenario | Technical Owner |

## Навчальні обмеження

- Xplore є засобом виконання AI-assisted workflows, а не заміною професійного рішення.
- Відповіді Xplore не вважаються verified facts без перевірки в наданих матеріалах.
- Слухач не має вигадувати бізнес-правила, технічні деталі або operational policy.
- Усі висновки повинні містити посилання на джерело, позначку припущення або уточнювальне питання.
- Handoff між ролями оцінюється за повнотою, traceability і зрозумілістю, а не за обсягом тексту.

## Очікуваний спільний результат

Після проходження власного треку слухач має вміти застосувати AI-assisted workflow до вимоги або change request: виявити прогалини, створити рольовий артефакт, перевірити його, зафіксувати рішення та оновити affected baseline.

Наступним матеріалом для слухача є рольовий пакет: BA, QA, Developer або DevOps.
