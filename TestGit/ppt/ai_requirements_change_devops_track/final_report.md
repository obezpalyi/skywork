Current date: 2026-09-07
# AI-assisted Requirements and Change Management in SDLC — DevOps Track

## Presentation purpose

This is the complete learning deck for the DevOps role track. It consists of four independent three-academic-hour sessions. Each session contains six instructional slides, within the requirement of no more than ten slides per session.

The deck uses ServiceHub and the Critical Service Request change request as a continuous case. Xplore supports analysis, documentation and review. It is decision support, not an autonomous executor of infrastructure or production changes.

## Slide 1. Course title

Title: AI-assisted Requirements and Change Management in SDLC

Subtitle: DevOps Track

Key message: From product change to controlled deployment, rollback and operational readiness.

## Slide 2. Why this track matters

Operational consequences are often discovered after functional and technical decisions have already been made. Requirements may omit availability, observability, supportability, capacity, security and rollback expectations.

The track addresses:

- incomplete operational requirements;
- slow search across runbooks and deployment documentation;
- missed environment and configuration impact;
- monitoring that does not reflect business-critical behavior;
- deployment plans without verifiable checks;
- rollback plans that ignore data changes;
- repeated incident patterns not reflected in updated runbooks;
- go/no-go recommendations without complete evidence.

## Slide 3. Learning route and final outputs

Four sessions:

1. Requirement → Operational Requirements.
2. Change Request → Operational Impact.
3. Approved Change → Deployment and Rollback Plan.
4. Release or Incident → Updated Operations Pack.

Final outputs:

- operational requirements report;
- operational impact matrix;
- observability change list;
- deployment plan;
- rollback plan;
- updated runbook;
- release-readiness checklist;
- go/no-go recommendation;
- personal DevOps AI Playbook.

# Session OPS-1. Operational context of requirements

## Slide 4. Session OPS-1: objectives and inputs

Inputs:

- canonical ServiceHub requirements;
- service catalog;
- ownership matrix;
- environment topology;
- current deployment guide;
- runbook;
- SLI/SLO definitions;
- integration map.

Objectives:

- extract operationally significant expectations;
- identify missing service-level and support constraints;
- connect requirements to services and owners;
- formulate questions for BA, Developer and Architect;
- work safely with operational documentation.

## Slide 5. Operational requirements

The DevOps review checks:

- availability;
- performance and latency;
- scalability and capacity;
- reliability;
- recoverability;
- observability;
- security;
- data protection;
- support hours;
- ownership and escalation;
- deployment constraints;
- rollback expectations.

A functional requirement is not operationally complete until its failure, support and recovery conditions are visible.

## Slide 6. Reusable DevOps prompt

Prompt structure:

1. Role — operational requirements reviewer.
2. Context — requirement, services, topology, environments and runbooks.
3. Action — identify operational needs, gaps and risks.
4. Output — evidence table with owner and next action.
5. Quality criteria — source traceability, no invented configuration and explicit uncertainty.

Required instruction:

> Never output secrets or infer production values. Use placeholders for sensitive parameters and identify the authorized source or owner.

## Slide 7. Workflow OPS-1

Requirement → Operational Requirements:

1. identify business-critical behavior;
2. map it to services and dependencies;
3. identify availability and performance expectations;
4. identify monitoring and alerting needs;
5. identify support and escalation rules;
6. inspect security and data handling;
7. identify missing owners and thresholds;
8. formulate questions and review points.

## Slide 8. ServiceHub live-demo

Critical Service Request raises operational questions:

- must escalation work continuously;
- which service owns the SLA timer;
- what metric proves critical requests are processed on time;
- which alert threshold corresponds to the SLA;
- what happens if Teams or email notification fails;
- what capacity change is expected;
- who responds outside working hours;
- what is the rollback condition.

Expected Xplore output separates confirmed facts, inferred impact, missing parameters and required owners.

## Slide 9. Practice and session result

Participant tasks:

