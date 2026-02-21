---
name: conversation-flow
description: Generates a high-fidelity topological map. Mandates ultra-high resolution by synthesizing granular turn-by-turn memory with Flight Recorder data.
---

# Conversation Flow (v3.1)

## Overview

This skill generates a high-fidelity topological map of a Gemini CLI session. It mandates **Ultra-High Resolution**: every significant pivot, feedback loop, and implementation step must be visualized. It synthesizes structured telemetry from the Flight Recorder with the deep narrative granularity of the session memory.

## Workflow: Generating a v3.1 Flow Analysis

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file for templates and vault configuration.
2.  **Gather Session Data (High-Resolution Synthesis):**
    *   **NO COMPRESSION:** Do not summarize multiple technical turns into a single node. Every major turn deserves visual representation.
    *   **Flight Recorder:** Use the `meta/SESSION_FLIGHT_RECORDER.md` to anchor nodes with correct SHAs and outcomes.
    *   **Granular Memory:** Use internal memory to trace the *exact* sequence of events, including specific user feedback, minor bug fixes, and creative tangents.
    *   *Note: In the future, the Flight Recorder will evolve to include more narrative detail, reducing reliance on internal memory.*
3.  **Visual Taxonomy:**
    *   **👤 Director Nodes:** Directives, pivots, and feedback.
    *   **🤖 Executor Nodes:** Research, tool use, and code implementation.
    *   **🐞 Detour Nodes:** Resolved bugs and technical obstacles.
4.  **Generate Flowchart Syntax:**
    *   **The Integrated Node:** Use semantic shapes and HTML-enhanced labels from v2.12.
    *   **Reference Anchors:** Every node should attempt to include links to the Summary (§) and Git (🐙) where evidence exists.
5.  **CRITICAL: Backtick Handling:** Use triple-escaping `\\\`code\\\`` for all labels.
6.  **Write to File:** Save directly to the `vault_output_directory`.

## Output Structure

1.  **YAML Frontmatter**
2.  **Interactive Dashboard**
3.  **Topological Map** (Ultra-High Resolution Trace)
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
