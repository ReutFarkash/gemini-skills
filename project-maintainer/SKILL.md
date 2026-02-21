---
name: project-maintainer
description: A skill to automate the maintenance of project documentation files like STATUS.md, HISTORY.md, and PROJECT_TODO.md.
---

# Project Maintainer

## Overview

This skill provides a set of commands to automate the process of updating and maintaining the project's documentation files. It ensures that the `STATUS.md`, `HISTORY.md`, and `PROJECT_TODO.md` files are tethered to the actual Git state of the skill submodules.

## Commands

### `/review_project`

Reviews all project documentation, updates where necessary, and generates a status report manifest.

**Workflow:**

1.  **Git Status Guard:** For each submodule (`skills/public`, `skills/internal`), check for uncommitted changes using `git status --porcelain`.
    *   If changes are present, **stop and ask the user** if they wish to commit them before proceeding.
    *   If they agree, perform `git add .` and `git commit -m "<user_provided_message>"` within that submodule.
2.  **Identify Submodule States:** Once clean, get the current short Git SHA (`git rev-parse --short HEAD`) for both submodules.
3.  **Find Files:** Locate all `STATUS.md`, `HISTORY.md` files within the `meta/skills/` directory and the `PROJECT_TODO.md` in the root.
4.  **Update Status Files:** For each `STATUS.md` file, update the `Last Update` date and the `Last Verified SHA` (based on which submodule the skill belongs to).
5.  **Update `PROJECT_STATUS.md`:** Create or update a `PROJECT_STATUS.md` file in the project root with a manifest report containing:
    *   A "Project Status Summary" section.
    *   The current status, most recent history entry, and current Git SHA for each skill.
    *   A list of open tasks from `PROJECT_TODO.md`.

**Example Usage:**

"Review the project status."

### `/log_change <skill_name> "<message>"`

Appends a new entry to the `HISTORY.md` file, tethered to the current Git SHA.

**Workflow:**

1.  **Git Status Guard:** Identify which submodule the skill belongs to. Check for uncommitted changes (`git status --porcelain`).
    *   **Stop and ask the user** to commit if the submodule is dirty. This ensures the logged SHA reflects the actual state of the changes being logged.
2.  **Identify Submodule SHA:** Once the submodule is clean, run `git rev-parse --short HEAD`.
    *   If skill is `quartz-blog-post`, use SHA from `skills/internal`.
    *   Otherwise, use SHA from `skills/public`.
3.  **Identify Target File:** Locate the `HISTORY.md` file at `meta/skills/<skill_name>/HISTORY.md`.
4.  **Construct New Entry:** Create a formatted entry: `### YYYY-MM-DD [ref: <sha>]`.
5.  **Append and Write:** Prepend the new entry and message to the existing content.

**Example Usage:**

`/log_change obsidian-chat-summary "Refactored output path to /output folder."`

### `/update_status <skill_name> --status "<new_status>"`

Updates the `Status` and `Last Verified SHA` in a skill's `STATUS.md` file.

**Workflow:**

1.  **Git Status Guard:** Check the appropriate submodule for uncommitted changes. Ask the user to commit if dirty.
2.  **Identify Submodule SHA:** Get the current short SHA from the appropriate submodule.
3.  **Identify Target File:** Locate the `STATUS.md` file at `meta/skills/<skill_name>/STATUS.md`.
4.  **Update Content:** Replace `Status: <old>` and `Last Verified SHA: <old>` with the new values.

**Example Usage:**

`/update_status conversation-flow --status "Active"`

### `/add_todo "<task>"`

Adds a new task to the `PROJECT_TODO.md` file.

**Workflow:**

1.  **Identify Target File:** Locate the `PROJECT_TODO.md` file in the project root.
2.  **Append and Write:** Insert the new task `- [ ] <task>` under the `## 🎯 Open Tasks` section.
