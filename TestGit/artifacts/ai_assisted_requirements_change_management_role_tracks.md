# AI-assisted Requirements and Change Management in SDLC

Навчальна програма з окремими треками для Business Analyst, QA, Developer та DevOps спеціалістів.

## 1. Концепція курсу

У командах, які одночасно підтримують декілька продуктів і проєктів, вимоги та рішення часто розподілені між специфікаціями, Jira, протоколами зустрічей, листуванням і технічною документацією. Change requests надходять у формулюваннях замовника, не містять повного контексту й потребують різної професійної обробки на кожному етапі SDLC.

Один і той самий change request створює різні робочі завдання:

- BA має відновити бізнес-контекст, структурувати зміну та визначити її функціональний вплив;
- QA має перевірити тестованість, визначити покриття й побудувати regression scope;
- Developer має оцінити технічну реалізованість, залежності, зміни в компонентах, API та даних;
- DevOps має оцінити вплив на середовища, deployment, конфігурацію, monitoring, rollback та експлуатацію.

Тому курс організований як **чотири незалежні рольові треки**, а не як спільні заняття для змішаної аудиторії. Кожен трек:

1. використовує спільний навчальний проєкт ServiceHub;
2. працює з рольовою версією проєктного пакета;
3. проходить повний цикл роботи з вимогою та change request;
4. створює власний набір професійних артефактів;
5. завершується окремим рольовим capstone;
6. не залежить від результатів іншої навчальної групи.

Xplore використовується як практичний інструмент для виконання AI-assisted workflows. Курс фокусується на професійній роботі з вимогами та змінами, а не на вивченні функцій окремого програмного продукту.

Основний принцип:

> Кожна коротка теоретична теза перетворюється на рольовий AI-workflow, який завершується перевіреним робочим артефактом.

## 2. Структура програми

Програма складається з чотирьох самостійних треків:

1. **Business Analyst Track**
2. **Quality Assurance Track**
3. **Developer Track**
4. **DevOps Track**

Кожен слухач проходить трек, що відповідає його професійній ролі.

Для Tech Lead, Solution Architect, Project Manager або Product Owner може бути сформований індивідуальний маршрут із вибраних занять, але вони не включаються до основних рольових груп.

## 3. Формат і тривалість

### Формат одного рольового треку

- 4 заняття по 3 академічні години;
- загальна тривалість для одного слухача — 12 академічних годин;
- 15–20% — коротка теорія та демонстрація;
- 65–70% — індивідуальні або парні лабораторії;
- 10–15% — review результатів і розбір помилок.

### Загальний обсяг проведення

Повний запуск усіх чотирьох треків включає:

- 16 рольових занять;
- 48 академічних годин роботи тренерів;
- окремий capstone у кожному треку.

Групи можуть навчатися паралельно або послідовно. Проведення одного треку не залежить від календаря інших треків.

### Логіка заняття

Кожне заняття проходить за однаковою схемою:

1. рольова робоча ситуація;
2. live-demo із використанням Xplore;
3. виконання workflow на навчальному пакеті;
4. перевірка результату за професійним checklist;
5. виправлення prompt або інструкції асистента;
6. збереження перевіреного шаблону в персональному AI Playbook.

### Самостійна практика

Після завершення свого треку слухач отримує 10 робочих днів доступу до навчального середовища. У цей період він:

- повторно проходить чотири workflows свого треку;
- виконує додаткові рольові кейси;
- вдосконалює prompt-шаблони;
- перевіряє власного асистента на контрольних запитах;
- готується до онлайн-тесту.

Самостійна практика та онлайн-тест не входять до 12 академічних годин треку.

## 4. Результати для слухача

Кожен слухач отримує:

- персональний AI Playbook із 8–12 перевіреними рольовими prompt- і workflow-шаблонами;
- прототип власного асистента, налаштований на рольовий корпус проєктних знань;
- набір шаблонів для роботи з вимогами та change requests у межах своєї ролі;
- рольовий impact-analysis checklist;
- правила перевірки результатів ШІ та перелік обов’язкових human-review points;
- завершений рольовий capstone на матеріалах ServiceHub;
- доступ до навчального середовища на 10 робочих днів;
- онлайн-тест за тематикою пройденого треку;
- сертифікат як додатковий бонус у разі успішного проходження тесту.

