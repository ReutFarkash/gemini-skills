#!/usr/bin/env node

/**
 * Validates Mermaid.js syntax for the Conversation Flow skill (v3.3 Architect Refined).
 * Enforces:
 * 1. Matching brackets for each node type.
 * 2. Labels MUST be wrapped in double quotes.
 * 3. NO escaped backslashes (e.g., \"Label\").
 * 4. HTML links MUST use single quotes for attributes.
 */

const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: No file path provided.');
  process.exit(1);
}

try {
  const content = fs.readFileSync(path.resolve(filePath), 'utf8');
  const mermaidMatch = content.match(/```mermaid([\s\S]*?)```/);

  if (!mermaidMatch) {
    console.log('No Mermaid block found. Validation skipped.');
    process.exit(0);
  }

  const mermaidSyntax = mermaidMatch[1];
  const lines = mermaidSyntax.split('\n');
  let errors = [];

  const bracketsMap = {
    '((': '))',
    '([': '])',
    '{{': '}}',
    '[': ']',
    '(': ')',
    '{': '}'
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('graph') || trimmedLine.startsWith('classDef') || trimmedLine.startsWith('%%') || trimmedLine.includes('-->')) {
      return;
    }

    const nodeRegex = /(\w+)(\(\(|\(\[|\{\{|\[|\(|\{)(.*)/;
    const match = trimmedLine.match(nodeRegex);

    if (match) {
      const open = match[2];
      const close = bracketsMap[open];
      const contentWithClose = match[3];

      if (!contentWithClose.includes(close)) {
        errors.push(`Line ${index + 1}: Missing closing bracket '${close}' for node type '${open}'.`);
        return;
      }

      const labelPart = contentWithClose.substring(0, contentWithClose.lastIndexOf(close)).trim();
      
      if (!labelPart.startsWith('"') || !labelPart.endsWith('"')) {
        errors.push(`Line ${index + 1}: Label must be wrapped in double quotes (e.g., "${labelPart}").`);
      } else {
        if (labelPart.includes('\\"')) {
          errors.push(`Line ${index + 1}: DO NOT use escaped backslashes (\") for labels. Use simple double quotes.`);
        }
        if (labelPart.includes('="') || labelPart.includes('=\\"')) {
           errors.push(`Line ${index + 1}: Use single quotes for HTML attributes inside labels.`);
        }
      }
    }
  });

  if (errors.length > 0) {
    console.error('❌ Mermaid Validation Failed (v3.3 Standards):');
    errors.forEach(err => console.error(`  - ${err}`));
    process.exit(1);
  } else {
    console.log('✅ Mermaid syntax (v3.3) is valid.');
    process.exit(0);
  }

} catch (err) {
  console.error(`Error reading file: ${err.message}`);
  process.exit(1);
}
