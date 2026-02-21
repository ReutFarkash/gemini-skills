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

1.  **Identify Submodule States:** Get the current short Git SHA (`git rev-parse --short HEAD`) for both `skills/public` and `skills/internal`.
2.  **Find Files:** Locate all `STATUS.md`, `HISTORY.md` files within the `meta/skills/` directory and the `PROJECT_TODO.md` in the root.
3.  **Update Status Files:** For each `STATUS.md` file, update the `Last Update` date and the `Last Verified SHA` (based on which submodule the skill belongs to).
4.  **Update `PROJECT_STATUS.md`:** Create or update a `PROJECT_STATUS.md` file in the project root with a manifest report containing:
    *   A "Project Status Summary" section.
    *   The current status, most recent history entry, and current Git SHA for each skill.
    *   A list of open tasks from `PROJECT_TODO.md`.

**Example Usage:**

"Review the project status."

### `/log_change <skill_name> "<message>"`

Appends a new entry to the `HISTORY.md` file, tethered to the current Git SHA.

**Workflow:**

1.  **Identify Submodule SHA:**
    *   If skill is `quartz-blog-post`, use SHA from `skills/internal`.
    *   Otherwise, use SHA from `skills/public`.
    *   Command: `git rev-parse --short HEAD` inside the submodule directory.
2.  **Identify Target File:** Locate the `HISTORY.md` file at `meta/skills/<skill_name>/HISTORY.md`.
3.  **Construct New Entry:** Create a formatted entry: `### YYYY-MM-DD [ref: <sha>]`.
4.  **Append and Write:** Prepend the new entry and message to the existing content.

**Example Usage:**

`/log_change obsidian-chat-summary "Refactored output path to /output folder."`

### `/update_status <skill_name> --status "<new_status>"`

Updates the `Status` and `Last Verified SHA` in a skill's `STATUS.md` file.

**Workflow:**

1.  **Identify Submodule SHA:** Get the current short SHA from the appropriate submodule.
2.  **Identify Target File:** Locate the `STATUS.md` file at `meta/skills/<skill_name>/STATUS.md`.
3.  **Update Content:** Replace `Status: <old>` and `Last Verified SHA: <old>` with the new values.

**Example Usage:**

`/update_status conversation-flow --status "Active"`

### `/add_todo "<task>"`

Adds a new task to the `PROJECT_TODO.md` file.

**Workflow:**

1.  **Identify Target File:** Locate the `PROJECT_TODO.md` file in the project root.
2.  **Append and Write:** Insert the new task `- [ ] <task>` under the `## 🎯 Open Tasks` section.