## 5. Спільні правила для всіх треків

Незалежно від ролі, слухач навчається:

- працювати лише з дозволеним проєктним контекстом;
- відрізняти факт із джерела від висновку, припущення та відкритого питання;
- вимагати від Xplore посилання на джерело або вказівку, що дані не визначені;
- не дозволяти асистенту вигадувати відсутні деталі;
- перевіряти актуальність версії документа;
- використовувати структурований prompt: роль → контекст → дія → формат → критерії якості;
- повторно перевіряти результат після зміни вхідних даних;
- фіксувати рішення людини, owner та approver;
- підтримувати traceability між вимогою, зміною та рольовими артефактами;
- не передавати секрети, credentials, персональні дані або необмежені production-логи.

## 6. Business Analyst Track

### Ціль треку

Скоротити час від отримання неструктурованої інформації замовника до погодженого requirements та change-management пакета.

### Workflow BA-1. Source Materials → Requirements Pack

Xplore допомагає:

1. виділити бізнес-цілі, факти, рішення та припущення;
2. витягнути функціональні й нефункціональні вимоги;
3. знайти дублікати та суперечності;
4. визначити відсутній контекст;
5. сформувати уточнюючі питання;
6. побудувати requirements table з traceability до джерел.

### Workflow BA-2. Requirement → Delivery-ready Backlog Item

Xplore допомагає:

1. сформувати user story або task description;
2. визначити scope та out of scope;
3. створити acceptance criteria;
4. додати бізнес-правила, edge cases і залежності;
5. позначити відкриті питання;
6. виконати Definition of Ready review.

### Workflow BA-3. Change Request → Business Impact and Decision Pack

Xplore допомагає:

1. нормалізувати повідомлення замовника;
2. визначити мету, trigger і бажаний результат;
3. відрізнити change request від дефекту або уточнення;
4. знайти пов’язані вимоги та рішення;
5. сформувати функціональну impact matrix;
6. порівняти варіанти реалізації;
7. підготувати decision record для approval.

### Workflow BA-4. Approved Change → Updated Requirements Baseline

Xplore допомагає:

- оновити вимоги й acceptance criteria;
- визначити створені, змінені та скасовані положення;
- оновити Jira tasks і traceability;
- підготувати handoff для QA, Dev і DevOps;
- перевірити, чи всі бізнес-рішення відображені в артефактах.

### Заняття BA-1. Від матеріалів замовника до вимог

**Коротка теорія**

- вибір режиму роботи: Q&A, аналіз, порівняння або генерація;
- структура role-specific prompt;
- факт, рішення, припущення та питання;
- правила роботи з неповними й суперечливими джерелами.

**Live-demo**

З протоколу зустрічі, листування та фрагмента специфікації Xplore формує requirements table і список уточнюючих питань.

**Практика**

- витягнути вимоги;
- класифікувати їх;
- знайти конфлікти;
- додати джерело до кожного твердження;
- визначити блокери;
- покращити prompt після review.

**Результат**

Requirements pack і два перевірені prompt-шаблони.

### Заняття BA-2. Якість вимог, Jira tasks і traceability

**Коротка теорія**

- completeness, consistency, clarity та feasibility review;
- структура delivery-ready backlog item;
- acceptance criteria та Definition of Ready;
- traceability між джерелом, вимогою, задачею та рішенням.

**Live-demo**

Xplore перетворює погоджену вимогу на Jira task, виконує self-review і показує пропущені елементи.

**Практика**

- провести requirements health check;
- виправити неоднозначні формулювання;
- створити 3–5 Jira tasks;
- сформувати acceptance criteria;
- побудувати traceability matrix.

**Результат**

Requirements quality report, backlog fragment і traceability matrix.

### Заняття BA-3. Change request та функціональний impact analysis

**Коротка теорія**

- intake → normalize → clarify → assess → decide;
- baseline і version control;
- варіанти рішення та approval;
- межі відповідальності BA в impact analysis.

**Live-demo**

