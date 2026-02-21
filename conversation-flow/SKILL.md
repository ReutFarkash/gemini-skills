---
name: conversation-flow
description: Generates a Mermaid.js flowchart and a textual summary of the current conversation's narrative structure, including metadata callouts and Git SHAs.
---

# Conversation Flow

## Overview

This skill enables the Gemini CLI agent to analyze the current conversation's history and generate a high-fidelity visual flowchart of its narrative structure. It provides a topological map of the session, linking intent, technical implementation (Git SHAs), and session metadata into an interactive index for an Obsidian vault.

## Workflow: Generating a Conversation Flow

To construct a conversation flow analysis, perform the following steps:

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for naming, frontmatter, and metadata templates.
2.  **Analyze Technical Context:**
    *   **Git State:** Run `git rev-parse --short HEAD` in active repositories (e.g., `coffeeproject`, `skills/public`).
    *   **Tool Usage:** Review history to count usage of primary tools (e.g., `replace`, `grep_search`, `write_file`).
    *   **Feature Log:** Identify specific feature names or infrastructure changes implemented.
3.  **Analyze Narrative Structure:** Identify the main goals, technical research phases, implementation steps, critical decisions, and unresolved "open loops."
4.  **Generate Flowchart Syntax:**
    *   **Schema & Shapes:** Use the following semantic schema for nodes:
        - **Research:** `NodeName{{Text}}` (Hexagon)
        - **Implementation:** `NodeName[Text]` (Rectangle)
        - **Decision:** `NodeName{Text}` (Diamond)
        - **Bug/Obstacle:** `NodeName([Text])` (Cylinder)
        - **Success/Checkpoint:** `NodeName((Text))` (Circle)
        - **Open Loop:** `NodeName[Text] -.-` (Dashed connection)
    *   **Class Definitions:** Include `classDef` statements at the bottom of the Mermaid block for colors (e.g., `classDef implementation fill:#dfd,stroke:#383`).
5.  **CRITICAL: Backtick Escaping Verification:**
    *   All backticks used inside node labels **MUST** be triple-escaped for Mermaid rendering.
    *   Example: `[Refactor \`SKILL.md\`]` MUST be written as `[Refactor \\\`SKILL.md\\\`]`.
    *   **Action:** Explicitly scan the generated string. If a backtick is not preceded by `\\\`, use a replacement tool to correct it before writing to the file.
6.  **Format and Present:**
    *   **Frontmatter:** Use the standardized list-style tags and `date_created` from shared settings.
    *   **Technical Dashboard:** Create an Obsidian callout (`> [!ABSTRACT] Session Technical Overview`) at the top containing primary repos, core features, tool usage, and key Git refs.
    *   **Mermaid Block:** Place the flowchart inside a `\`\`\`mermaid` block.
    *   **Textual Summary:** Provide a concise breakdown of objectives and decisions below the graph.
7.  **Write to File:** Save to the `output/` directory using the timestamp format: `YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Metadata Dashboard** (Obsidian Callout)
3.  **Mermaid Flowchart** (with semantic shapes and class styling)
4.  **Textual Summary** (Goals, Decisions, Open Loops)

### Class Styling Template
Add these to the bottom of your Mermaid blocks:
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
