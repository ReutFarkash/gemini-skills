---
name: conversation-flow
description: Generates a high-fidelity topological map using both the Session Flight Recorder and internal session memory for maximum accuracy and narrative depth.
---

# Conversation Flow (v3.0)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It synthesizes data from the `meta/SESSION_FLIGHT_RECORDER.md` (if available) and the agent's internal session memory to create a verifiable, detailed engineering journey.

## Workflow: Generating a v3.0 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates and vault configuration.
2.  **Gather Session Data (Dual-Source):**
    *   **Flight Recorder:** Read `meta/SESSION_FLIGHT_RECORDER.md` to extract the structured "Turn Ledger," including Git SHAs, tool outcomes, and specific detours.
    *   **Internal Memory:** Review the full conversation history to capture narrative nuance, creative ideas, and specific directives that might not be in the ledger yet.
    *   **Synthesis:** Combine both sources to identify the primary engineering path and all technical "side-tracks."
    *   *Note: In the future, if the Flight Recorder proves sufficient, we may remove the dependency on internal memory to conserve computation.*
3.  **Narrative Attribution:**
    *   **User (Director):** Prefix nodes representing user directives, ideas, or feedback with `👤`.
    *   **Agent (Executor):** Prefix nodes representing research, implementation, or technical actions with `🤖`.
4.  **Generate Flowchart Syntax:**
    *   **The Integrated Node:** Use semantic shapes and HTML-enhanced labels from v2.12.
    *   **Reference Links:** Use `<a class='internal-link'>` for summaries and `<a href>` for Git/Web links.
    *   **Sanitization:** Enforce strict label cleaning (no leading numbers/colons).
5.  **Connect the Nodes:** Map the direct path and visual detours (dashed borders) based on the "Outcome" column of the Flight Recorder.
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
7.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Synthesized from dual-source data)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef detour stroke-dasharray: 5 5, fill:#fff0f0, stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
