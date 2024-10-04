---
name: New development
about: Issue template to describe any new code development
title: "[Development title]"
labels: ''
assignees: ''

---

# [Feature title - describe your development in less than 50 words]

[Describe your feature in detail. Also, mention the tentative release]

## Affected user pages

List of pages which are being introduced/modified/deleted as part of this

## Affected API routes

List of backend routes which are being introduced/modified/deleted as part of this

# MOCKs/Screenshots

Please add any screenshots/MOCKs that are available for this feature

# Access Patterns

1. Login as student/teacher/admin
2. Open dashboard
3. [and so on...]

# Sample Credentials

1. [User1]
2. [User2]

# Issue checklist [✅|❌]

Make sure to complete this checklist before you create this issue.

* [✅|❌] Added one of the following label: "New-Feature", "Refactoring", OR "Experimental".
* [✅|❌] Added label for the APP: "Dashboard"
* [✅|❌] Added the applicable labels: "Read-Scenario" OR "Write-Scenario"?
* [✅|❌] Are you planning to use some special features such as Permanent cached images, sprites, etc? If yes, have you mentioned them clearly in the description?
* [✅|❌] Are you planning to run WPT tests after this update?
* [✅|❌] Are you planning to run WPT tests of the whole APP after this update?

# Pre-development checklist

Make sure to complete this checklist before you start development.

* [✅|❌] Introducing new entities or value object(s)? If any, make sure that they are clearly mentioned.
* [✅|❌] Introducing new projector(s)?
* [✅|❌] Introducing new command(s) and relevant domain service(s)?
* [✅|❌] Introducing new mapper(s)?
* [✅|❌] Introducing new repositories(s)?
* [✅|❌] Are you updating any of the common components (Header, Footer, etc), common pages (Error.vue) OR global elements (plugins, base stylesheets, etc.)?
* [✅|❌] Have you and your team go through the [Coding guidelines](https://github.com/comprodls/c1-2024/wiki/2.-Coding-Guidelines), [GIT Branching and Guidelines](https://github.com/comprodls/c1-2024/wiki/4.-GIT-Branching-and-Guidelines), [Code quality and security](https://github.com/comprodls/c1-2024/wiki/3.-Code-Quality-and-Security) & [Page load performance](https://github.com/comprodls/c1-2024/wiki/5.-Page-load-Performance)?

# Post-development checklist

Make sure to complete this checklist before you close this issue.

* [✅|❌] Have you done the QID updates as required?
* [✅|❌] Have you updated the API test cases as required?
* [✅|❌] Have you added your routes to OpenTelemetry for performance monitoring?
* [✅|❌] Have you run WPT tests?
* [✅|❌] Have you checked your updates for vulnerabilities?
* [✅|❌] Have you checked your updates for Sonar Issues?
* [✅|❌] Have you checked your updates for [Accessibility guidelines](https://github.com/comprodls/c1-2024/wiki/Minimal-Accessibility-Checklist)?
