---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart and metadata dashboard, deep-linked to technical summaries and Git commits.
---

# Conversation Flow (v2.1)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It links engineering intent to technical execution by pairing visual nodes with Obsidian summary headers and verifiable Git SHAs.

## Workflow: Generating a v2 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Analyze Technical Context:**
    *   **State Preservation:** Identify the specific `/chat save <tag>` used for this session.
    *   **Repository Mapping:** For each active repository, identify branch, SHAs, and GitHub URLs.
3.  **The Pairing Engine:** Identify Summary filename and Header anchors.
4.  **Generate Flowchart Syntax:**
    *   **CRITICAL: Node Label Formatting:**
        - **Quote All Labels:** All node labels **MUST** be wrapped in double quotes to prevent rendering errors.
        - **No Markdown Lists:** Never start a label with `1.`, `- `, or `* `. 
        - **Escaping:** Use triple-backslashes for backticks: `Node["Refactor \\\`file.md\\\`"]`.
    *   **Semantic Shapes:**
        - **Research:** `NodeName{{"Text"}}` (Hexagon)
        - **Implementation:** `NodeName["Text"]` (Rectangle)
        - **Decision:** `NodeName{"Text"}` (Diamond)
        - **Fail/Obstacle:** `NodeName(["Text"])` (Cylinder)
        - **Success/Checkpoint:** `NodeName(("Text"))` (Circle)
5.  **Interactive Logic:** Use `click` events for deep-linking to summary headers and Git commits.
6.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with session metadata.
7.  **Write to File:** Save to `output/YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Mermaid graph with quoted labels)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
