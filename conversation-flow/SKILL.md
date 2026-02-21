---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart using a "Card & Button" (subgraph) architecture with strict label sanitization for 100% Obsidian compatibility.
---

# Conversation Flow (v2.7)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It uses Mermaid subgraphs ("Task Cards") with internal clickable nodes ("Buttons"), enforcing strict label sanitization to prevent rendering errors in the Obsidian Markdown environment.

## Workflow: Generating a v2.7 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates and vault configuration.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers (as URIs), and chat tags.
3.  **Generate Flowchart Syntax:**
    *   **Task Card (Subgraph):** For every major task, create a subgraph.
    *   **STRICT LABEL SANITIZATION:**
        - **No Leading Numbers:** Labels **MUST NOT** start with a number followed by a period (e.g., `1.`). Use `Phase 1 -` or just the text.
        - **No Markdown Symbols:** Never start a label with `-`, `*`, or `>`.
        - **No Colons:** Avoid using colons `:` in labels if possible; use dashes `-` instead.
        - **Quotes:** All subgraph labels MUST be wrapped in double quotes: `subgraph ID ["Label"]`.
    *   **Button Nodes:** Use icons as labels for internal nodes (`🐙`, `§`, `🏷️`).
    *   **Native Click Events:** Use the Mermaid `click` command at the bottom of the graph for each button.
4.  **Connect the Cards:** Draw arrows between the subgraphs (e.g., `ID1 --> ID2`).
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
6.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With sanitized subgraph labels)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef button fill:#f9f9f9,stroke:#333,stroke-width:1px;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