Із короткого запиту на Critical Service Request Xplore створює структурований CR, уточнюючі питання, функціональну impact matrix та decision pack.

**Практика**

- структурувати неповний CR;
- відокремити відомі факти від припущень;
- знайти пов’язані вимоги;
- оцінити вплив на ролі, процеси, дані, інтеграції та backlog;
- підготувати три варіанти рішення;
- сформувати матеріал для approval.

**Результат**

Структурований CR, functional impact matrix і decision record.

### Заняття BA-4. Оновлення baseline та BA capstone

**Практика**

Після отримання approval та нового обмеження слухач:

1. оновлює requirements baseline;
2. коригує acceptance criteria;
3. оновлює Jira tasks;
4. формує change log;
5. готує role-specific handoff;
6. перевіряє повноту оновлення;
7. демонструє свій workflow і human-review points.

**Результат**

Оновлений BA delivery pack і персональний BA AI Playbook.

## 7. Quality Assurance Track

### Ціль треку

Скоротити час від отримання вимоги або change request до перевіреного test-design, regression та test-readiness пакета.

### Workflow QA-1. Requirement → Testability Review

Xplore допомагає:

1. знаходити неоднозначні й нетестовані формулювання;
2. визначати відсутні preconditions і expected results;
3. знаходити пропущені negative, boundary та permission scenarios;
4. формувати питання до BA або Product Owner;
5. оцінювати ризик кожної прогалини.

### Workflow QA-2. Requirement → Test Pack

Xplore допомагає:

1. побудувати test conditions;
2. створити happy-path, negative та boundary cases;
3. визначити API, UI, integration і data scenarios;
4. підготувати синтетичні тестові дані;
5. зв’язати тести з вимогами й acceptance criteria;
6. перевірити покриття.

### Workflow QA-3. Change Request → Regression Impact

Xplore допомагає:

1. порівняти стару та нову requirements baseline;
2. знайти змінені бізнес-правила;
3. визначити affected test cases;
4. сформувати regression scope;
5. знайти застарілі або відсутні тести;
6. оцінити ризики й пріоритет виконання.

### Workflow QA-4. Approved Change → Updated QA Pack

Xplore допомагає:

- оновити test cases і test data;
- підготувати test-readiness checklist;
- перевірити coverage gaps;
- оформити defect report;
- відрізнити дефект від нового change request;
- підготувати QA status для release decision.

### Заняття QA-1. Testability review вимог

**Коротка теорія**

- ознаки тестованої вимоги;
- критерії testability review;
- маркування невизначеності;
- запобігання хибному тестовому покриттю.

**Live-demo**

Xplore аналізує вимогу Critical Service Request і знаходить відсутні preconditions, SLA rules, permission rules та expected results.

**Практика**

- виконати testability review;
- сформувати питання до BA;
- ранжувати проблеми за ризиком;
- виправити acceptance criteria;
- перевірити результат за checklist.

**Результат**

Testability report і набір уточнюючих питань.

### Заняття QA-2. Test design, тестові дані та coverage

**Коротка теорія**

- перехід від acceptance criteria до test conditions;
- coverage за рівнями та типами тестування;
- обмеження генерації тестових даних;
- traceability вимога → критерій → тест.

**Live-demo**

Xplore створює test pack для критичних заявок і окремо перевіряє його на пропущені сценарії.

**Практика**

- створити functional, API та integration scenarios;
- додати negative і boundary cases;
- підготувати синтетичні дані;
- побудувати coverage matrix;
- знайти дублікати та прогалини.

**Результат**

Role-specific test pack, test data set і coverage matrix.

### Заняття QA-3. Change request та regression impact

**Коротка теорія**

- зміна baseline як джерело regression scope;
- прямий і непрямий вплив;
- risk-based prioritization;
- дефект, уточнення або новий change request.

**Live-demo**

Xplore порівнює дві версії вимог, знаходить affected tests і створює regression impact report.

**Практика**

- визначити змінені правила;
- знайти impacted tests;
- позначити застарілі test cases;
- сформувати regression scope;
- визначити тестові ризики;
- перевірити готовність середовища та даних.

**Результат**

Regression impact report і оновлений regression checklist.

### Заняття QA-4. Test readiness та QA capstone

