# Gemini CLI Skills

A collection of specialized expert skills for the [Gemini CLI](https://github.com/google/gemini-cli). These skills are designed to enhance the terminal-based AI agent experience, focusing on Obsidian integration, workflow visualization, and automated documentation.

## Included Skills

- **`obsidian-chat-summary`**: Generates structured Markdown summaries of chat sessions for Obsidian vaults. [Read the blog post](https://reutfarkash.github.io/Blog/posts/Obsidian-Chat-Summary/)
- **`conversation-flow`**: Visualizes the narrative structure of a conversation using Mermaid.js flowcharts.
- **`session-checkpoint`**: Provides a real-time snapshot of the current session's tasks, challenges, and context. [Read the blog post](https://reutfarkash.github.io/Blog/posts/Session-Checkpoint/)
- **`project-maintainer`**: Automates the maintenance of `STATUS.md`, `HISTORY.md`, and `PROJECT_TODO.md` files, tethering them to Git SHAs.

## Shared Settings

This repository includes a `_shared-gemini` directory containing centralized templates for frontmatter, file naming conventions, and identifying information. This ensures a consistent "DRY" (Don't Repeat Yourself) architecture across all skills.

## Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/ReutFarkash/gemini-skills.git
```

### 2. Install a Skill
```bash
gemini skills install ./gemini-skills/<skill-name>/SKILL.md --scope user
```

### 3. Launch with Shared Context
To ensure skills can access the shared templates, launch your Gemini session with the `--include-directories` flag pointing to the `_shared-gemini` folder:

```bash
gemini --include-directories /path/to/gemini-skills/_shared-gemini
```

## More Resources
Check out the [full blog](https://reutfarkash.github.io/Blog/) for more technical deep-dives into Obsidian and AI workflows.

## Contributing
These skills are part of an evolving ecosystem. Feel free to open issues or submit pull requests to improve the logic or add new capabilities.
