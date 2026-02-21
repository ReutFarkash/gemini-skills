---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart featuring detour/bug schemas, semantic iconography, and deep-linked technical metadata.
---

# Conversation Flow (v2.2)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It visualizes both the main engineering path and the unavoidable "detours" (bugs/side-tasks), using semantic iconography to represent different data types.

## Workflow: Generating a v2.2 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Analyze Technical Context (Incremental Recall):**
    *   **Git & State:** Identify repos, branches, SHAs, and GitHub URLs.
    *   **Side-Tracks:** Identify any bugs or tangents encountered. Note if they were resolved or remain open.
    *   **Metadata Tally:** List tools used, session tags, and external sources.
3.  **The Pairing Engine:** Identify the corresponding Session Summary headers for Implementation nodes.
4.  **Generate Flowchart Syntax:**
    *   **Semantic Shapes & Icons:**
        - **Research:** `NodeName{{"💡 Text"}}` (Hexagon + Idea Icon)
        - **Implementation:** `NodeName["🛠️ Text"]` (Rectangle + Tool Icon)
        - **Detour/Bug:** `NodeName(["🐞 Text"])` (Cylinder + Bug Icon)
        - **Decision:** `NodeName{"⚖️ Text"}` (Diamond)
        - **Success/Checkpoint:** `NodeName(("🏷️ Text"))` (Circle + Tag Icon)
    *   **Label Icons:** Append icons to labels based on linked info:
        - Git SHA: `# <sha>`
        - Summary Header: `§ <heading>`
        - Web Source: `🌐`
        - Local Path: `🏠`
    *   **Detour Styling:** Use `classDef detour stroke-dasharray: 5 5` for tangents.
5.  **CRITICAL: Formatting:**
    *   Quote ALL labels: `["Text"]`.
    *   Triple-escape backticks: `\\\`code\\\``.
6.  **Interactive Logic:** Use `click` events for deep-linking.
7.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the full session manifest.
8.  **Write to File:** Save to `output/YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With Detours and Icons)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef detour stroke-dasharray: 5 5;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
