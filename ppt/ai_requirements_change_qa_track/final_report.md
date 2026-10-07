Current date: 2026-09-07
# AI-assisted Requirements and Change Management in SDLC — Quality Assurance Track

## Presentation purpose

This is the complete learning deck for the Quality Assurance role track. It consists of four independent three-academic-hour sessions. Each session contains six instructional slides, within the requirement of no more than ten slides per session.

The deck uses ServiceHub and the Critical Service Request change request as a continuous case. Xplore supports repeatable analysis and documentation workflows; QA judgment, risk acceptance, test approval and release decisions remain human responsibilities.

## Slide 1. Course title

Title: AI-assisted Requirements and Change Management in SDLC

Subtitle: Quality Assurance Track

Key message: From requirement review to evidence-based test and regression readiness.

## Slide 2. Why this track matters

QA frequently receives requirements that are incomplete, ambiguous or changed after tests have already been prepared. Test documentation may refer to older baselines, and a short change request can affect permissions, API, integrations, time zones, data and production behavior.

The track addresses:

- late discovery of testability gaps;
- incomplete negative and boundary coverage;
- slow creation and maintenance of test cases;
- weak traceability;
- missed regression areas;
- confusion between a defect and a new change request;
- test-readiness conclusions without sufficient evidence.

## Slide 3. Learning route and final outputs

Four sessions:

1. Requirement → Testability Review.
2. Requirement → Test Pack.
3. Change Request → Regression Impact.
4. Approved Change → Updated QA Pack.

Final outputs:

- testability report;
- clarification-question register;
- functional, API and integration test pack;
- synthetic test data;
- coverage matrix;
- regression impact report;
- test-readiness conclusion;
- personal QA AI Playbook.

# Session QA-1. Testability review of requirements

## Slide 4. Session QA-1: objectives and inputs

Inputs:

- canonical ServiceHub requirements pack;
- acceptance criteria;
- business-rule matrix;
- user-role model;
- integration map;
- known environment constraints.

Objectives:

- identify what cannot be verified objectively;
- reveal missing preconditions and expected results;
- formulate role-specific questions;
- distinguish confirmed behavior from assumptions;
- assess the testing risk of each gap.

## Slide 5. What makes a requirement testable

A testable requirement has:

- identifiable actor and permissions;
- defined initial state;
- explicit trigger;
- observable outcome;
- measurable condition;
- validation and error behavior;
- relevant negative and boundary rules;
- data and integration expectations;
- clear source, version and owner.

Words such as fast, convenient, correctly, automatically or soon are not measurable until operationalized.

## Slide 6. Reusable QA prompt

Prompt structure:

1. Role — requirements testability reviewer.
2. Context — feature, baseline, systems and test constraints.
3. Action — identify testability gaps and risks.
4. Output — table with evidence, risk, question and owner.
5. Quality criteria — source traceability, no invention and explicit uncertainty.

Required instruction:

> Do not create expected behavior that is absent from the approved requirement. Mark missing information and formulate a question.

## Slide 7. Workflow QA-1

Requirement → Testability Review:

1. identify testable statements;
2. find ambiguous wording;
3. identify missing preconditions;
4. identify missing expected results;
5. inspect permissions and role combinations;
6. inspect negative and boundary behavior;
7. identify data, interface and environment dependencies;
8. rank gaps by test and release risk.

Human review confirms whether every question is relevant and whether the proposed clarification changes scope.

## Slide 8. ServiceHub live-demo

Critical Service Request lacks:

- definition of priority customer;
- authorized roles;
- measurable SLA;
- out-of-hours rules;
- failure behavior for notifications;
- expected behavior in different time zones.

Expected Xplore result:

- no invented values;
- direct reference to missing or conflicting statements;
- risk explanation;
- prioritized questions;
- suggested measurable wording clearly marked as a proposal.

## Slide 9. Practice and session result

Participant tasks:

