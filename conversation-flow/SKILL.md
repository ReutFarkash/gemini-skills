---
name: conversation-flow
description: Generates an aesthetic topological map with reference buttons embedded directly into semantic nodes using HTML for robust Obsidian linking.
---

# Conversation Flow (v2.9)

## Overview

This skill generates a topological map of a Gemini CLI session. It uses an integrated aesthetic layout: technical and narrative reference buttons are embedded directly into the primary task nodes using HTML anchor tags, ensuring a compact visualization with multiple clickable entry points.

## Workflow: Generating a v2.9 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers, and chat tags.
3.  **Generate Flowchart Syntax:**
    *   **The Integrated Node:** For every task, create a single node with an HTML-enhanced label.
    ```mermaid
    NodeID["Task Label <a class='internal-link' href='Summary'>§</a> <a href='URL'>🐙</a>"]
    ```
    *   **Aesthetic Rules:**
        - **Node Shapes:**
            - Research: `NodeID{{Label}}` (Hexagon)
            - Implementation: `NodeID[Label]` (Rectangle)
            - Decision: `NodeID{Label}` (Diamond)
            - Fail/Detour: `NodeID([Label])` (Cylinder)
            - Checkpoint: `NodeID((Label))` (Circle)
        - **Label Sanitization:** No leading numbers (e.g., `Phase 1 -`), no colons.
    *   **Linking:**
        - Use `<a class='internal-link' href='Note Name'>§</a>` for Obsidian summaries.
        - Use `<a href='URL'>🐙</a>` for Git commits.
4.  **Connect the Nodes:** Draw arrows directly between the task nodes (e.g., `Node1 --> Node2`).
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
6.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Integrated Aesthetic Nodes)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
