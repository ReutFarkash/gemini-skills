---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart using inline Markdown links within node labels to point to SHAs, summaries, and external sources.
---

# Conversation Flow (v2.4)

## Overview

This skill generates a topological map of a Gemini CLI session. It leverages Mermaid's Markdown string support to embed multiple, independent clickable links within a single node, allowing icons to act as direct portals to technical and narrative proof.

## Workflow: Generating a v2.4 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers, chat tags, and external sources associated with each node.
3.  **Generate Flowchart Syntax:**
    *   **Markdown Strings:** Use the backtick-quoted string syntax for nodes to enable Markdown links: `NodeID["`**Text** [🐙](URL) [§](URL)`"]`.
    *   **Icon Mapping:**
        - `🐙`: GitHub/GitLab Commit URL.
        - `§`: Obsidian Summary header WikiLink.
        - `🏷️`: Chat save tag reference.
        - `🌐`: Documentation URL.
    *   **Interaction:** Do NOT use the global `click` command. Instead, embed standard Markdown `[icon](link)` syntax directly into the label string.
4.  **CRITICAL: Formatting & Escaping:**
    *   The outer quotes must be double-quotes, and the inner string must start and end with a backtick: `"``Text [🐙](link)``"`.
    *   Ensure all Markdown syntax within the label is valid.
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
6.  **Write to File:** Save to `output/YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With Hyper-Linked Icons)
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