- map the requirement to services and dependencies;
- identify missing SLI, SLO and thresholds;
- formulate operational questions;
- identify ownership gaps;
- mark sensitive data that must not be passed to the assistant;
- improve the prompt after peer review.

Session result:

- operational requirements report;
- clarification-question register;
- service and owner map;
- two verified DevOps prompt templates.

# Session OPS-2. Infrastructure, configuration and observability impact

## Slide 10. Session OPS-2: objectives and inputs

Inputs:

- structured Critical Service Request;
- canonical technical design summary;
- environment topology;
- configuration inventory;
- IaC fragments;
- monitoring dashboard description;
- current metrics and alerts;
- capacity assumptions.

Objectives:

- identify affected environments and services;
- assess infrastructure and configuration impact;
- specify observability changes;
- expose capacity and security risks;
- build an operational impact matrix.

## Slide 11. Impact domains

Operational impact covers:

- services and dependencies;
- DEV, TEST, STAGE and PROD environments;
- infrastructure resources;
- configuration parameters;
- secrets and endpoints;
- networking;
- storage and data migration;
- deployment pipeline;
- monitoring, logging and tracing;
- alerts and escalation;
- capacity;
- security and compliance;
- runbook and support documentation.

## Slide 12. Workflow OPS-2

Change Request → Operational Impact:

1. map the change to services;
2. identify environment differences;
3. identify configuration and IaC changes;
4. inspect secrets, endpoints and access;
5. identify capacity impact;
6. define new metrics, logs and traces;
7. align alerts with SLO and business risk;
8. identify deployment and rollback constraints;
9. create owners and next actions.

## Slide 13. Configuration and infrastructure review

For every change record:

- parameter or resource;
- current state;
- proposed state;
- affected environments;
- source of truth;
- deployment method;
- validation;
- rollback behavior;
- owner;
- sensitivity classification.

Xplore may structure configuration information but must not receive credentials or unrestricted production exports.

## Slide 14. Observability for Critical Service Request

Potential signals:

- number of critical requests created;
- SLA time remaining;
- overdue critical requests;
- escalation event success and failure;
- notification delivery success and failure;
- duplicate escalation events;
- processing latency;
- queue backlog;
- feature-flag state;
- customer and region dimensions where permitted.

Thresholds are not invented by Xplore; they require SLO or owner confirmation.

## Slide 15. Operational impact matrix

Columns:

- affected service or environment;
- requirement or change source;
- infrastructure impact;
- configuration impact;
- observability impact;
- capacity or security risk;
- deployment dependency;
- rollback consideration;
- next action;
- owner;
- approver.

The matrix includes unknowns and blockers, not only confirmed work.

## Slide 16. Practice and session result

Participant tasks:

- identify affected services and environments;
- document configuration and IaC impact;
- define required signals;
- identify alert gaps;
- assess capacity and security considerations;
- build the operational impact matrix.

Session result:

- operational impact matrix;
- observability change list;
- configuration-change register;
- reusable impact-review prompt.

# Session OPS-3. Deployment, rollback and release readiness

## Slide 17. Session OPS-3: approved design

Approved change:

- new critical priority;
- automatic escalation;
- event-driven notifications and reporting;
- data-model change;
- feature-flag rollout.

Inputs:

- approved technical design;
- migration notes;
- CI/CD overview;
- deployment baseline;
- current rollback procedure.

## Slide 18. Workflow OPS-3

Approved Change → Deployment and Rollback Plan:

1. verify approved scope and dependencies;
2. define deployment order;
3. identify configuration and migration steps;
4. define pre-deployment checks;
5. define feature-flag activation;
6. define post-deployment checks;
7. define rollback triggers and actions;
8. define evidence for release decision;
9. prepare stakeholder communication.

## Slide 19. Deployment plan

The plan includes:

- change scope and version;
- services and environments;
- prerequisite;
- deployment sequence;
- database or data step;
- configuration step;
- feature-flag state;
- verification command or observable evidence;
- owner;
- expected duration where approved;
- failure handling;
- communication point.

Every step must have a verifiable completion condition.

## Slide 20. Rollback plan