**Практика**

Після approval і появи нового обмеження слухач:

1. оновлює test pack;
2. коригує test data;
3. визначає новий regression scope;
4. оформлює один дефект;
5. класифікує один спірний кейс як defect або change request;
6. готує test-readiness conclusion;
7. демонструє workflow і правила human review.

**Результат**

Оновлений QA delivery pack і персональний QA AI Playbook.

## 8. Developer Track

### Ціль треку

Скоротити час від отримання погодженої вимоги або change request до технічно обґрунтованого implementation plan і готового до розробки technical delivery pack.

Xplore у цьому треку використовується для аналізу й структурування технічного контексту. Він не замінює інженерне рішення, code review або виконання змін у репозиторії.

### Workflow DEV-1. Requirement → Technical Clarification

Xplore допомагає:

1. виділити технічно значущі вимоги;
2. знайти відсутні interface, data, performance і security constraints;
3. сформувати питання до BA, QA та архітектора;
4. відрізнити бізнес-рішення від технічного припущення;
5. перевірити відповідність acceptance criteria технічному контексту.

### Workflow DEV-2. Requirement → Implementation Plan

Xplore допомагає:

1. визначити affected components;
2. декомпозувати роботу на technical tasks;
3. описати зміни API та data model;
4. виявити залежності;
5. сформувати edge cases і failure scenarios;
6. підготувати implementation checklist;
7. створити чернетку ADR або technical decision record.

### Workflow DEV-3. Change Request → Technical Impact Analysis

Xplore допомагає:

1. порівняти стару й нову baseline;
2. визначити вплив на компоненти, API, дані та інтеграції;
3. перевірити backward compatibility;
4. виявити потребу в migration, feature flag або fallback;
5. оцінити технічні ризики;
6. сформувати варіанти реалізації для review.

### Workflow DEV-4. Approved Change → Updated Technical Pack

Xplore допомагає:

- оновити technical tasks;
- скоригувати API contract і data-model notes;
- сформувати migration checklist;
- оновити ADR;
- підготувати code-review checklist;
- перевірити відповідність implementation plan погодженим вимогам;
- підготувати handoff для QA та DevOps.

### Заняття DEV-1. Технічний аналіз вимог

**Коротка теорія**

- business context проти implementation context;
- технічно значущі обмеження;
- робота Xplore з архітектурною та API-документацією;
- правила human review для інженерних висновків.

**Live-demo**

Xplore зіставляє вимогу Critical Service Request із component map, API specification та data model і формує technical clarification list.

**Практика**

- виділити affected capabilities;
- знайти відсутні constraints;
- сформувати питання;
- позначити технічні припущення;
- перевірити acceptance criteria на реалізованість.

**Результат**

Technical clarification report і два Dev prompt-шаблони.

### Заняття DEV-2. Декомпозиція та implementation plan

**Коротка теорія**

- component-level decomposition;
- API, data та integration contracts;
- technical tasks і залежності;
- ADR та implementation checklist.

**Live-demo**

Xplore створює implementation plan для Critical Service Request і перевіряє його на пропущені компоненти та failure scenarios.

**Практика**

- визначити affected components;
- створити technical task breakdown;
- описати API та data changes;
- побудувати dependency map;
- сформувати technical acceptance checklist;
- підготувати чернетку ADR.

**Результат**

Implementation plan, technical backlog і draft ADR.

### Заняття DEV-3. Change request та технічний impact analysis

**Коротка теорія**

- direct і transitive impact;
- backward compatibility;
- database migration;
- feature flags і fallback;
- технічний ризик та невизначеність.

**Live-demo**

Xplore порівнює baseline до й після change request і створює technical impact matrix.

**Практика**

- визначити affected services і interfaces;
- знайти compatibility risks;
- підготувати migration options;
- визначити потребу у feature flag;
- порівняти варіанти реалізації;
- сформувати питання для technical approval.

**Результат**

Technical impact matrix і reviewed solution options.

### Заняття DEV-4. Implementation readiness та Dev capstone

**Практика**

Після approval і додаткового production-обмеження слухач:

