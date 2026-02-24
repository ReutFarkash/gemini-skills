---
name: session-tracker
description: Manages a global, version-controlled history of all Gemini CLI sessions, creating a detailed manifest for each session with metadata for debugging and observability.
---

# Session Tracker

## 1. Overview
The `session-tracker` skill provides a robust system for logging and tracking individual Gemini CLI sessions. It creates a unique manifest for each session, capturing critical metadata like the models used, CLI version, and a summary of activities. This provides a powerful, queryable history for debugging, performance analysis, and understanding how work gets done.

## 2. Core Architecture
This skill operates on a dedicated, version-controlled directory located at `/Users/reut/Code/coffeeproject/meta/session_history/`.

- **`_SESSION_INDEX.md`**: A master list of all sessions ever recorded.
- **`manifests/`**: Contains the individual Markdown file for each session's manifest.

## 3. Commands

### `/session/start [name]` (AUTOMATIC)
- **Trigger:** This should be triggered automatically by the `session-manager` skill at the beginning of any new session.
- **Action:**
    1.  Generates a unique, timestamp-based `session_id` (e.g., `20260224150000`).
    2.  If a `[name]` is not provided, it analyzes the user's initial prompt to generate a human-readable name (e.g., "Data Vault Refactor").
    3.  Creates a new manifest file: `manifests/{session_id}.md`.
    4.  Populates the manifest with initial metadata: `session_id`, `name`, `start_time`, `project_context`, `cli_version`, `initial_model`.
    5.  Appends a new entry to the `_SESSION_INDEX.md` table.

### `/session/end` (AUTOMATIC)
- **Trigger:** This should be triggered automatically by the `session-manager` when the user quits a session.
- **Action:**
    1.  Adds the `end_time` to the current session's manifest.
    2.  Updates the status in the `_SESSION_INDEX.md`.

### `/session/tag-save <tag_name>`
- **Trigger:** Manually run by the user or another skill after a `/chat save`.
- **Action:** Appends the provided `<tag_name>` to the `chat_saves` list in the current session's manifest.

## 4. Git Integration
A key feature of this skill is its ability to link code changes directly to the session that produced them.

- **Workflow:** When the `git-flow-automator` skill drafts a commit message, it will call upon the `session-tracker` to get the current `session_id`.
- **Implementation:** The `git-flow-automator` will then append the ID to the commit message as a footer:
  ```
  feat(data_vault): Add new personnel files

  Creates entities for Anwesh Marwade and Charlotte York.

  Session-ID: 20260224150000
  ```

## 5. Example Session Manifest (`manifests/20260224150000.md`)
```markdown
---
id: 20260224150000
name: Data Vault Refactor
project: /Users/reut/Code/assistant
status: active
---

# Session Manifest: Data Vault Refactor

- **Start Time:** 2026-02-24 15:00:00
- **End Time:** 
- **CLI Version:** 1.5.2
- **Models Used:**
  - gemini-1.5-pro
- **Chat Saves:**
  - `refactor-complete-state`
```