- review the requirement and acceptance criteria;
- identify at least ten testability issues;
- classify them by ambiguity, omission, conflict or dependency;
- formulate questions for BA or Product Owner;
- rank them by testing risk;
- improve the prompt after peer review.

Session result:

- testability report;
- prioritized clarification register;
- corrected acceptance-criteria proposals;
- two verified QA prompt templates.

# Session QA-2. Test design, test data and coverage

## Slide 10. Session QA-2: objectives and inputs

Inputs:

- approved requirements baseline;
- corrected acceptance criteria;
- existing test plan;
- API checklist;
- sample test data;
- current coverage matrix.

Objectives:

- transform requirements into test conditions;
- create balanced functional, API and integration coverage;
- generate safe synthetic data;
- detect duplicates and missing scenarios;
- preserve traceability.

## Slide 11. From requirement to test conditions

Test conditions should cover:

- happy path;
- negative behavior;
- boundary values;
- permissions;
- state transitions;
- validation;
- time and SLA behavior;
- integration success and failure;
- retries and duplicate events;
- audit and reporting;
- recovery behavior.

The number of generated cases is not a quality metric. Coverage of material risks is.

## Slide 12. Workflow QA-2

Requirement → Test Pack:

1. parse acceptance criteria and business rules;
2. create test conditions;
3. classify by UI, API, integration, data and non-functional scope;
4. create happy, negative and boundary cases;
5. identify preconditions and test data;
6. connect every test to a requirement;
7. review for gaps, duplication and obsolete cases;
8. prioritize by risk.

## Slide 13. Synthetic test data

Xplore may help create:

- fictional users and organizations;
- role and permission combinations;
- SLA boundary timestamps;
- valid and invalid API payloads;
- escalation-state combinations;
- notification success and failure conditions.

Controls:

- do not use real personal or production data;
- validate format and domain rules;
- keep expected outcomes visible;
- separate test-data generation from test-result evidence.

## Slide 14. Coverage and traceability

Required chain:

requirement  
→ acceptance criterion  
→ test condition  
→ test case  
→ test data  
→ execution result  
→ defect or evidence.

Coverage matrix identifies:

- untested requirements;
- tests without a valid requirement;
- duplicate cases;
- outdated cases;
- high-risk scenarios with insufficient depth.

## Slide 15. ServiceHub test-design example

Critical request coverage includes:

- authorized and unauthorized users;
- customer-priority changes;
- SLA boundary moments;
- requests created outside working hours;
- repeated escalation events;
- notification service failure;
- reporting and audit visibility;
- time-zone differences;
- migration of existing requests;
- feature-flag states.

## Slide 16. Practice and session result

Participant tasks:

- create test conditions;
- generate functional, API and integration cases;
- add negative and boundary scenarios;
- prepare synthetic test data;
- build the coverage matrix;
- run an independent coverage review.

Session result:

- structured test pack;
- test-data set;
- coverage matrix;
- reusable test-design and coverage-review prompts.

# Session QA-3. Change request and regression impact

## Slide 17. Session QA-3: change context

Inputs:

- requirements baseline before the change;
- approved Critical Service Request baseline;
- existing test baseline;
- known defects and limitations;
- environment constraints.

Objectives:

- compare baseline versions;
- identify direct and indirect test impact;
- create a risk-based regression scope;
- distinguish defects, clarifications and changes.

## Slide 18. Workflow QA-3

Change Request → Regression Impact:

1. compare old and new requirements;
2. identify added, modified and retired rules;
3. map changes to existing tests;
4. identify obsolete tests;
5. find missing scenarios;
6. analyze indirect effects on integrations and shared services;
7. prioritize regression by likelihood and business impact;
8. document assumptions and blockers.

## Slide 19. Direct and indirect impact

Direct impact:

- priority field behavior;
- SLA calculations;
- escalation logic;
- notification recipients;
- critical-request reporting.

Indirect impact:

