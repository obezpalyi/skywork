Current date: 2026-09-07
# AI-assisted Requirements and Change Management in SDLC — Developer Track

## Presentation purpose

This is the complete learning deck for the Developer role track. It consists of four independent three-academic-hour sessions. Each session contains six instructional slides, within the requirement of no more than ten slides per session.

The deck uses ServiceHub and the Critical Service Request change request as a continuous case. Xplore is used to analyze and structure technical context. It does not replace engineering judgment, architecture approval, code review or repository-level verification.

## Slide 1. Course title

Title: AI-assisted Requirements and Change Management in SDLC

Subtitle: Developer Track

Key message: From approved requirement to a technically justified and review-ready implementation package.

## Slide 2. Why this track matters

Developers often receive backlog items that describe business intent but omit interface behavior, data constraints, failure scenarios, compatibility requirements and affected dependencies.

The track addresses:

- late technical clarification;
- incomplete task decomposition;
- hidden component and integration impact;
- inconsistent API and data documentation;
- missed backward-compatibility risks;
- unplanned migration or feature-flag needs;
- technical decisions that are not captured in an ADR;
- implementation rework caused by requirement changes.

## Slide 3. Learning route and final outputs

Four sessions:

1. Requirement → Technical Clarification.
2. Requirement → Implementation Plan.
3. Change Request → Technical Impact Analysis.
4. Approved Change → Updated Technical Pack.

Final outputs:

- technical clarification report;
- component impact map;
- implementation plan;
- technical backlog;
- API and data-change notes;
- compatibility and migration checklist;
- ADR;
- implementation-readiness conclusion;
- personal Developer AI Playbook.

# Session DEV-1. Technical analysis of requirements

## Slide 4. Session DEV-1: objectives and inputs

Inputs:

- canonical ServiceHub requirements pack;
- Jira backlog;
- system context diagram;
- component map;
- current API specification;
- current data model;
- integration map;
- known technical constraints.

Objectives:

- extract technically significant statements;
- identify missing implementation constraints;
- distinguish business decisions from technical assumptions;
- create questions for BA, QA, Architect and DevOps;
- verify that acceptance criteria are technically interpretable.

## Slide 5. Business context versus implementation context

Business context explains:

- why the capability is needed;
- who uses it;
- what outcome is expected;
- which business rules apply.

Implementation context explains:

- which components participate;
- what interfaces and data change;
- how failures are handled;
- which constraints apply;
- what must remain compatible;
- which dependencies and owners are involved.

The developer preserves the business intent while exposing missing technical detail.

## Slide 6. Reusable Developer prompt

Prompt structure:

1. Role — technical requirements reviewer.
2. Context — requirement, architecture, API, data and constraints.
3. Action — identify affected areas, unknowns and technical risks.
4. Output — evidence-based table and question list.
5. Quality criteria — no invention, source traceability and explicit assumptions.

Required instruction:

> Do not treat a plausible design idea as an approved technical decision. Mark it as an option or assumption and identify the required reviewer.

## Slide 7. Workflow DEV-1

Requirement → Technical Clarification:

1. identify technical capabilities implied by the requirement;
2. map them to current components;
3. inspect interface and data constraints;
4. identify missing performance and security expectations;
5. inspect error and recovery behavior;
6. check acceptance criteria for technical ambiguity;
7. formulate questions;
8. assign question owners and decision authorities.

## Slide 8. ServiceHub live-demo

Critical Service Request raises technical questions:

- where customer priority is determined;
- whether a new API priority value is needed;
- whether escalation history must be stored;
- whether notifications are synchronous or event-driven;
- how repeated events are handled;
- whether existing consumers accept the new payload;
- whether a feature flag is required.

Expected Xplore result separates:

- confirmed architecture facts;
- inferred impact;
- design options;
- unknowns;
- questions requiring human decisions.

## Slide 9. Practice and session result

Participant tasks:

- map the requirement to ServiceHub capabilities and components;
- identify missing interface, data, security and performance constraints;
- formulate technical questions;
- identify assumptions;
- verify acceptance criteria;
- improve the prompt after peer review.

Session result:

- technical clarification report;
- initial component impact map;
- prioritized technical-question register;
- two verified Developer prompt templates.

# Session DEV-2. Decomposition and implementation plan

## Slide 10. Session DEV-2: objectives and inputs

Inputs:

- approved requirement;
- canonical Jira backlog;
- component map;
- OpenAPI fragment;
- data model;
- event catalog;
- coding and documentation standards;
- current ADR.

Objectives:

- create a component-level implementation plan;
- decompose work into technical tasks;
- describe API, data and integration changes;
- expose dependencies and failure scenarios;
- prepare a decision for technical review.

## Slide 11. Component-level decomposition

For every affected component identify:

- responsibility;
- required behavior change;
- interface impact;
- data impact;
- dependency;
- failure mode;
- compatibility requirement;
- required test evidence;
- owner;
- unresolved decision.

For Critical Service Request, likely components include Ticket Service, Customer Profile Service, SLA and Escalation Service, Notification Service, Reporting Service and Audit Service.

## Slide 12. Workflow DEV-2

Requirement → Implementation Plan:

1. define the technical outcome;
2. identify affected components;
3. describe component changes;
4. specify API and event changes;
5. specify data-model changes;
6. identify dependencies;
7. create technical tasks;
8. add failure and recovery scenarios;
9. create an implementation checklist;
10. draft an ADR when a design decision is required.

## Slide 13. Technical backlog and dependencies

A technical task includes:

- context and linked requirement;
- component and owner;
- expected change;
- interface or data contract;
- constraints;
- dependency;
- technical acceptance checklist;
- required tests;
- documentation update;
- open question.

Dependencies are represented as a map, not only as text hidden in individual Jira tasks.

## Slide 14. API, data and event contracts

The implementation plan records:

- new or changed API fields;
- validation rules;
- default behavior for old clients;
- versioning approach;
- data migration;
- new state or history fields;
- event schema;
- idempotency;
- retries and duplicate handling;
- audit requirements.

Every proposed contract change requires Developer or Architect review.

## Slide 15. ADR and implementation options

Example decision: synchronous or event-driven escalation.

ADR elements:

- context;
- decision drivers;
- options;
- consequences;
- compatibility implications;
- operational implications;
- selected decision;
- status;
- approver.

Xplore structures the comparison. The engineering authority selects and approves the decision.

## Slide 16. Practice and session result

Participant tasks:

- identify affected components;
- create a technical task breakdown;
- document API, data and event changes;
- build a dependency map;
- describe failure scenarios;
- prepare an ADR draft;
- perform an independent plan review.

Session result:

- implementation plan;
- technical backlog;
- interface and data-change notes;
- draft ADR.

# Session DEV-3. Change request and technical impact analysis

## Slide 17. Session DEV-3: change context

Inputs:

- baseline before Critical Service Request;
- updated business baseline;
- current technical design;
- dependency inventory;
- known technical debt;
- compatibility constraints.

Objectives:

- compare old and new baselines;
- find direct and transitive impact;
- assess compatibility and migration;
- prepare implementation options;
- expose technical risks before development.

## Slide 18. Workflow DEV-3

Change Request → Technical Impact Analysis:

1. identify changed business rules;
2. map changes to components;
3. inspect API and event consumers;
4. inspect data and migration needs;
5. analyze backward compatibility;
6. analyze feature-flag and fallback needs;
7. identify technical debt interaction;
8. create risk and dependency records;
9. prepare implementation options for approval.

## Slide 19. Direct and transitive impact

Direct impact:

- new critical priority;
- new SLA and escalation rule;
- updated notifications;
- new reporting and audit behavior.

Transitive impact:

- clients consuming the Ticket API;
- dashboard calculations;
- CRM synchronization;
- event subscribers;
- data retention;
- ordinary ticket processing;
- retry behavior;
- operational alerts;
- test and deployment packages.