The rollback plan defines:

- trigger;
- decision authority;
- feature-flag response;
- application rollback;
- configuration rollback;
- data compatibility;
- treatment of already-created critical requests;
- queue and event handling;
- validation after rollback;
- customer communication;
- incident escalation.

A rollback plan is incomplete if it restores code but leaves data or integrations inconsistent.

## Slide 21. Release-readiness evidence

Evidence covers:

- approved scope and technical design;
- completed infrastructure and configuration changes;
- environment readiness;
- migration readiness;
- observability readiness;
- capacity and security review;
- deployment and rollback rehearsal;
- owners and on-call coverage;
- known risks and blockers;
- go/no-go authority.

## Slide 22. Practice and session result

Participant tasks:

- create a deployment sequence;
- define pre- and post-deployment checks;
- define feature-flag activation;
- create rollback triggers and actions;
- identify evidence gaps;
- prepare a draft release status.

Session result:

- deployment plan;
- rollback plan;
- release-readiness checklist;
- reusable deployment-review prompt.

# Session OPS-4. Operational readiness and DevOps capstone

## Slide 23. Session OPS-4: new operational constraint

New constraint:

- Microsoft Teams integration is not ready;
- release must be controlled by a feature flag;
- rapid rollback must remain possible.

Incident context:

- a previous release had an alert threshold inconsistent with the customer SLA;
- the postmortem action was never applied to the runbook.

The participant must reassess operational readiness.

## Slide 24. Workflow OPS-4

Release or Incident → Updated Operations Pack:

1. compare the change with previous incidents;
2. identify relevant lessons and open actions;
3. update deployment and rollback plans;
4. update metrics and alerts;
5. update runbook procedures;
6. update ownership and escalation;
7. verify feature-flag operations;
8. create a go/no-go recommendation with evidence.

## Slide 25. Runbook update

The updated runbook includes:

- detection signals;
- initial triage;
- service and dependency checks;
- feature-flag state;
- notification-failure path;
- escalation procedure;
- mitigation;
- rollback decision;
- validation after recovery;
- communication;
- owner;
- last reviewed version.

Xplore helps identify missing steps and compare versions; the operational owner approves the runbook.

## Slide 26. DevOps capstone assignment

Using a new ServiceHub change, the participant:

1. extracts operational requirements;
2. maps affected services and environments;
3. creates an operational impact matrix;
4. defines observability changes;
5. creates deployment and rollback plans;
6. updates the runbook;
7. uses incident evidence;
8. prepares a go/no-go recommendation.

## Slide 27. Capstone review criteria

The result is successful when:

- no production values or secrets are invented;
- service and environment impact is complete;
- configuration and IaC changes are traceable;
- metrics and alerts correspond to business risk;
- deployment steps have verification;
- rollback covers application, configuration, data and integrations;
- incident lessons are reflected;
- owners, approvers and blockers are visible;
- human control of production action is explicit.

## Slide 28. Personal DevOps AI Playbook

The playbook contains:

- operational-requirements prompt;
- runbook Q&A prompt;
- service-impact prompt;
- environment-difference prompt;
- configuration-review prompt;
- observability-gap prompt;
- alert-alignment prompt;
- deployment-plan prompt;
- rollback-review prompt;
- incident-similarity prompt;
- runbook-update prompt;
- release-readiness prompt;
- go/no-go evidence checklist;
- prompt error log.

# Completion

## Slide 29. Self-practice, online test and course result

Self-practice:

- ten working days;
- repeat all four DevOps workflows;
- process additional ServiceHub change requests;
- test prompts on incomplete and conflicting operational context;
- refine the assistant and DevOps AI Playbook.

Online test:

- thirty questions in forty-five minutes;
- ten common questions on workflows, sources, safety and human review;
- twenty DevOps questions on operational requirements, configuration, observability, deployment, rollback and readiness;
- passing score: seventy-five percent;
- one repeat attempt within five working days.

The certificate is an additional bonus after successful testing and confirms practical use of Xplore during the course.
