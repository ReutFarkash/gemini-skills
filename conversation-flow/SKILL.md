---
name: conversation-flow
description: Generates a high-fidelity topological map with user/agent attribution and visual resolution states.
---

# Conversation Flow (v2.10)

## Overview

This skill generates a topological map of a Gemini CLI session. It visualizes the engineering journey with high-fidelity attribution, distinguishing between User directives and Agent actions, and marking the resolution state of each task thread.

## Workflow: Generating a v2.10 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Analyze Narrative Attribution:**
    *   **User (Director) Nodes:** Identify original ideas, directives, and feedback.
    *   **Agent (Executor) Nodes:** Identify research, implementation, and tool usage.
3.  **Analyze Resolution States:**
    *   **Resolved:** Tasks successfully completed or bugs fixed.
    *   **Open:** Deferred tasks or unresolved loops.
    *   **Miscommunication:** Points where the agent veered off-path or required course correction.
4.  **Generate Flowchart Syntax:**
    *   **Attribution Styling:**
        - User nodes: Use `UserNode[[Label]]` (Double-bordered rectangle).
        - Agent nodes: Standard shapes from v2.9.
    *   **Resolution Classes:**
        - Resolved: `:::resolved`
        - Open: `:::open`
        - Miscommunication: `:::pivoted`
    *   **Integrated Buttons:** Continue embedding HTML links within labels as per v2.9.
5.  **CRITICAL: Formatting:** Quote ALL labels and ensure proper class application.
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
7.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With Attribution & Resolution Classes)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef detour stroke-dasharray: 5 5, fill:#fff0f0, stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;

classDef resolved stroke:#0f0,stroke-width:3px;
classDef open stroke:#f00,stroke-dasharray: 5 5;
classDef pivoted stroke:#fa0,stroke-width:4px;
```
