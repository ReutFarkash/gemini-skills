---
name: conversation-flow
description: Generates an ultra-high resolution topological map. Uses the meta/ENGINEERING_STANDARDS.md to ensure persistent syntax reliability and robust Obsidian linking.
---

# Conversation Flow (v3.2)

## Overview

This skill generates a topological map of a Gemini CLI session. It prioritizes **Resolution Persistence**: it must read `meta/ENGINEERING_STANDARDS.md` before generating any output to ensure the "Golden" Mermaid syntax is used, preventing regressions in linking or rendering.

## Workflow: Generating a v3.2 Flow Analysis

1.  **Read Shared Settings & Standards:**
    *   Read `../_shared-gemini/skill_settings.md` for templates.
    *   Read `meta/ENGINEERING_STANDARDS.md` for current technical solutions (linking, sanitization, escaping).
2.  **Gather Session Data (Dual-Source & Ultra-High Res):**
    *   **NO COMPRESSION:** Every technical turn and narrative pivot must be mapped.
    *   **Flight Recorder:** Read `meta/SESSION_FLIGHT_RECORDER.md` for SHAs and outcomes.
    *   **Memory:** Trace the exact narrative sequence, including specific user feedback and pivots.
3.  **Visual Taxonomy & Attribution:**
    *   `👤` User / `🤖` Agent icon attribution.
    *   Semantic shapes (Hexagons, Rectangles, Diamonds).
    *   Resolution classes (`resolved`, `detour`, `pivoted`).
4.  **Generate Flowchart Syntax (Standard-Compliant):**
    *   **Linking:** Use `<a class='internal-link' href='SummaryName'>§</a>` for Obsidian.
    *   **Labelling:** Wrap all labels in double quotes. No leading numbers.
5.  **Format Dashboard:** Create the `[!ABSTRACT]` callout with the session технический overview.
6.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Ultra-High Resolution & Standard-Compliant)
4.  **Textual Breakdown**

### Class Styling Template
```mermaid
classDef research fill:#d1ecf1,stroke:#0c5460;
classDef implementation fill:#d4edda,stroke:#155724;
classDef decision fill:#fff3cd,stroke:#856404;
classDef fail fill:#f8d7da,stroke:#721c24;
classDef detour stroke-dasharray: 5 5, fill:#fff0f0, stroke:#721c24;
classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
classDef pivoted stroke:#fa0,stroke-width:4px;
```
