Current date: 2026-09-07
# AI-assisted Requirements and Change Management in SDLC — Business Analyst Track

## Presentation purpose

This is the complete learning deck for the Business Analyst role track. It consists of four independent three-academic-hour sessions. Each session contains six instructional slides, within the requirement of no more than ten slides per session.

The deck uses the ServiceHub B2B service-request portal and the Critical Service Request change request as a continuous learning case. Xplore is presented as the practical tool for executing repeatable AI-assisted workflows, while professional BA judgment, validation, ownership and approval remain with people.

## Slide 1. Course title

Title: AI-assisted Requirements and Change Management in SDLC

Subtitle: Business Analyst Track

Key message: From unstructured customer input to a controlled requirements and change-management package.

## Slide 2. Why this track matters

Business analysts often support multiple products where requirements are spread across specifications, Jira, meeting notes, email and chat. Change requests arrive in customer language without a complete scope, impact description or decision history.

The role track addresses:

- time spent reconstructing context;
- inconsistent or outdated requirements;
- repeated clarification cycles;
- incomplete Jira tasks;
- missed effects of a change;
- unrecorded decisions;
- weak traceability between sources, requirements, backlog and approvals.

## Slide 3. Learning route and final outputs

Four sessions:

1. Source Materials → Requirements Pack.
2. Requirement → Delivery-ready Backlog Item.
3. Change Request → Business Impact and Decision Pack.
4. Approved Change → Updated Requirements Baseline.

Final outputs:

- requirements pack;
- requirements quality report;
- Jira backlog fragment;
- functional impact matrix;
- decision record;
- updated requirements baseline;
- traceability matrix;
- personal BA AI Playbook.

# Session BA-1. From customer materials to requirements

## Slide 4. Session BA-1: objectives and inputs

Inputs from ServiceHub:

- kick-off meeting minutes;
- SLA workshop minutes;
- customer email;
- chat message;
- fragment of Business Requirements Document;
- fragment of Software Requirements Specification;
- glossary and stakeholder map.

Objectives:

- reconstruct the business context;
- separate facts, decisions, assumptions and questions;
- extract requirements without inventing missing information;
- preserve traceability to sources.

## Slide 5. Choosing the correct AI action

The BA chooses the action before composing the prompt:

- Q&A to locate a fact or previous decision;
- summarization to restore context;
- comparison to identify conflicts between sources or versions;
- analysis to find gaps, ambiguities and risks;
- transformation to create a structured requirements artifact.

Xplore should be asked to state:

- the source of each conclusion;
- the relevant document version;
- whether information is confirmed or missing;
- what requires human validation.

## Slide 6. Structure of a reusable BA prompt

Prompt structure:

1. Role — requirements analyst or requirements reviewer.
2. Context — project, feature, stakeholders and allowed documents.
3. Action — extract, compare, review or transform.
4. Output format — table, question list, Jira task or decision record.
5. Quality criteria — completeness, clarity, source traceability and no invention.

Required instruction:

> If information is missing or conflicting, do not resolve it silently. Mark it as not defined or conflicting and formulate a clarification question.

## Slide 7. Workflow BA-1

Source Materials → Requirements Pack:

1. identify the business objective;
2. extract requirements;
3. classify functional and non-functional requirements;
4. identify business rules;
5. separate facts, decisions, assumptions and open questions;
6. identify duplicates and contradictions;
7. create clarification questions;
8. build a requirements table with source traceability.

Human review points:

- correctness of interpretation;
- completeness of stakeholders and scope;
- validity of classifications;
- priority of questions;
- readiness for approval.

## Slide 8. ServiceHub live-demo

Training inconsistency:

- one document says the response time for critical requests is two hours;
- another document says four hours;
- the customer message only says requests must be handled faster.

Expected Xplore behavior:

- show both source statements;
- avoid selecting a convenient value;
- identify the conflict;
- explain the delivery risk;
- formulate a question for the authorized stakeholder;
- mark the requirement as blocked until a decision is recorded.

## Slide 9. Practice and session result

Participant tasks:

- extract business goals and requirements from the source package;
- identify at least five missing or conflicting elements;
- create a prioritized clarification list;
- build a requirements table;
- add source and confidence status to every material statement;
- improve the prompt after peer review.