1. оновлює implementation plan;
2. коригує technical tasks;
3. оновлює API та data-model notes;
4. формує migration і compatibility checklist;
5. оновлює ADR;
6. готує handoff для QA та DevOps;
7. проводить implementation-readiness review.

**Результат**

Technical delivery pack і персональний Developer AI Playbook.

## 9. DevOps Track

### Ціль треку

Скоротити час від отримання вимоги або change request до перевіреного operational-impact, release та operational-readiness пакета.

### Workflow OPS-1. Requirement → Operational Requirements

Xplore допомагає:

1. виділити availability, performance, security та supportability requirements;
2. знайти відсутні SLI, SLO, thresholds і operational owners;
3. зіставити вимогу з service catalog, runbook і topology;
4. сформувати питання до BA, Dev та архітектора;
5. позначити непідтверджені припущення.

### Workflow OPS-2. Change Request → Operational Impact

Xplore допомагає:

1. визначити affected environments і services;
2. оцінити config, secrets, infrastructure та capacity impact;
3. знайти зміни у monitoring і alerting;
4. визначити deployment constraints;
5. сформувати operational impact matrix;
6. підготувати питання для release planning.

### Workflow OPS-3. Approved Change → Deployment and Rollback Plan

Xplore допомагає:

1. структурувати deployment steps;
2. сформувати pre-deployment і post-deployment checks;
3. визначити feature-flag strategy;
4. підготувати rollback criteria та procedure;
5. перевірити zero-downtime і compatibility constraints;
6. створити draft release communication.

### Workflow OPS-4. Release or Incident → Updated Operations Pack

Xplore допомагає:

- оновити runbook;
- скоригувати monitoring і alert thresholds;
- підготувати operational readiness checklist;
- зіставити нову зміну з попередніми інцидентами;
- сформувати incident-response questions;
- перевірити повноту release та support documentation.

### Заняття OPS-1. Операційний контекст вимог

**Коротка теорія**

- operational requirements;
- service context і залежності;
- Q&A по runbooks та deployment documentation;
- безпечна робота з конфігураціями й логами.

**Live-demo**

Xplore зіставляє вимогу Critical Service Request із service catalog, deployment guide та runbook і формує operational clarification list.

**Практика**

- знайти operational requirements;
- визначити відсутні SLO і thresholds;
- сформувати питання;
- перевірити власників і залежності;
- позначити дані, які не можна передавати асистенту.

**Результат**

Operational requirements report і два DevOps prompt-шаблони.

### Заняття OPS-2. Infrastructure, configuration та observability impact

**Коротка теорія**

- середовища та configuration impact;
- IaC і deployment dependencies;
- monitoring, logging та alerting;
- capacity і security considerations.

**Live-demo**

Xplore створює operational impact matrix і знаходить пропущені monitoring та configuration changes.

**Практика**

- визначити affected environments;
- знайти config та IaC impact;
- визначити нові metrics і alerts;
- оцінити capacity та security risks;
- підготувати operational questions.

**Результат**

Operational impact matrix і observability change list.

### Заняття OPS-3. Deployment, rollback і release readiness

**Коротка теорія**

- deployment strategy;
- feature flags;
- backward compatibility;
- rollback triggers;
- go/no-go evidence.

**Live-demo**

Xplore створює deployment і rollback plan, після чого виконує operational self-review.

**Практика**

- підготувати deployment checklist;
- визначити pre- та post-deployment checks;
- сформувати rollback criteria;
- перевірити zero-downtime constraint;
- підготувати release status update.

**Результат**

Deployment plan, rollback plan і draft release checklist.

### Заняття OPS-4. Operational readiness та DevOps capstone

**Практика**

Після approval і появи нового операційного обмеження слухач:

1. оновлює operational impact matrix;
2. коригує deployment та rollback plans;
3. оновлює monitoring і alerting;
4. вносить зміни до runbook;
5. зіставляє ризики з incident postmortem;
6. готує go/no-go recommendation;
7. демонструє workflow і human-review points.

**Результат**

Operational readiness pack і персональний DevOps AI Playbook.

## 10. Самостійна практика

Протягом 10 робочих днів слухач:

