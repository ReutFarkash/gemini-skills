---
name: session-checkpoint
description: Provides a concise overview of the current Gemini CLI session, including active tasks, recent challenges, tool permissions, and overall context. Use to get a quick "checkpoint" of the conversation.
---

# Session Checkpoint

## Overview

This skill allows the Gemini CLI agent to provide a comprehensive, real-time snapshot of the current conversational session. It summarizes key ongoing activities, recent challenges, the scope of its operational permissions, and relevant contextual information.

## Workflow: Generating a Session Checkpoint

When triggered, the agent will perform the following steps to construct a session checkpoint:

1.  **Identify Current Activity:** Analyze the most recent turns of the conversation to determine the primary task or goal currently being pursued.
2.  **Pinpoint Recent Challenges/Sticking Points:** Review the conversation for any issues, errors, or significant blockers that were recently encountered or are still unresolved.
3.  **Summarize Tool Permissions & Security Context:**
    *   List the types of tools that have been used or are available (e.g., `read_file`, `write_file`, `run_shell_command`).
    *   Emphasize that every tool action requires explicit user confirmation.
    *   State whether the agent is operating inside or outside a sandbox and remind the user of the security implications.
4.  **Detail Relevant Context & Configuration:**
    *   Reference the presence and purpose of the `GEMINI.md` file in the current working directory.
    *   Mention any "facts" that have been saved using the `save_memory` tool.
    *   List any other skills that are currently active (e.g., `obsidian-chat-summary`).
    *   State the current working directory.
5.  **Format and Present:** Compile all gathered information into a clear, concise, and structured Markdown output. Avoid fluff and focus on actionable or highly relevant details.
