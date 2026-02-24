---
name: conversation-flow
description: Generates a high-resolution, HTML-linked topological map of the conversation. Uses `meta/ENGINEERING_STANDARDS.md` to ensure syntax reliability (v3.3).
version: v1.0.2
---

# Conversation Flow (v3.3 - Golden v2.5 Standards)

## Overview
This skill generates a high-fidelity narrative map. It prioritizes **Resolution Persistence** and **Visual Clarity**, using HTML anchor tags for robust linking and distinct node shapes for different conversation states.

## Workflow: Generating a v3.3 Flow Analysis

1.  **Read Shared Settings & Standards:**
    *   Read `../_shared-gemini/skill_settings.md` for templates.
    *   Read `meta/ENGINEERING_STANDARDS.md` for current technical solutions.
2.  **Gather Session Data:**
    *   **NO COMPRESSION:** Map every technical turn and narrative pivot.
    *   **Flight Recorder:** Read `meta/SESSION_FLIGHT_RECORDER.md` for SHAs and outcomes.
3.  **Project Partitioning (MANDATORY):**
    *   **Identify Projects:** Group turns by the project they belong to (e.g., `Assistant Infra`, `Skills Dev`, `Sublet Search`).
    *   **Use Subgraphs:** Wrap related nodes in `subgraph ProjectName`.
    *   **Cross-Links:** Use arrows to connect nodes across different subgraphs when an action in one project impacts or triggers an action in another.
4.  **Visual Taxonomy (v2.5 Standard):**
    *   **Checkpoints:** `NodeID(("Label <a href='...'>🏷️</a>")):::checkpoint` (Double Circle)
    *   **Decisions:** `NodeID{"Label <a href='...'>🐙</a>"}` (Rhombus)
    *   **Research:** `NodeID{{"Label <a href='...'>§</a>"}}` (Hexagon)
    *   **Implementation:** `NodeID["Label <a href='...'>🐙</a>"]` (Rectangle)
    *   **Detours/Bugs:** `NodeID(["Label <a href='...'>🐞</a>"]):::detour` (Stadium)
4.  **Generate Flowchart Syntax:**
    *   **HTML Links:** Use `<a href='...'>§</a>` or `<a href='...'>🐙</a>` inside node labels.
    *   **NO ARROWS TO SKILLS:** Do not link skill nodes to the narrative flow. List active skills in the `[!ABSTRACT]` callout or a floating subgraph.
    *   **HEX CODE MANDATE:** Use only 6-digit hex codes in `classDef`.
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview, including the list of active skills and their versions.
6.  **Session Wrap-up Tagging:** Generate the chat save tag according to `meta/ENGINEERING_STANDARDS.md` v1.8. Provide it as the very last line of the response, alone and unstyled.

## Validated Styling Block (MANDATORY)
```mermaid
    classDef research fill:#d1ecf1,stroke:#0c5460;
    classDef implementation fill:#d4edda,stroke:#155724;
    classDef decision fill:#fff3cd,stroke:#856404;
    classDef fail fill:#f8d7da,stroke:#721c24;
    classDef detour stroke-dasharray: 5 5, fill:#fff0f0, stroke:#721c24;
    classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```

## Output Structure
1. YAML Frontmatter
2. [!ABSTRACT] Callout (Metadata, Active Skills, versions)
3. Mermaid Topological Map
4. Textual Breakdown (Summary, Open Loops, Decisions)
