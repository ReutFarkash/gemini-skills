---
name: conversation-flow
description: Generates an aesthetic "Card & Button" Mermaid.js flowchart using semantic shapes and tiny, clickable button nodes for Obsidian WikiLinks.
---

# Conversation Flow (v2.8)

## Overview

This skill generates a topological map of a Gemini CLI session. It uses an aesthetic "Task Card" layout: each task is a subgraph containing a primary semantic node (the action) and tiny "Button Nodes" for independent clicking of Git commits and Obsidian WikiLinks.

## Workflow: Generating a v2.8 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers, and chat tags.
3.  **Generate Flowchart Syntax:**
    *   **The Task Card (Subgraph):** For every task, create a subgraph.
    ```mermaid
    subgraph ID [" "]
        direction LR
        ID_Main{{Task Label}}:::research
        ID_Git(("🐙")):::tinyButton
        ID_Sum(("§")):::tinyButton
    end
    ```
    *   **Aesthetic Rules:**
        - **Main Node Shape:** Use semantic shapes for the internal `ID_Main` node:
            - Research: `{{Text}}` (Hexagon)
            - Implementation: `[Text]` (Rectangle)
            - Decision: `{Text}` (Diamond)
            - Fail/Detour: `([Text])` (Cylinder)
            - Checkpoint: `((Text))` (Circle)
        - **Label Sanitization:** Keep the strict sanitization from v2.7 (no leading `1.`, no colons).
        - **Tiny Buttons:** Internal reference nodes (🐙, §, 🏷️) should be circular and tiny.
    *   **Linking (Standard WikiLinks):**
        - For Obsidian links, use standard WikiLinks: `click ID_Sum "[[Filename#Header]]"`.
        - For Git, use standard URLs: `click ID_Git "https://github.com/..."`.
4.  **Connect the Main Nodes:** Draw arrows between the *main* nodes of each card (e.g., `ID1_Main --> ID2_Main`).
5.  **Styling:** Use `classDef` to make the buttons minimal and the main nodes colorful.
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
7.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Aesthetic Card & Button)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
classDef tinyButton fill:#fff,stroke:#999,stroke-width:0.5px,font-size:10px;
```
