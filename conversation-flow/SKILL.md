---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart using HTML links within node labels for maximum compatibility with Obsidian and web renderers.
---

# Conversation Flow (v2.5)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It uses HTML anchor tags within node labels to enable multiple, independent clickable links, overcoming the limitations of standard Markdown rendering in some Mermaid environments.

## Workflow: Generating a v2.5 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates and `vault_output_directory` and `vault_name`.
2.  **Metadata Inventory:** Track URLs for Git commits, Obsidian summary headers (as URIs), chat tags, and external sources.
3.  **Generate Flowchart Syntax:**
    *   **HTML Links:** Use HTML `<a>` tags inside quoted labels: `NodeID["Label <a href='URL'>🐙</a> <a href='URL'>§</a>"]`.
    *   **Obsidian URIs:** For internal links, construct them using the `vault_name` and filename: `obsidian://open?vault={{vault_name}}&file={{filename_encoded}}`. Ensure filename is URL-encoded if it contains spaces.
    *   **Icon Mapping:**
        - `🐙`: GitHub/GitLab Commit URL.
        - `§`: Obsidian Summary header (via Obsidian URI).
        - `🏷️`: Chat save tag reference.
4.  **CRITICAL: Formatting:**
    *   Always use double quotes for the label and single quotes for the HTML attributes: `"Text <a href='...'></a>"`.
    *   Avoid backticks inside labels unless they are properly escaped for HTML.
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session technical overview.
6.  **Write to File:** Save to the `vault_output_directory` defined in shared settings.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With HTML-Linked Icons)
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
