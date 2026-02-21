---
name: conversation-flow
description: Generates an aesthetic topological map with icon-based attribution (👤 User / 🤖 Agent) and integrated HTML reference buttons.
---

# Conversation Flow (v2.12)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It uses integrated aesthetic nodes with multiple clickable entry points and clear icon-based attribution to distinguish between human directives and agent execution.

## Workflow: Generating a v2.12 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Narrative Attribution:**
    *   **User (Director):** Prefix all nodes representing user directives, ideas, or feedback with the `👤` icon.
    *   **Agent (Executor):** Prefix all nodes representing research, implementation, or technical actions with the `🤖` icon.
3.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers, and chat tags.
4.  **Generate Flowchart Syntax:**
    *   **The Integrated Node:** Create single nodes with HTML-enhanced labels.
    ```mermaid
    NodeID["👤 User Directive <a class='internal-link' href='Summary'>§</a>"]
    NodeID["🤖 Agent Action <a href='URL'>🐙</a>"]
    ```
    *   **Aesthetic Standards:**
        - Hexagons `{{ }}` for Research, Rectangles `[ ]` for Implementation, Diamonds `{ }` for Decisions.
        - **Label Sanitization:** Avoid leading numbers or colons.
    *   **Linking:**
        - Use `<a class='internal-link' href='Note Name'>§</a>` for Obsidian summaries.
        - Use `<a href='URL'>🐙</a>` for Git commits.
5.  **Connect the Nodes:** Draw direct arrows between the task nodes.
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
7.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With 👤/🤖 Icon Attribution)
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