Session result:

- requirements pack;
- clarification-question register;
- two verified BA prompt templates;
- first entry in the prompt error log.

# Session BA-2. Requirements quality, Jira tasks and traceability

## Slide 10. Session BA-2: objectives and inputs

Inputs:

- canonical requirements pack;
- incomplete Jira epic;
- backlog items of different quality;
- Definition of Ready;
- business-rule matrix.

Objectives:

- perform requirements health check;
- improve acceptance criteria;
- transform an approved requirement into review-ready Jira tasks;
- preserve end-to-end traceability.

## Slide 11. Requirements quality model

Review dimensions:

- completeness — all necessary actors, triggers, conditions and outcomes exist;
- consistency — requirements and business rules do not conflict;
- clarity — terms and expected behavior are unambiguous;
- testability — results can be objectively verified;
- feasibility — technical or operational constraints are visible;
- traceability — source, owner and version are identifiable.

Every problem is recorded with:

- affected requirement;
- evidence;
- delivery risk;
- clarification or proposed correction;
- owner;
- approval need.

## Slide 12. Workflow: Requirement → Quality Review

Xplore:

1. detects duplicates;
2. compares wording and values;
3. finds ambiguity;
4. identifies missing scenarios;
5. checks testability;
6. generates clarification questions;
7. ranks problems by impact;
8. proposes corrections without treating them as approved decisions.

The BA accepts, rejects or edits every proposed correction.

## Slide 13. Workflow BA-2

Requirement → Delivery-ready Backlog Item:

1. state the business context and value;
2. create user story or task description;
3. define scope and out of scope;
4. add business rules;
5. create acceptance criteria;
6. identify edge cases;
7. record dependencies and assumptions;
8. list open questions;
9. check the task against Definition of Ready.

## Slide 14. Acceptance criteria and self-review

Acceptance criteria must make visible:

- actor and permissions;
- initial state;
- triggering action;
- expected result;
- validation and error behavior;
- SLA or measurable condition;
- negative and boundary scenarios;
- behavior of integrations;
- unresolved decision points.

Separate prompts are used for generation and review. The self-review prompt challenges the Jira task and searches for omissions rather than repeating the original answer.

## Slide 15. Traceability in the ServiceHub case

Required chain:

customer message or source paragraph  
→ business requirement  
→ functional requirement  
→ business rule  
→ Jira epic or task  
→ acceptance criterion  
→ approval or open question.

Traceability is updated when:

- a source changes;
- a requirement is approved or rejected;
- a Jira task is split;
- an acceptance criterion is corrected;
- a change request modifies the baseline.

## Slide 16. Practice and session result

Participant tasks:

- perform quality review of the ServiceHub requirement package;
- correct ambiguous statements;
- generate three to five Jira tasks;
- add scope, dependencies and acceptance criteria;
- run an independent readiness review;
- build a traceability matrix.

Session result:

- requirements quality report;
- review-ready backlog fragment;
- traceability matrix;
- reusable Jira-generation and Jira-review prompts.

# Session BA-3. Change request and functional impact analysis

## Slide 17. Session BA-3: customer request

Customer message:

> Priority customers should be able to create critical requests. Such requests must be processed faster, escalated automatically and be visible to responsible managers. We would like this in the next release.

The message does not define:

- priority-customer criteria;
- allowed roles;
- SLA;
- escalation rules;
- notification recipients and channels;
- out-of-hours behavior;
- reporting;
- migration of existing requests;
- release approval.

## Slide 18. Change request workflow

Intake → Normalize → Clarify → Assess → Decide.

The BA:

1. records the original request without reinterpretation;
2. formulates the business goal and desired outcome;
3. classifies the change;
4. identifies missing decisions;
5. connects the request to the current baseline;
6. evaluates business and functional impact;
7. prepares options;
8. records the approved decision.

## Slide 19. Defect, clarification or change request

Use the existing approved baseline:

- defect — implemented behavior does not meet an approved requirement;
- clarification — wording is made explicit without changing agreed behavior or scope;
- change request — expected behavior, scope, rule, constraint or accepted outcome changes;
- missing requirement — necessary behavior was never approved and must enter change control.