- role and permission checks;
- existing priority types;
- ordinary ticket processing;
- audit events;
- CRM synchronization;
- dashboard calculations;
- time-zone handling;
- notification retries.

## Slide 20. Defect, clarification or change request

Use evidence from the approved baseline:

- defect — observed behavior contradicts an approved expectation;
- clarification — wording is made explicit without changing expected behavior;
- change request — expected behavior, rule or constraint changes;
- test issue — test data, environment or test case is incorrect;
- missing requirement — behavior was never approved and requires change control.

Xplore prepares evidence and comparison; the authorized owner confirms classification.

## Slide 21. Risk-based regression scope

For each area record:

- affected component or behavior;
- linked requirement;
- current test coverage;
- change type;
- probability of failure;
- business impact;
- test priority;
- required environment or data;
- owner;
- blocker.

Regression scope must include a justification for excluded areas.

## Slide 22. Practice and session result

Participant tasks:

- compare two ServiceHub baselines;
- identify affected tests;
- mark obsolete cases;
- find uncovered indirect impacts;
- create a risk-ranked regression scope;
- classify a disputed issue as defect or change request.

Session result:

- regression impact report;
- updated regression checklist;
- defect/change classification record;
- reusable baseline-comparison prompt.

# Session QA-4. Test readiness and QA capstone

## Slide 23. Session QA-4: approved change and new constraint

New constraint:

Critical requests must work across multiple time zones, but acceptance criteria have not been updated.

The QA must:

- identify the inconsistency;
- avoid treating the new statement as approved behavior;
- determine which tests and data are affected;
- request baseline correction;
- update the QA package only after confirmation.

## Slide 24. Workflow QA-4

Approved Change → Updated QA Pack:

1. verify the approved baseline;
2. update test conditions and cases;
3. update synthetic data;
4. update regression scope;
5. identify obsolete tests;
6. verify environment readiness;
7. update traceability;
8. create the test-readiness conclusion.

## Slide 25. Test-readiness evidence

The conclusion covers:

- approved scope and baseline version;
- testability status;
- coverage status;
- test-data readiness;
- environment and integration readiness;
- open defects;
- untested risks;
- assumptions;
- blockers;
- recommendation and approver.

Xplore structures the evidence. QA owns the conclusion.

## Slide 26. QA capstone assignment

Using a new ServiceHub change:

1. perform testability review;
2. formulate questions;
3. create test design;
4. prepare test data;
5. build coverage traceability;
6. define regression impact;
7. classify one disputed issue;
8. prepare a test-readiness conclusion.

## Slide 27. Capstone review criteria

The result is successful when:

- no behavior is invented;
- testability gaps are evidence-based;
- coverage includes relevant negative and boundary scenarios;
- tests map to approved requirements;
- regression considers indirect impact;
- defect/change classification is justified;
- risks and blockers are explicit;
- human-review and approval points are visible.

## Slide 28. Personal QA AI Playbook

The playbook contains:

- testability-review prompt;
- ambiguity and missing-expected-result prompt;
- clarification-question prompt;
- test-condition prompt;
- functional and API test prompt;
- negative and boundary review prompt;
- synthetic-data prompt;
- coverage-gap prompt;
- baseline-comparison prompt;
- regression-impact prompt;
- defect-structuring prompt;
- test-readiness checklist;
- prompt error log.

# Completion

## Slide 29. Self-practice, online test and course result

Self-practice:

- ten working days;
- repeat all four QA workflows;
- process additional ServiceHub changes;
- test prompts on complete, incomplete and conflicting inputs;
- refine the assistant and QA AI Playbook.

Online test:

- thirty questions in forty-five minutes;
- ten common questions on workflows, sources, safety and human review;
- twenty QA questions on testability, test design, coverage, regression and defect/change classification;
- passing score: seventy-five percent;
- one repeat attempt within five working days.

The certificate is an additional bonus after successful testing and confirms practical use of Xplore during the course.