## Slide 20. Backward compatibility

Questions:

- can old API clients ignore the new field;
- is the new value valid for current consumers;
- what is the default behavior when priority data is absent;
- must event schema be versioned;
- are database changes additive;
- can old application instances coexist during rollout;
- what happens during rollback;
- does the feature flag protect all changed paths.

Compatibility claims require contract or implementation evidence.

## Slide 21. Migration, feature flags and fallback

Migration analysis covers:

- existing tickets;
- escalation history;
- default values;
- data backfill;
- online versus offline migration;
- validation and rollback;
- coexistence of application versions.

Feature-flag analysis covers:

- scope;
- default state;
- activation owner;
- rollback behavior;
- removal criteria;
- observability.

## Slide 22. Practice and session result

Participant tasks:

- compare two baselines;
- create a technical impact matrix;
- identify consumers and dependencies;
- analyze compatibility;
- propose migration and feature-flag approaches;
- compare solution options;
- prepare questions for technical approval.

Session result:

- technical impact matrix;
- compatibility and migration checklist;
- reviewed implementation options;
- updated risk register.

# Session DEV-4. Implementation readiness and Developer capstone

## Slide 23. Session DEV-4: approved decision and new constraint

Approved solution:

- Critical Service Request uses automatic escalation;
- events drive notifications and reporting;
- rollout uses a feature flag.

New constraint:

- API changes must remain backward-compatible;
- the database change must be deployed without downtime.

The developer must update the technical package and identify whether the approved design remains valid.

## Slide 24. Workflow DEV-4

Approved Change → Updated Technical Pack:

1. verify approved scope and ADR;
2. update component changes;
3. update technical tasks;
4. update API, event and data notes;
5. update migration approach;
6. update compatibility checklist;
7. update dependencies and risks;
8. prepare QA and DevOps handoffs;
9. perform implementation-readiness review.

## Slide 25. Technical handoff package

Handoff to QA includes:

- changed behavior and interfaces;
- error and fallback scenarios;
- compatibility rules;
- data migration expectations;
- feature-flag combinations;
- known risks.

Handoff to DevOps includes:

- deployment order;
- migration steps;
- configuration;
- feature-flag controls;
- required metrics and logs;
- rollback conditions.

## Slide 26. Developer capstone assignment

Using a new ServiceHub change, the participant:

1. creates technical clarification questions;
2. maps affected components;
3. creates an implementation plan;
4. documents API and data changes;
5. analyzes compatibility and migration;
6. prepares an ADR;
7. updates the package after a new constraint;
8. performs implementation-readiness review.

## Slide 27. Capstone review criteria

The result is successful when:

- business intent is preserved;
- assumptions and decisions are separated;
- affected components and consumers are identified;
- technical tasks are traceable;
- API, data and event impact is explicit;
- compatibility and migration risks are addressed;
- ADR status and approver are visible;
- QA and DevOps handoffs are complete;
- human-review points are explicit.

## Slide 28. Personal Developer AI Playbook

The playbook contains:

- technical-clarification prompt;
- acceptance-criteria feasibility prompt;
- component-impact prompt;
- technical-decomposition prompt;
- API-change prompt;
- data-model prompt;
- event-contract prompt;
- dependency-review prompt;
- compatibility prompt;
- migration prompt;
- solution-options prompt;
- ADR draft prompt;
- implementation-readiness checklist;
- prompt error log.

# Completion

## Slide 29. Self-practice, online test and course result

Self-practice:

- ten working days;
- repeat all four Developer workflows;
- process additional ServiceHub change requests;
- test prompts on incomplete and conflicting technical context;
- refine the assistant and Developer AI Playbook.

Online test:

- thirty questions in forty-five minutes;
- ten common questions on workflows, sources, safety and human review;
- twenty Developer questions on technical clarification, decomposition, API, data, compatibility, migration and readiness;
- passing score: seventy-five percent;
- one repeat attempt within five working days.

The certificate is an additional bonus after successful testing and confirms practical use of Xplore during the course.
