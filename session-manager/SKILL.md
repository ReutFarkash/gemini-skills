---
name: session-manager
description: Automates the "Boot Sequence" for a Gemini session. Activates background listeners, verifies directory access, and warms up context from the project history.
version: v1.0.0
---

# Session Manager

## Overview
This skill provides a standardized initialization routine for any Gemini project. It ensures that required background skills are active and that the agent has verified access to all critical directories before beginning work.

## Commands

### `/start_session`

Performs the "Executive Boot Sequence."

**Workflow:**

1.  **Activate Background Listeners:**
    *   Activate `git-flow-automator`.
    *   Activate `project-maintainer`.
    *   Activate `session-tracker`.
2.  **Initialize Session Tracking:**
    *   Call `/session/start` to generate a `session_id` and create a manifest in `coffeeproject/meta/session_history/`.
3.  **Verify Directory Access (Guard):**
    *   **Logic:** The agent reads the required directory list from the project's `GEMINI.md` or a provided configuration.
    *   **User Check:** For this specific vault, verify access to:
        - `Infrastructure`
        - `Meta`
        - `Vault`
        - `Skills`
    *   **Prompt:** If any directory is missing, inform the user and provide the instruction needed to load them.
3.  **Context Warm-up:**
    *   Read the project's primary TODO file (`meta/PROJECT_TODO.md` or `README.md`).
    *   Read the most recent history entries (e.g., `meta/SESSION_FLIGHT_RECORDER.md`).
4.  **Initialize Session Log:**
    *   Create a "Session Started" entry in the flight recorder.
    *   Capture the current Git state (SHA) if available.
5.  **Present Briefing:**
    *   Provide a concise "Welcome Back" summary:
        - "Current Goal: [Goal]"
        - "Last Action: [Action]"
        - "Status: Environment Verified."

## Workflow & Constraints
- **MANDATORY START:** This command should be the very first action taken in a new session.
- **PROACTIVE REMINDERS:** If the agent detects it's a new session but `/start_session` hasn't been run, it MUST prompt the user to execute it.
