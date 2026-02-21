# Shared Skill Settings

This directory contains configuration files that are shared across multiple Gemini CLI skills to ensure consistency and reduce redundancy.

## `skill_settings.md`

This file provides a centralized location for templates and settings used by various skills. Storing these settings here allows for easy updates and ensures that skills like `obsidian-chat-summary` and `conversation-flow` produce output with consistent formatting.

### Structure

The file uses Markdown headings to separate different configuration sections. Each section contains templates that other skills can read and utilize.

-   **`file-naming-convention`**: Defines the standard format for generated filenames.
-   **`frontmatter-template`**: Provides the YAML frontmatter structure for Markdown files.
-   **`identifying-information-template`**: A template for including metadata like OS and working directory.

### Usage

To allow a skill to access this shared file, the Gemini CLI must be launched with the `--include-directories` flag pointing to this directory's absolute path.

**Example:**
`gemini --include-directories /path/to/_shared-gemini`

The skill's `SKILL.md` can then instruct the agent to read `../_shared-gemini/skill_settings.md` to fetch the required templates.