- повторно проходить workflows свого треку;
- працює з двома додатковими change requests ServiceHub;
- тестує prompt-шаблони на повному, неповному та суперечливому контексті;
- доопрацьовує власного асистента;
- веде журнал «помилка → причина → зміна prompt або інструкції»;
- повторює правила безпеки та human review;
- готується до онлайн-тесту.

## 11. Сертифікаційний онлайн-тест

Після періоду самостійної практики слухач проходить стандартизований онлайн-тест за тематикою свого треку.

### Формат

- 30 запитань;
- 45 хвилин;
- один або кілька правильних варіантів відповіді;
- прохідний бал — 75%;
- випадковий порядок запитань;
- щонайменше дві рівноцінні версії;
- одна повторна спроба протягом 5 робочих днів.

### Структура

- 10 спільних запитань: AI-workflows, prompt structure, робота з джерелами, невизначеність, безпека та human review;
- 20 рольових запитань за треком BA, QA, Developer або DevOps.

### Що перевіряється

**BA**

- extraction і review вимог;
- Jira task readiness;
- change request clarification;
- functional impact і requirements baseline.

**QA**

- testability;
- test design і coverage;
- regression impact;
- defect versus change request;
- test readiness.

**Developer**

- technical clarification;
- decomposition;
- API, data та integration impact;
- backward compatibility;
- implementation readiness.

**DevOps**

- operational requirements;
- environment та configuration impact;
- observability;
- deployment і rollback;
- operational readiness.

Сертифікат надається як додатковий бонус за успішне проходження тесту та підтверджує практичне використання Xplore під час навчання. Сертифікат не є основною ціллю курсу.

## 12. Навчальний пакет

Навчальний пакет складається зі спільного ядра та чотирьох рольових модулів.

### Спільне ядро

- опис ServiceHub;
- stakeholder map і glossary;
- requirements baseline;
- основний change request;
- decision log;
- release context;
- документи з навмисними конфліктами;
- правила роботи з даними;
- canonical handoff-артефакти.

### BA-модуль

- протоколи зустрічей;
- листування;
- business requirements;
- Jira backlog;
- шаблони requirements і change-management артефактів.

### QA-модуль

- acceptance criteria;
- test plan;
- test cases;
- coverage matrix;
- defect reports;
- test data;
- дві версії requirements baseline.

### Developer-модуль

- component map;
- architecture overview;
- API specification;
- data model;
- integration contracts;
- coding та technical documentation standards;
- ADR;
- technical backlog.

### DevOps-модуль

- service catalog;
- environment topology;
- CI/CD overview;
- configuration inventory;
- IaC fragments;
- deployment guide;
- monitoring та alerting rules;
- runbook;
- incident postmortem.

## 13. Метрики ефективності

### BA

- час від матеріалів замовника до першої версії requirements pack;
- частка вимог, що проходять review без повторного циклу;
- час підготовки change impact і decision pack.

### QA

- час підготовки test design;
- частка вимог із повним traceability до тестів;
- кількість пропущених regression areas;
- час підготовки test-readiness conclusion.

### Developer

- час до готового implementation plan;
- кількість технічних питань, виявлених до початку розробки;
- частка change requests із повною component-level impact matrix;
- кількість rework, спричиненого пропущеними залежностями.

### DevOps

- час підготовки operational impact;
- частка змін із визначеними monitoring і rollback actions;
- кількість release blockers, виявлених до deployment;
- час актуалізації runbook і release documentation.

## 14. Обмеження та правила використання

- Результат Xplore не вважається підтвердженим без перевірки джерела або відповідного спеціаліста.
- Кожен трек має власні обов’язкові human-review points.
- Xplore не приймає бізнесові, тестові, технічні або production-рішення автономно.
- Конфлікт між джерелами фіксується як проблема, а не вирішується мовчазним вибором одного документа.
- До навчального середовища не завантажуються секрети, credentials, персональні дані, приватні ключі або необмежені production-логи.
- Для технічних рекомендацій обов’язковий review Developer, Tech Lead або Architect.
- Для deployment і production-рішень обов’язковий review відповідального DevOps/SRE та зафіксований approver.
- Після approval зміни кожна роль перевіряє актуальність власного набору артефактів.

