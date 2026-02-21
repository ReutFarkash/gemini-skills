---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart using reference-centric iconography to link session narrative to Git SHAs, summaries, and external sources.
---

# Conversation Flow (v2.3)

## Overview

This skill generates a topological map of a Gemini CLI session. It uses a standardized set of icons within node labels to act as shorthands for various types of technical and narrative proof, keeping the visualization clean while maximizing information density.

## Workflow: Generating a v2.3 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Analyze Technical Context (Incremental Recall):**
    *   **Metadata Inventory:** Track SHAs, summary headers, web sources, and chat tags associated with specific implementation steps.
    *   **Identify Pairing:** Determine the Session Summary filename.
3.  **Generate Flowchart Syntax:**
    *   **Reference-Centric Icons:** Append icons to node labels to signify attached metadata:
        - Git Commit: `🐙` (Links to GitHub/GitLab)
        - Summary Header: `§` (Links to Obsidian Summary)
        - Chat Checkpoint: `🏷️` (References `/chat save` tag)
        - Web Source: `🌐` (Links to documentation)
        - Local Source: `🏠` (Links to local file)
        - Code Snippet: `✂️` (Links to specific summary section)
    *   **Interaction Strategy:**
        - If a node has a Git Commit (`🐙`), prioritize linking to the GitHub diff.
        - If no commit exists but a Summary Header (`§`) does, link to the header.
        - Use `click NodeName "URL_OR_WIKILINK"`.
    *   **Semantic Shapes (Node Types):**
        - Research: `NodeName{{Text}}`
        - Implementation: `NodeName[Text]`
        - Detour/Bug: `NodeName(["Text"])`
        - Decision: `NodeName{"Text"}`
        - Success/Checkpoint: `NodeName((Text))`
4.  **CRITICAL: Formatting:**
    *   Quote ALL labels: `["Label with Icons § 🐙"]`.
    *   Triple-escape backticks: `\\\`code\\\``.
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
6.  **Write to File:** Save to `output/YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (With Reference-Centric Icons)
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
