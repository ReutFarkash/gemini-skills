---
name: project-maintainer
description: A skill to automate the maintenance of project documentation files like STATUS.md, HISTORY.md, and PROJECT_TODO.md.
---

# Project Maintainer

## Overview

This skill provides a set of commands to automate the process of updating and maintaining the project's documentation files. It helps keep the `STATUS.md`, `HISTORY.md`, and `PROJECT_TODO.md` files current with minimal manual intervention.

## Commands

### `/review_project`

Reviews all project documentation, updates where necessary, and generates a status report.

**Workflow:**

1.  **Find Files:** Locate all `STATUS.md`, `HISTORY.md` files within the `meta/skills/` directory and the `PROJECT_TODO.md` in the root.
2.  **Update Status Files:** For each `STATUS.md` file, read its content, find the `Last Update: <date>` line, and replace the date with the current date.
3.  **Read All Files:** Read the content of all documentation files.
4.  **Update `PROJECT_STATUS.md`:** Create or update a `PROJECT_STATUS.md` file in the project root with a comprehensive Markdown report containing:
    *   A "Project Status Summary" section.
    *   The current status and most recent history entry for each skill.
    *   A list of open tasks from `PROJECT_TODO.md`.

**Example Usage:**

"Review the project status."

### `/log_change <skill_name> "<message>"`

Appends a new entry to the `HISTORY.md` file for a specified skill.

**Workflow:**

1.  **Identify Target File:** Locate the `HISTORY.md` file at `meta/skills/<skill_name>/HISTORY.md`.
2.  **Get Current Date:** Get the current date in `YYYY-MM-DD` format.
3.  **Read File:** Read the content of the `HISTORY.md` file.
4.  **Construct New Entry:** Create a new markdown-formatted entry, for example: `### YYYY-MM-DD

- <message>`.
5.  **Append and Write:** Prepend the new entry to the existing content and write the entire content back to the `HISTORY.md` file.

**Example Usage:**

`/log_change obsidian-chat-summary "Fixed a bug in template rendering."`

### `/update_status <skill_name> --status "<new_status>"`

Updates the `Status` field in a skill's `STATUS.md` file.

**Workflow:**

1.  **Identify Target File:** Locate the `STATUS.md` file at `meta/skills/<skill_name>/STATUS.md`.
2.  **Read File:** Read the content of the `STATUS.md` file.
3.  **Find and Replace:** Use a text replacement tool to find the line matching `Status: <old_status>` and replace it with `Status: <new_status>`.

**Example Usage:**

`/update_status conversation-flow --status "Active"`

### `/add_todo "<task>"`

Adds a new task to the `PROJECT_TODO.md` file under the "Open Tasks" section.

**Workflow:**

1.  **Identify Target File:** Locate the `PROJECT_TODO.md` file in the project root.
2.  **Read File:** Read the content of the file.
3.  **Construct New Entry:** Create a new markdown-formatted task: `- [ ] <task>`.
4.  **Append and Write:** Find the line `## 🎯 Open Tasks`, and insert the new task on the line directly below it. Write the entire content back to the file.

**Example Usage:**

`/add_todo "Investigate using a different Mermaid graph type."`