Xplore may provide classification evidence, but the authorized owner confirms the classification.

## Slide 20. Functional impact matrix

The matrix covers:

- affected stakeholder or user role;
- business process;
- business rule;
- functional requirement;
- non-functional requirement;
- UI behavior;
- data;
- integration;
- Jira task;
- documentation;
- dependency;
- risk;
- next action;
- owner and approver.

Impacts outside BA ownership are recorded as handoff questions, not silently resolved.

## Slide 21. Solution options and decision pack

For Critical Service Request:

- minimum option — new priority with basic SLA and email notifications;
- recommended option — dedicated rules, automatic escalation, reporting and controlled activation;
- defer or reject option — retain current process and document the business consequences.

For every option:

- business value;
- scope;
- assumptions;
- dependencies;
- delivery risk;
- unresolved questions;
- affected artifacts;
- decision authority.

## Slide 22. Practice and session result

Participant tasks:

- normalize the customer message;
- create prioritized clarification questions;
- identify linked requirements and decisions;
- build a functional impact matrix;
- prepare three solution options;
- draft a decision record.

Session result:

- structured change request;
- functional impact matrix;
- solution comparison;
- decision pack ready for approval.

# Session BA-4. Approved change and BA capstone

## Slide 23. Session BA-4: approval and new constraint

The approved solution introduces Critical Service Request with automatic escalation and reporting.

After approval, the customer changes the definition of “priority customer.”

The BA must:

- identify which approved decisions are affected;
- determine whether re-approval is needed;
- update requirements and backlog;
- prevent an unrecorded change from reaching delivery;
- maintain traceability across both change cycles.

## Slide 24. Workflow BA-4

Approved Change → Updated Requirements Baseline:

1. compare pre-change and approved baselines;
2. identify added, modified and retired statements;
3. update business and functional requirements;
4. correct acceptance criteria;
5. update Jira tasks;
6. update traceability and change log;
7. prepare handoff information;
8. verify that all affected artifacts are synchronized.

## Slide 25. BA handoff package

The handoff to QA, Developer and DevOps includes:

- approved scope;
- final requirements and business rules;
- acceptance criteria;
- known edge cases;
- dependencies;
- non-functional constraints;
- unresolved questions;
- assumptions requiring validation;
- version and approval reference;
- list of changed artifacts.

Canonical handoffs allow each role track to work independently from a stable approved input.

## Slide 26. Capstone assignment

Using a new ServiceHub customer message, the participant:

1. extracts the business need;
2. formulates clarification questions;
3. creates a requirements pack;
4. prepares Jira tasks;
5. performs functional impact analysis;
6. prepares a decision record;
7. updates the baseline after approval;
8. marks facts, conclusions, assumptions and questions.

## Slide 27. Capstone review criteria

The result is successful when:

- no missing information is invented;
- critical gaps and contradictions are found;
- every material requirement has a source;
- acceptance criteria are measurable;
- classification of the change is justified;
- functional impact is sufficiently broad;
- decisions, owners and approvals are visible;
- all affected BA artifacts are updated;
- human-review points are explicit.

## Slide 28. Personal BA AI Playbook

The playbook contains:

- source-analysis prompt;
- requirements-extraction prompt;
- conflict-detection prompt;
- clarification-question prompt;
- requirements-quality prompt;
- Jira-task generation prompt;
- Jira-task review prompt;
- change-request normalization prompt;
- functional-impact prompt;
- solution-options prompt;
- baseline-update prompt;
- handoff verification checklist;
- prompt error log and correction rules.

# Completion

## Slide 29. Self-practice, online test and course result

Self-practice:

- ten working days in the training environment;
- repeat all four BA workflows;
- process additional ServiceHub change requests;
- test prompts on complete, incomplete and conflicting inputs;
- refine the assistant and AI Playbook.

Online test:

- thirty questions in forty-five minutes;
- ten common AI-workflow, source, safety and human-review questions;
- twenty BA questions on requirements, Jira readiness, change management and functional impact;
- passing score: seventy-five percent;
- one repeat attempt within five working days.

The certificate is an additional bonus after successful testing and confirms practical use of Xplore during the course.
