---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart using a "Card & Button" (subgraph) architecture for robust, multi-link Obsidian support.
---

# Conversation Flow (v2.6)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It uses Mermaid subgraphs to act as "Task Cards," each containing individual clickable nodes ("Buttons") for Git commits, technical summaries, and session tags.

## Workflow: Generating a v2.6 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates and vault configuration.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers (as URIs), and chat tags.
3.  **Generate Flowchart Syntax:**
    *   **Task Card (Subgraph):** For every major task, create a subgraph with a descriptive label.
    ```mermaid
    subgraph ID ["Task Label"]
        direction LR
        ID_Git(("🐙"))
        ID_Sum(("§"))
    end
    ```
    *   **Button Nodes:** Use icons as labels for internal nodes (`🐙`, `§`, `🏷️`).
    *   **Native Click Events:** Use the Mermaid `click` command at the bottom of the graph for each button: `click ID_Git "https://github.com/..."`.
4.  **Connect the Cards:** Draw arrows between the subgraphs (e.g., `ID1 --> ID2`) to show the session narrative.
5.  **CRITICAL: Formatting:**
    *   Quote all subgraph labels: `subgraph ID ["Label"]`.
    *   Ensure each internal node ID is unique (e.g., `Task1_Git`).
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
7.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Card & Button architecture)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef button fill:#f9f9f9,stroke:#333,stroke-width:1px;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
