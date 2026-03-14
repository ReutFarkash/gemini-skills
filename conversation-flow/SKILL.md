---
name: conversation-flow
description: Use when the user needs to visualize a complex session, map narrative pivots, or identify open loops and technical decisions. Provides a high-resolution, HTML-linked topological map of the conversation.
version: v1.1.0
---

# Conversation Flow (v3.3 - Architect Refined)

## Overview
This skill generates a high-fidelity narrative map that prioritizes **Resolution Persistence** and **Visual Clarity**. It uses a structured topological approach to link technical turns, project shifts, and strategic decisions.

## Workflow: Generating a v3.3 Flow Analysis

### Step 1: Gathering & Partitioning
1. **Identify Projects:** Analyze the session to group turns by project (e.g., `Skills Dev`, `Retrospective Recovery`).
2. **Context Warm-up:**
   - Read `../_shared-gemini/skill_settings.md` for templates.
   - Read `meta/SESSION_FLIGHT_RECORDER.md` for Git SHAs and outcomes.

### Step 2: Visual Taxonomy & Styling
Apply the visual standards and Mermaid `classDef` blocks defined in **[mermaid_standards.md](references/mermaid_standards.md)**.
- **MANDATORY:** Group related nodes into `subgraph ProjectName`.
- **MANDATORY:** Use internal Obsidian links (`<a class='internal-link'>`) for session persistence.

### Step 3: Syntax Generation
1. Generate the Mermaid graph ensuring all labels are double-quoted and backticks are triple-escaped.
2. List active skills in the `[!ABSTRACT]` callout or a floating subgraph. Do NOT link skill nodes to the narrative flow.

### Step 4: Pre-Flight Validation & Correction Loop
1.  **Run Internal Validation:** After drafting the output file but BEFORE finishing the session, you MUST:
    `node scripts/validate_mermaid.cjs <path_to_draft_file>`
2.  **Internal Correction:** If the validator outputs any errors (e.g., "Label must be wrapped in double quotes"):
    -   You MUST perform the fix internally using the `replace` tool.
    -   DO NOT report the errors to the user as a final failure; treat this as an internal development step.
3.  **Final Verification:** Only present the finalized, error-free output to the user once the validation script returns: `✅ Mermaid syntax is valid.`

### Step 5: Final Delivery
1. Provide the finalized, verified `[!ABSTRACT]` callout and Mermaid map.
2. Provide the chat save tag as the final, unstyled line of the response: `#chat/save/YYYY-MM-DD_HHMMSS-description`.

## Output Structure
1. YAML Frontmatter
2. [!ABSTRACT] Callout (Metadata, Active Skills, versions)
3. Mermaid Topological Map (with subgraphs)
4. Textual Breakdown (Summary, Open Loops, Decisions)
