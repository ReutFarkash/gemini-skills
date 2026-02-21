---
name: conversation-flow
description: Generates a Mermaid.js flowchart and a textual summary of the current conversation's narrative structure, including main goals, tangents, and open loops.
---

# Conversation Flow

## Overview

This skill enables the Gemini CLI agent to analyze the current conversation's history and generate a visual flowchart of its narrative structure using Mermaid.js syntax. It provides a clear overview of the main goals, tangents, sub-problems, and unresolved "open loops" in the discussion.

## Workflow: Generating a Conversation Flow

When triggered, the agent will perform the following steps to construct a conversation flow analysis:

1.  **Read Shared Settings:** Read the `../_shared-gemini/skill_settings.md` file to get the file naming convention, frontmatter template, and identifying information template.
2.  **Analyze Conversation History:** Review the entire conversation to identify the main goals, significant tangents, problems encountered, and their resolutions.
3.  **Identify Open Loops:** Specifically look for questions that were not fully answered or tasks that were started but not completed.
4.  **Generate Flowchart Syntax:**
    *   Structure the conversation's narrative as a graph.
    *   Generate the code for this graph using **Mermaid.js** flowchart syntax (`graph TD` or `graph LR`).
    *   Nodes in the graph should represent states like "Start", "Goal", "Sub-Problem", "Tangent", "Decision", and "Resolution".
    *   **Important:** Any backticks (\`) used inside node labels must be escaped. For example, instead of writing `[Node with \`code\`]`, you MUST write `[Node with \\\`code\\\`]`.
5.  **Verify and Correct Escaping:** Review the generated Mermaid.js syntax. If any backticks inside node labels are not escaped, use a replacement tool to replace them with an escaped backslash (e.g., replace `\`code\`` with `\\\`code\\\``).
6.  **Generate Textual Summary:**
    *   Write a brief summary of the conversation's main objectives.
    *   Create a clear list of any identified "Open Loops".
    *   Highlight any key decisions that changed the course of the conversation.
7.  **Format and Present:**
    *   Create a Markdown file.
    *   Construct the frontmatter using the template from the shared settings.
    *   Add the identifying information (working directory, OS) using the template from the shared settings.
    *   Place the Mermaid.js flowchart syntax inside a `\`\`\`mermaid` code block for rendering, ensuring to escape the backticks.
    *   Append the textual summary below the flowchart.
8.  **Write to File:** Save the output to a file in the `output/` directory of the current working directory, using the filename format from the shared settings (e.g., `YYYY-MM-DD_HHMMSS-conversation-flow.md`).

## Output Structure

The generated Markdown file will have the following structure:

1.  **YAML Frontmatter:** For tags, date, and source, based on the shared settings.
2.  **Identifying Information:** The working directory and operating system.
3.  **Mermaid Flowchart:** The visual representation of the conversation.
4.  **Textual Summary:** A summary of the conversation's main objectives, open loops, and key decisions.

### Example Mermaid.js Output

```
\`\`\`mermaid
graph TD
    A[Start: Main Goal] --> B{Sub-Problem};
    B --> C[Tangent: Side Discussion];
    C --> B;
    B --> D[Resolution];
    D --> E[Next Goal];
    C --> F(Open Loop: Unresolved Question);
\`\`\`
```
