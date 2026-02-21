---
name: conversation-flow
description: Generates an interactive Mermaid.js flowchart and metadata dashboard, deep-linked to technical summaries and Git commits.
---

# Conversation Flow (v2)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It links engineering intent to technical execution by pairing visual nodes with Obsidian summary headers and verifiable Git SHAs.

## Workflow: Generating a v2 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates.
2.  **Analyze Technical Context:**
    *   **State Preservation:** Identify the specific `/chat save <tag>` used for this session.
    *   **Repository Mapping:** For each active repository (e.g., `coffeeproject`, `skills/public`):
        - Identify the branch: `git branch --show-current`.
        - Extract relevant SHAs: `git log -n 5 --pretty=format:"%h"`.
        - Build GitHub URLs: Construct links using the pattern `https://github.com/[User]/[Repo]/commit/[SHA]`.
    *   **Toolbelt:** Review history to count tool usage (e.g., `write_file`, `replace`).
3.  **The Pairing Engine:**
    - **Vault Link:** Identify the filename of the corresponding Obsidian Session Summary.
    - **Header Anchors:** Review the summary content to identify specific headers (e.g., `## 🏗️ 1. Infrastructure`) that correspond to implementation nodes.
4.  **Generate Flowchart Syntax:**
    *   **Semantic Shapes:**
        - **Research:** `NodeName{{Text}}` (Hexagon)
        - **Implementation:** `NodeName[Text]` (Rectangle)
        - **Decision:** `NodeName{Text}` (Diamond)
        - **Fail/Obstacle:** `NodeName([Text])` (Cylinder)
        - **Success/Checkpoint:** `NodeName((Text))` (Circle)
    *   **Deep-Linking (Interaction):**
        - **Summary Links:** Link nodes to summary headers: `click NodeName "[[SummaryFile#Header]]"`.
        - **Git Links:** Link nodes to GitHub commits: `click NodeName "https://github.com/..."`.
5.  **CRITICAL: Triple-Escaping:**
    *   All node labels containing backticks MUST use triple-escaping: `\\\`code\\\``.
6.  **Format Dashboard:**
    *   Create a prominent callout (`> [!ABSTRACT] Session Technical Overview`) including:
        - **Chat Tag:** The `/chat save` tag.
        - **Verified SHAs:** List repos, branches, and clickable SHAs.
        - **Pairing:** Direct WikiLink to the Session Summary.
7.  **Write to File:** Save to `output/YYYY-MM-DD_HHMMSS-conversation-flow.md`.

## Output Structure

1.  **YAML Frontmatter** (Standard list-style tags)
2.  **Interactive Dashboard** (Abstract callout with Git/Vault links)
3.  **Topological Map** (Mermaid graph with semantic shapes and click events)
4.  **Textual Breakdown** (Concise summary of decisions and open loops)

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```
